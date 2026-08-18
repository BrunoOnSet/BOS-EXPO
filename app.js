const CAMERA_DB_URL="https://raw.githubusercontent.com/BrunoSetTools/BOS-CAMERA-DB/main/cameras.json";
const CAMERA_DB_CACHE_KEY="bos-camera-db-cache-v1";
const FALLBACK_CAMERA_DB={"schemaVersion":1,"databaseVersion":"1.2","updated":"2026-08-18","cameras":[{"id":"fx30","name":"Sony FX30","brand":"Sony","group":"SONY","expo":{"label":"FX30","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3","nativeBases":[{"iso":800,"gainDb":0},{"iso":2500,"gainDb":0}]},"scinetone":{"label":"S-Cinetone","nativeBases":[{"iso":125,"gainDb":0},{"iso":400,"gainDb":0}]}}}},{"id":"fx3","name":"Sony FX3","brand":"Sony","group":"SONY","expo":{"label":"FX3","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3","nativeBases":[{"iso":800,"gainDb":0},{"iso":12800,"gainDb":0}]},"scinetone":{"label":"S-Cinetone","nativeBases":[{"iso":100,"gainDb":0},{"iso":2000,"gainDb":0}]}}}},{"id":"fx5","name":"Sony FX5","brand":"Sony","group":"SONY","expo":{"label":"FX5","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3","nativeBases":[{"iso":800,"gainDb":0},{"iso":4000,"gainDb":0},{"iso":12800,"gainDb":0}]},"scinetone":{"label":"S-Cinetone","nativeBases":[]}}}},{"id":"fx6","name":"Sony FX6","brand":"Sony","group":"SONY","expo":{"label":"FX6","defaultProfile":"slog3","profiles":{"slog3":{"label":"S-Log3","nativeBases":[{"iso":800,"gainDb":0},{"iso":12800,"gainDb":0}]},"scinetone":{"label":"S-Cinetone","nativeBases":[{"iso":320,"gainDb":0},{"iso":5000,"gainDb":0}]}}}}]};
let cameraDb=FALLBACK_CAMERA_DB;
let expoCameras=[];

const $ = id => document.getElementById(id);

const inputs = {
  refAperture:$("refAperture"), refIso:$("refIso"), refShutter:$("refShutter"), refNd:$("refNd"),
  newAperture:$("newAperture"), newIso:$("newIso"), newShutter:$("newShutter"), newNd:$("newNd")
};

let sensitivityMode="iso";
let cameraMode="fx30";
let gammaMode="slog3";
let gainBaseIso=800;
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

function validCameraDb(data){
  return !!(data&&Array.isArray(data.cameras)&&data.cameras.some(c=>c?.id&&c?.expo?.profiles));
}
function setCameraDb(data){
  if(!validCameraDb(data))return false;
  cameraDb=data;
  expoCameras=data.cameras.filter(c=>c?.id&&c?.expo?.profiles&&Object.keys(c.expo.profiles).length);
  if(!expoCameras.length)return false;
  if(!expoCameras.some(c=>c.id===cameraMode))cameraMode=expoCameras[0].id;
  ensureProfileValid();
  ensureGainBaseValid();
  renderCameraButtons();renderGammaButtons();renderGainBaseButtons();
  return true;
}
function loadCachedCameraDb(){
  try{const cached=JSON.parse(localStorage.getItem(CAMERA_DB_CACHE_KEY)||"null");if(cached)setCameraDb(cached);}catch(_){}
}
async function refreshCameraDb(){
  try{
    const res=await fetch(CAMERA_DB_URL,{cache:"no-store"});
    if(!res.ok)throw new Error(String(res.status));
    const data=await res.json();
    if(!setCameraDb(data))throw new Error("invalid camera db");
    try{localStorage.setItem(CAMERA_DB_CACHE_KEY,JSON.stringify(data));}catch(_){}
    saveMethodPreferences();updateUI();
  }catch(_){}
}
function currentCamera(){return expoCameras.find(c=>c.id===cameraMode)||expoCameras[0]||null;}
function currentProfile(){return currentCamera()?.expo?.profiles?.[gammaMode]||null;}
function profileKeys(){return Object.keys(currentCamera()?.expo?.profiles||{});}
function ensureProfileValid(){
  const cam=currentCamera();if(!cam)return;
  const keys=Object.keys(cam.expo.profiles||{});
  if(!keys.includes(gammaMode))gammaMode=(cam.expo.defaultProfile&&keys.includes(cam.expo.defaultProfile))?cam.expo.defaultProfile:keys[0];
}
function currentBaseIsos(){return (currentProfile()?.nativeBases||[]).map(b=>Number(b.iso)).filter(v=>v>0);}
function isNativeIso(v){return sensitivityMode==="iso"&&currentBaseIsos().some(x=>Math.abs(x-v)<0.001);}
function nearestNativeBase(iso){
  const bases=currentBaseIsos();if(!bases.length)return null;
  return bases.reduce((best,b)=>Math.abs(Math.log(b/iso))<Math.abs(Math.log(best/iso))?b:best,bases[0]);
}
function ensureGainBaseValid(preferred){
  const bases=currentBaseIsos();
  if(!bases.length){gainBaseIso=null;return;}
  if(preferred>0)gainBaseIso=nearestNativeBase(preferred);
  else if(!bases.includes(Number(gainBaseIso)))gainBaseIso=bases[0];
}
function isoToGainDb(iso){return gainBaseIso>0&&iso>0?6*log2(iso/gainBaseIso):NaN;}
function gainDbToIso(gain){return gainBaseIso>0&&Number.isFinite(gain)?gainBaseIso*Math.pow(2,gain/6):NaN;}
function snapIso(v){return ISO_THIRDS[nearestIndex(ISO_THIRDS,v,true)];}
function renderCameraButtons(){
  const host=$("cameraMode");if(!host)return;host.innerHTML="";
  expoCameras.forEach(c=>{const b=document.createElement("button");b.type="button";b.dataset.value=c.id;b.textContent=c.expo.label||c.name;b.classList.toggle("active",c.id===cameraMode);host.appendChild(b);});
}
function renderGammaButtons(){
  const host=$("gammaMode"),cam=currentCamera();if(!host||!cam)return;host.innerHTML="";
  Object.entries(cam.expo.profiles||{}).forEach(([key,p])=>{const b=document.createElement("button");b.type="button";b.dataset.value=key;b.textContent=p.label||key;b.classList.toggle("active",key===gammaMode);host.appendChild(b);});
}
function renderGainBaseButtons(){
  const row=$("gainBaseRow"),host=$("gainBaseMode"),help=$("gainBaseHelp");if(!row||!host)return;
  const bases=currentBaseIsos();
  const gainBtn=$("sensitivityMode")?.querySelector('button[data-value="gain"]');if(gainBtn)gainBtn.disabled=!bases.length;
  row.classList.toggle("hidden",sensitivityMode!=="gain"||!bases.length);host.innerHTML="";
  bases.forEach(iso=>{const b=document.createElement("button");b.type="button";b.dataset.value=String(iso);b.textContent=`ISO ${formatThousands(iso)}`;b.classList.toggle("active",Number(gainBaseIso)===iso);host.appendChild(b);});
  if(help)help.textContent=bases.length>1?"0 dB = base native sélectionnée · change de base sans changer l’exposition équivalente":"0 dB = base native de ce profil";
}

function saveMethodPreferences(){
  try{
    localStorage.setItem(METHOD_STORAGE_KEY,JSON.stringify({
      cameraMode,gammaMode,sensitivityMode,shutterMode,currentFps,gainBaseIso
    }));
  }catch(_){}
}
function loadMethodPreferences(){
  try{
    const saved=JSON.parse(localStorage.getItem(METHOD_STORAGE_KEY)||"null");
    if(!saved)return;
    const legacyCameraMap={FX30:"fx30",FX3:"fx3",FX5:"fx5",FX6:"fx6"};
    const wantedCamera=legacyCameraMap[saved.cameraMode]||saved.cameraMode;
    if(expoCameras.some(c=>c.id===wantedCamera))cameraMode=wantedCamera;
    ensureProfileValid();
    if(profileKeys().includes(saved.gammaMode))gammaMode=saved.gammaMode;
    if(["iso","gain"].includes(saved.sensitivityMode))sensitivityMode=saved.sensitivityMode;
    if(Number(saved.gainBaseIso)>0)gainBaseIso=Number(saved.gainBaseIso);
    ensureGainBaseValid();
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
  renderCameraButtons();renderGammaButtons();renderGainBaseButtons();
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
    note.innerHTML=`<span class="base-dot"></span><span>ISO natifs / Lo-Hi · ${currentCamera()?.expo?.label||currentCamera()?.name||cameraMode} · ${currentProfile()?.label||gammaMode} : ${bases.map(formatThousands).join(" / ")}</span>`;
  }else{
    note.classList.add("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>${currentCamera()?.expo?.label||currentCamera()?.name||cameraMode} · ${currentProfile()?.label||gammaMode} : repères Lo/Hi non renseignés</span>`;
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
  $("refSensitivityUnit").textContent=gain?(gainBaseIso?`dB · base ISO ${formatThousands(gainBaseIso)}`:"dB"):"sensibilité";
  $("newSensitivityLabel").textContent=gain?"GAIN":"ISO";
  $("newSensitivityUnit").textContent=gain?(gainBaseIso?`dB · base ISO ${formatThousands(gainBaseIso)}`:"dB · compensation"):"compensation";
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
  const oldBase=gainBaseIso,oldRef=num(inputs.refIso.value),oldNew=num(inputs.newIso.value);
  const isoRef=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldRef/6):oldRef;
  const isoNew=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldNew/6):oldNew;
  cameraMode=btn.dataset.value;ensureProfileValid();ensureGainBaseValid(isoRef);
  if(sensitivityMode==="gain"){
    if(gainBaseIso){inputs.refIso.value=fmt(isoToGainDb(isoRef),1);inputs.newIso.value=fmt(isoToGainDb(isoNew),1);}
    else{sensitivityMode="iso";inputs.refIso.value=String(snapIso(isoRef));inputs.newIso.value=String(snapIso(isoNew));}
  }
  renderCameraButtons();renderGammaButtons();renderGainBaseButtons();
  saveMethodPreferences(); updateUI();
});
$("gammaMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn)return;
  const oldBase=gainBaseIso,oldRef=num(inputs.refIso.value),oldNew=num(inputs.newIso.value);
  const isoRef=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldRef/6):oldRef;
  const isoNew=sensitivityMode==="gain"&&oldBase?oldBase*Math.pow(2,oldNew/6):oldNew;
  gammaMode=btn.dataset.value;ensureGainBaseValid(isoRef);
  if(sensitivityMode==="gain"){
    if(gainBaseIso){inputs.refIso.value=fmt(isoToGainDb(isoRef),1);inputs.newIso.value=fmt(isoToGainDb(isoNew),1);}
    else{sensitivityMode="iso";inputs.refIso.value=String(snapIso(isoRef));inputs.newIso.value=String(snapIso(isoNew));}
  }
  renderGammaButtons();renderGainBaseButtons();
  saveMethodPreferences(); updateUI();
});
$("sensitivityMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]"); if(!btn||btn.dataset.value===sensitivityMode)return;
  const next=btn.dataset.value;
  if(next==="gain"){
    const bases=currentBaseIsos();
    if(!bases.length){updateBaseIsoNote();return;}
    const refIso=num(inputs.refIso.value),newIso=num(inputs.newIso.value);
    ensureGainBaseValid(refIso);
    sensitivityState.iso={ref:refIso,new:newIso};
    sensitivityMode="gain";
    inputs.refIso.value=fmt(isoToGainDb(refIso),1);
    inputs.newIso.value=fmt(isoToGainDb(newIso),1);
  }else{
    const refGain=num(inputs.refIso.value),newGain=num(inputs.newIso.value);
    sensitivityState.gain={ref:refGain,new:newGain};
    const refIso=gainDbToIso(refGain),newIso=gainDbToIso(newGain);
    sensitivityMode="iso";
    inputs.refIso.value=String(snapIso(refIso));
    inputs.newIso.value=String(snapIso(newIso));
  }
  manualParam="aperture";
  syncMethodButtons();saveMethodPreferences();updateUI();
});
$("gainBaseMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");if(!btn||sensitivityMode!=="gain")return;
  const oldBase=Number(gainBaseIso),nextBase=Number(btn.dataset.value);if(!(oldBase>0&&nextBase>0)||oldBase===nextBase)return;
  const refIso=oldBase*Math.pow(2,num(inputs.refIso.value)/6);
  const newIso=oldBase*Math.pow(2,num(inputs.newIso.value)/6);
  gainBaseIso=nextBase;
  inputs.refIso.value=fmt(isoToGainDb(refIso),1);
  inputs.newIso.value=fmt(isoToGainDb(newIso),1);
  renderGainBaseButtons();saveMethodPreferences();updateUI();
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
  sensitivityMode="iso"; cameraMode="fx30"; gammaMode="slog3"; gainBaseIso=800; shutterMode="speed"; currentFps=25;
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

setCameraDb(FALLBACK_CAMERA_DB);
loadCachedCameraDb();
loadMethodPreferences();
ensureProfileValid();ensureGainBaseValid();
syncMethodButtons();
updateUI();
refreshCameraDb();

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
