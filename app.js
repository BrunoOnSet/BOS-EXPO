const $ = id => document.getElementById(id);

const inputs = {
  refAperture:$("refAperture"), refIso:$("refIso"), refShutter:$("refShutter"), refNd:$("refNd"),
  newAperture:$("newAperture"), newIso:$("newIso"), newShutter:$("newShutter"), newNd:$("newNd")
};

let sensitivityMode="iso";
let cameraMode="FX30";
let gammaMode="slog3";
let shutterMode="speed";
let currentFps=25;
let manualParam="aperture";
let internalUpdate=false;

const sensitivityState={
  iso:{ref:800,new:1600},
  gain:{ref:0,new:6}
};

const FPS_VALUES=[23.98,24,25,29.97,30,50,60,100,120,200,240];

const APERTURE_THIRDS=[
  1.0,1.1,1.2,1.4,1.6,1.8,2.0,2.2,2.5,2.8,3.2,3.5,4.0,4.5,5.0,5.6,
  6.3,7.1,8.0,9.0,10.0,11.0,13.0,14.0,16.0,18.0,20.0,22.0
];
const ISO_THIRDS=[
  50,64,80,100,125,160,200,250,320,400,500,640,800,1000,1250,1600,
  2000,2500,3200,4000,5000,6400,8000,10000,12800,16000,20000,25600,
  32000,40000,51200
];
const GAIN_VALUES=[];
for(let g=-12;g<=54;g+=1) GAIN_VALUES.push(g);

const SHUTTER_SPEEDS=[25,40,50,100,200,400,800];
const SHUTTER_ANGLES=[45,60,90,120,144,172.8,180,216,270,360];
const ND_STOPS=[0,1,2,3,4,5,6,7,8];

const CAMERA_BASE_ISO={
  FX30:{slog3:[800,2500],scinetone:[125,400]},
  FX3:{slog3:[800,12800],scinetone:[100,2000]},
  FX5:{slog3:[800,4000,12800],scinetone:[]},
  FX6:{slog3:[800,12800],scinetone:[320,5000]}
};

const METHOD_STORAGE_KEY="bruno-set-tools-exposure-method-v2";

function num(v){return Number(String(v).replace(",",".").replace("+","").replace(" dB","").trim());}
function log2(v){return Math.log(v)/Math.log(2);}
function fmt(v,d=1){
  if(!Number.isFinite(v))return "—";
  const n=Number(v.toFixed(d));
  return String(n).replace(".",",");
}
function fmtStop(v){
  if(!Number.isFinite(v))return "—";
  if(Math.abs(v)<0.005)return "0,0 stop";
  return `${v>0?"+":"−"}${Math.abs(v).toFixed(1).replace(".",",")} stop`;
}
function fmtAperture(v){return Number.isFinite(v)?fmt(v,2):"—";}
function fmtIso(v){return Number.isFinite(v)?String(Math.max(1,Math.round(v))):"—";}
function fmtGain(v,unit=true){
  if(!Number.isFinite(v))return "—";
  const n=Number(v.toFixed(1));
  const txt=`${n>0?"+":""}${String(n).replace(".",",")}`;
  return unit?`${txt} dB`:txt;
}
function formatSensitivity(v){
  return sensitivityMode==="iso"?`ISO ${fmtIso(v)}`:fmtGain(v,true);
}
function formatThousands(v){
  return Number(v).toLocaleString("fr-FR").replace(/\u202f/g," ");
}

function nearestIndex(list,value,logarithmic=true){
  let best=0,dist=Infinity;
  list.forEach((v,i)=>{
    const d=logarithmic&&v>0&&value>0?Math.abs(Math.log(v/value)):Math.abs(v-value);
    if(d<dist){dist=d;best=i;}
  });
  return best;
}
function apertureIndexIfStandard(value){
  if(!(value>0))return -1;
  const i=nearestIndex(APERTURE_THIRDS,value,true);
  const ratio=Math.max(APERTURE_THIRDS[i],value)/Math.min(APERTURE_THIRDS[i],value);
  return ratio<1.025?i:-1;
}
function apertureDeltaStops(refValue,newValue){
  const ri=apertureIndexIfStandard(refValue);
  const ni=apertureIndexIfStandard(newValue);
  if(ri>=0&&ni>=0)return (ri-ni)/3;
  return 2*log2(refValue/newValue);
}
function targetApertureFromStops(refValue,requiredStops){
  const ri=apertureIndexIfStandard(refValue);
  if(ri>=0){
    const targetIndex=Math.round(ri-requiredStops*3);
    return APERTURE_THIRDS[Math.max(0,Math.min(APERTURE_THIRDS.length-1,targetIndex))];
  }
  const raw=refValue/Math.pow(2,requiredStops/2);
  return APERTURE_THIRDS[nearestIndex(APERTURE_THIRDS,raw,true)];
}
function sensitivityValid(v){return sensitivityMode==="iso"?v>0:Number.isFinite(v);}
function sensitivityDeltaStops(refValue,newValue){
  return sensitivityMode==="iso"?log2(newValue/refValue):(newValue-refValue)/6;
}
function targetSensitivityFromStops(refValue,requiredStops){
  if(sensitivityMode==="iso"){
    const raw=refValue*Math.pow(2,requiredStops);
    return ISO_THIRDS[nearestIndex(ISO_THIRDS,raw,true)];
  }
  const raw=refValue+requiredStops*6;
  return GAIN_VALUES[nearestIndex(GAIN_VALUES,raw,false)];
}

function timeFromShutter(v){
  if(!(v>0&&currentFps>0))return NaN;
  return shutterMode==="speed"?1/v:v/(360*currentFps);
}
function shutterEquiv(v){
  if(!(v>0&&currentFps>0))return "—";
  return shutterMode==="speed"
    ?`${fmt(360*currentFps/v,1)}° à ${fmt(currentFps,2)} fps`
    :`1/${fmt(360*currentFps/v,1)} s à ${fmt(currentFps,2)} fps`;
}

function currentBaseIsos(){return CAMERA_BASE_ISO[cameraMode]?.[gammaMode]||[];}
function isNativeIso(v){return sensitivityMode==="iso"&&currentBaseIsos().some(x=>Math.abs(x-v)<0.001);}

function saveMethodPreferences(){
  try{
    localStorage.setItem(METHOD_STORAGE_KEY,JSON.stringify({
      cameraMode,gammaMode,sensitivityMode,shutterMode,currentFps
    }));
  }catch(_){}
}
function loadMethodPreferences(){
  try{
    const saved=JSON.parse(localStorage.getItem(METHOD_STORAGE_KEY)||"null");
    if(!saved)return;
    if(["FX30","FX3","FX5","FX6"].includes(saved.cameraMode))cameraMode=saved.cameraMode;
    if(["slog3","scinetone"].includes(saved.gammaMode))gammaMode=saved.gammaMode;
    if(["iso","gain"].includes(saved.sensitivityMode))sensitivityMode=saved.sensitivityMode;
    if(["speed","angle"].includes(saved.shutterMode))shutterMode=saved.shutterMode;
    if(FPS_VALUES.includes(Number(saved.currentFps)))currentFps=Number(saved.currentFps);

    inputs.refIso.value=String(sensitivityState[sensitivityMode].ref);
    inputs.newIso.value=String(sensitivityState[sensitivityMode].new);
    if(shutterMode==="angle"){
      inputs.refShutter.value="180";
      inputs.newShutter.value="180";
    }
  }catch(_){}
}
function syncMethodButtons(){
  [["cameraMode",cameraMode],["gammaMode",gammaMode],["sensitivityMode",sensitivityMode],["shutterMode",shutterMode]]
    .forEach(([id,val])=>{
      $(id)?.querySelectorAll("button[data-value]").forEach(b=>b.classList.toggle("active",b.dataset.value===String(val)));
    });
  $("fpsRow").classList.toggle("hidden",shutterMode!=="angle");
  $("refShutterUnit").textContent=shutterMode==="speed"?"1/x s":"degrés";
  $("newShutterUnit").textContent=shutterMode==="speed"?"1/x s":"degrés";
}

function updateBaseIsoNote(){
  const bases=currentBaseIsos(),note=$("baseIsoNote");
  if(!note)return;
  if(bases.length){
    note.classList.remove("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>ISO natifs / Lo-Hi · ${cameraMode} · ${gammaMode==="slog3"?"S-Log3":"S-Cinetone"} : ${bases.map(formatThousands).join(" / ")}</span>`;
  }else{
    note.classList.add("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>${cameraMode} · S-Cinetone : repères Lo/Hi non renseignés</span>`;
  }
}

function calcDeltas(){
  const rN=num(inputs.refAperture.value),nN=num(inputs.newAperture.value);
  const rS=num(inputs.refIso.value),nS=num(inputs.newIso.value);
  const rSh=num(inputs.refShutter.value),nSh=num(inputs.newShutter.value);
  const rNd=num(inputs.refNd.value),nNd=num(inputs.newNd.value);
  if(!(rN>0&&nN>0&&sensitivityValid(rS)&&sensitivityValid(nS)&&rSh>0&&nSh>0&&rNd>=0&&nNd>=0))return null;
  const dA=apertureDeltaStops(rN,nN);
  const dI=sensitivityDeltaStops(rS,nS);
  const dS=log2(timeFromShutter(nSh)/timeFromShutter(rSh));
  const dN=-(nNd-rNd);
  return {dA,dI,dS,dN,total:dA+dI+dS+dN};
}

function solveAuto(){
  const rN=num(inputs.refAperture.value),rS=num(inputs.refIso.value);
  const rSh=num(inputs.refShutter.value),nSh=num(inputs.newShutter.value);
  const rNd=num(inputs.refNd.value),nNd=num(inputs.newNd.value);
  if(!(rN>0&&sensitivityValid(rS)&&rSh>0&&nSh>0&&rNd>=0&&nNd>=0))return;
  const tR=timeFromShutter(rSh),tN=timeFromShutter(nSh);
  if(!(tR>0&&tN>0))return;

  internalUpdate=true;
  if(manualParam==="aperture"){
    const nN=num(inputs.newAperture.value);
    if(nN>0){
      const dA=apertureDeltaStops(rN,nN);
      const dS=log2(tN/tR);
      const dN=-(nNd-rNd);
      const target=targetSensitivityFromStops(rS,-(dA+dS+dN));
      inputs.newIso.value=sensitivityMode==="iso"?fmtIso(target):fmt(target,1);
    }
  }else{
    const nS=num(inputs.newIso.value);
    if(sensitivityValid(nS)){
      const dI=sensitivityDeltaStops(rS,nS);
      const dS=log2(tN/tR);
      const dN=-(nNd-rNd);
      inputs.newAperture.value=fmtAperture(targetApertureFromStops(rN,-(dI+dS+dN)));
    }
  }
  internalUpdate=false;
}

function updateModes(){
  const apAuto=manualParam==="sensitivity";
  $("apertureBadge").textContent=apAuto?"AUTO":"MANUEL";
  $("apertureBadge").className=`mode-badge ${apAuto?"auto":"manual"}`;
  $("sensitivityBadge").textContent=apAuto?"MANUEL":"AUTO";
  $("sensitivityBadge").className=`mode-badge ${apAuto?"manual":"auto"}`;
  $("apertureCard").classList.toggle("auto-card",apAuto);
  $("sensitivityCard").classList.toggle("auto-card",!apAuto);
}

function updateSensitivityLabels(){
  const gain=sensitivityMode==="gain";
  $("refSensitivityLabel").textContent=gain?"Gain":"ISO";
  $("refSensitivityUnit").textContent=gain?"dB":"sensibilité";
  $("newSensitivityLabel").textContent=gain?"GAIN":"ISO";
  $("newSensitivityUnit").textContent=gain?"dB · compensation":"compensation";
  $("quickSensitivityLabel").textContent=gain?"Gain":"ISO";
}

function updateSelectDisplays(){
  $("refApertureSelect").innerHTML=`f/${fmtAperture(num(inputs.refAperture.value))} <span>⌄</span>`;
  $("newApertureSelect").innerHTML=`f/${fmtAperture(num(inputs.newAperture.value))} <span>⌄</span>`;

  $("refSensitivitySelect").innerHTML=`${formatSensitivity(num(inputs.refIso.value))} <span>⌄</span>`;
  $("newSensitivitySelect").innerHTML=`${formatSensitivity(num(inputs.newIso.value))} <span>⌄</span>`;

  const rSh=num(inputs.refShutter.value),nSh=num(inputs.newShutter.value);
  $("refShutterSelect").innerHTML=shutterMode==="speed"
    ?`1/${fmt(rSh,1)} s <span>⌄</span>`:`${fmt(rSh,1)}° <span>⌄</span>`;
  $("newShutterSelect").innerHTML=shutterMode==="speed"
    ?`1/${fmt(nSh,1)} s <span>⌄</span>`:`${fmt(nSh,1)}° <span>⌄</span>`;

  const rNd=num(inputs.refNd.value),nNd=num(inputs.newNd.value);
  $("refNdSelect").innerHTML=`${fmt(rNd,0)} ${rNd===1?"stop":"stops"} <span>⌄</span>`;
  $("newNdSelect").innerHTML=`${fmt(nNd,0)} ${nNd===1?"stop":"stops"} <span>⌄</span>`;

  $("fpsSelect").innerHTML=`${fmt(currentFps,2)} fps <span>⌄</span>`;
}

function updateUI(){
  $("refShutterEquiv").textContent=shutterEquiv(num(inputs.refShutter.value));
  $("newShutterEquiv").textContent=shutterEquiv(num(inputs.newShutter.value));
  solveAuto();
  updateModes();
  updateSensitivityLabels();
  updateBaseIsoNote();
  updateSelectDisplays();

  const d=calcDeltas();
  if(!d)return;

  const rN=num(inputs.refAperture.value),nN=num(inputs.newAperture.value);
  const rS=num(inputs.refIso.value),nS=num(inputs.newIso.value);

  if(manualParam==="aperture"){
    $("resultValue").textContent=formatSensitivity(nS);
    $("equivMessage").textContent=`f/${fmtAperture(nN)} → ${formatSensitivity(nS)} pour conserver l’exposition.`;
  }else{
    $("resultValue").textContent=`f/${fmtAperture(nN)}`;
    $("equivMessage").textContent=`${formatSensitivity(nS)} → f/${fmtAperture(nN)} pour conserver l’exposition.`;
  }

  $("resultState").textContent=Math.abs(d.total)<0.08?"EXPOSITION ÉQUIVALENTE":`${fmtStop(d.total)} D’ÉCART APRÈS ARRONDI`;

  const sensDetail=sensitivityMode==="iso"
    ?`ISO ${fmtIso(rS)} → ${fmtIso(nS)}`
    :`${fmtGain(rS)} → ${fmtGain(nS)}`;

  $("resultDetail").textContent=
    `f/${fmtAperture(rN)} → f/${fmtAperture(nN)} : ${fmtStop(d.dA)} · ${sensDetail} : ${fmtStop(d.dI)}`;

  $("quickAperture").textContent=fmtStop(d.dA);
  $("quickIso").textContent=fmtStop(d.dI);
  $("quickShutter").textContent=fmtStop(d.dS);
  $("quickNd").textContent=fmtStop(d.dN);
}

// ---------- Picker ----------
const pickerDialog=$("valuePickerDialog");
const pickerGrid=$("pickerGrid");
const pickerTitle=$("pickerTitle");
let activePickerTarget=null;

function pickerConfig(target){
  if(target==="refAperture"||target==="newAperture"){
    return {title:"Ouverture",values:APERTURE_THIRDS,label:v=>`f/${fmt(v,2)}`};
  }
  if(target==="refIso"||target==="newIso"){
    if(sensitivityMode==="gain"){
      return {title:"Gain",values:GAIN_VALUES,label:v=>fmtGain(v,true)};
    }
    const vals=[...new Set([...ISO_THIRDS,...currentBaseIsos()])].sort((a,b)=>a-b);
    return {title:"ISO",values:vals,label:v=>`ISO ${formatThousands(v)}`,native:v=>isNativeIso(v)};
  }
  if(target==="refShutter"||target==="newShutter"){
    return shutterMode==="speed"
      ?{title:"Shutter — vitesse",values:SHUTTER_SPEEDS,label:v=>`1/${fmt(v,1)} s`}
      :{title:"Shutter — angle",values:SHUTTER_ANGLES,label:v=>`${fmt(v,1)}°`};
  }
  if(target==="refNd"||target==="newNd"){
    return {title:"ND",values:ND_STOPS,label:v=>`${v} ${v===1?"stop":"stops"}`};
  }
  if(target==="fps"){
    return {title:"Cadence",values:FPS_VALUES,label:v=>`${fmt(v,2)} fps`};
  }
  return null;
}

function openPicker(target){
  const cfg=pickerConfig(target);
  if(!cfg)return;
  activePickerTarget=target;
  pickerTitle.textContent=cfg.title;

  const current=target==="fps"?currentFps:num(inputs[target].value);
  pickerGrid.innerHTML=cfg.values.map(v=>{
    const selected=Math.abs(v-current)<0.001?" selected":"";
    const native=cfg.native?.(v)?" native-choice":"";
    return `<button type="button" class="picker-option${selected}${native}" data-value="${v}">${cfg.label(v)}</button>`;
  }).join("");

  pickerDialog.showModal();

  requestAnimationFrame(()=>{
    pickerGrid.querySelector(".picker-option.selected")?.scrollIntoView({block:"center",inline:"nearest"});
  });
}

document.addEventListener("click",e=>{
  const trigger=e.target.closest("[data-picker-target]");
  if(trigger){
    e.preventDefault();
    openPicker(trigger.dataset.pickerTarget);
  }
});

pickerGrid.addEventListener("click",e=>{
  const btn=e.target.closest(".picker-option[data-value]");
  if(!btn||!activePickerTarget)return;
  const v=Number(btn.dataset.value);

  if(activePickerTarget==="fps"){
    currentFps=v;
    saveMethodPreferences();
  }else{
    inputs[activePickerTarget].value=String(v);
    if(activePickerTarget==="newAperture")manualParam="aperture";
    if(activePickerTarget==="newIso")manualParam="sensitivity";
  }

  pickerDialog.close();
  updateUI();
});

$("pickerClose").addEventListener("click",()=>pickerDialog.close());
pickerDialog.addEventListener("click",e=>{if(e.target===pickerDialog)pickerDialog.close();});

// ---------- Method controls ----------
$("cameraMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn)return;
  cameraMode=btn.dataset.value;
  $("cameraMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  saveMethodPreferences(); updateUI();
});
$("gammaMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn)return;
  gammaMode=btn.dataset.value;
  $("gammaMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  saveMethodPreferences(); updateUI();
});
$("sensitivityMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn||btn.dataset.value===sensitivityMode)return;

  sensitivityState[sensitivityMode].ref=num(inputs.refIso.value);
  sensitivityState[sensitivityMode].new=num(inputs.newIso.value);
  sensitivityMode=btn.dataset.value;
  $("sensitivityMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));

  inputs.refIso.value=String(sensitivityState[sensitivityMode].ref);
  inputs.newIso.value=String(sensitivityState[sensitivityMode].new);
  manualParam="aperture";
  saveMethodPreferences(); updateUI();
});
$("shutterMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn)return;
  const next=btn.dataset.value;
  if(next===shutterMode)return;

  ["refShutter","newShutter"].forEach(id=>{
    const v=num(inputs[id].value);
    if(v>0)inputs[id].value=fmt(360*currentFps/v,1);
  });

  shutterMode=next;
  $("shutterMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  $("fpsRow").classList.toggle("hidden",next!=="angle");
  $("refShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  $("newShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  saveMethodPreferences(); updateUI();
});

$("copyRefBtn").addEventListener("click",()=>{
  inputs.newAperture.value=inputs.refAperture.value;
  inputs.newIso.value=inputs.refIso.value;
  inputs.newShutter.value=inputs.refShutter.value;
  inputs.newNd.value=inputs.refNd.value;
  manualParam="aperture";
  updateUI();
});

$("resetBtn").addEventListener("click",()=>{
  sensitivityMode="iso"; cameraMode="FX30"; gammaMode="slog3"; shutterMode="speed"; currentFps=25;
  manualParam="aperture";
  sensitivityState.iso={ref:800,new:1600};
  sensitivityState.gain={ref:0,new:6};

  inputs.refAperture.value="2.8"; inputs.refIso.value="800"; inputs.refShutter.value="50"; inputs.refNd.value="0";
  inputs.newAperture.value="4"; inputs.newIso.value="1600"; inputs.newShutter.value="50"; inputs.newNd.value="0";

  syncMethodButtons(); saveMethodPreferences(); updateUI();
});

// Collapsible "Réglages caméra"
const cameraSettingsPanel=$("cameraSettingsPanel");
const cameraSettingsToggle=$("cameraSettingsToggle");
const cameraSettingsContent=$("cameraSettingsContent");
function setCameraSettingsOpen(open){
  cameraSettingsPanel.classList.toggle("collapsed",!open);
  cameraSettingsToggle.setAttribute("aria-expanded",open?"true":"false");
  cameraSettingsContent.hidden=!open;
}
cameraSettingsToggle.addEventListener("click",()=>{
  setCameraSettingsOpen(cameraSettingsToggle.getAttribute("aria-expanded")!=="true");
});
setCameraSettingsOpen(false);

// Theme
const themeToggle=$("themeToggle"),themeColor=$("themeColor");
function applyTheme(theme){
  const dark=theme==="dark";
  document.body.classList.toggle("dark",dark);
  themeToggle.textContent=dark?"LIGHT":"DARK";
  themeColor.setAttribute("content",dark?"#0B0C0E":"#F3F1EC");
}
applyTheme(localStorage.getItem("bruno-set-tools-theme")||"light");
themeToggle.addEventListener("click",()=>{
  const next=document.body.classList.contains("dark")?"light":"dark";
  localStorage.setItem("bruno-set-tools-theme",next); applyTheme(next);
});

// Tips
const tipsPage=$("tipsPage"),mainApp=$("mainApp");
$("tipsBtn").addEventListener("click",()=>{mainApp.hidden=true;tipsPage.hidden=false;window.scrollTo(0,0);});
$("tipsBackBtn").addEventListener("click",()=>{tipsPage.hidden=true;mainApp.hidden=false;window.scrollTo(0,0);});

// Info
const dialog=$("infoDialog");
$("infoBtn").addEventListener("click",()=>dialog.showModal());
$("closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});

loadMethodPreferences();
syncMethodButtons();
updateUI();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
