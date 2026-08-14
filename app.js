const $ = id => document.getElementById(id);

const inputs = {
  refAperture:$("refAperture"), refIso:$("refIso"), refShutter:$("refShutter"), refNd:$("refNd"),
  newAperture:$("newAperture"), newIso:$("newIso"), newShutter:$("newShutter"), newNd:$("newNd")
};

let sensitivityMode="iso";
let cameraMode="FX30";
let gammaMode="slog3";
let shutterMode="speed";
let frequencyMode="50";
let currentFps=25;
let manualParam="aperture";
let internalUpdate=false;

const sensitivityState={
  iso:{ref:800,new:1600},
  gain:{ref:0,new:6}
};

const FPS_BY_FREQUENCY={
  "50":[25,50,100,200],
  "60":[23.98,24,29.97,30,60,120,240]
};

const APERTURE_THIRDS=[
  1.0,1.1,1.2,1.4,1.6,1.8,2.0,2.2,2.5,2.8,3.2,3.5,4.0,4.5,5.0,5.6,
  6.3,7.1,8.0,9.0,10.0,11.0,13.0,14.0,16.0,18.0,20.0,22.0
];

const ISO_THIRDS=[
  50,64,80,100,125,160,200,250,320,400,500,640,800,1000,1250,1600,
  2000,2500,3200,4000,5000,6400,8000,10000,12800,16000,20000,25600,
  32000,40000,51200
];

const ISO_MAIN=[100,200,400,800,1600,3200,6400,12800,25600,51200];
const GAIN_MAIN=[-6,0,6,12,18,24,30,36,42,48];
const GAIN_FINE=[];
for(let g=-12;g<=54;g+=2) GAIN_FINE.push(g);

// Sony-documented Base ISO / Base Sensitivity.
// Empty array = Sony does not explicitly define Base ISO for that camera in this gamma.
const CAMERA_BASE_ISO={
  FX30:{
    slog3:[800,2500],
    scinetone:[125,400]
  },
  FX3:{
    slog3:[800,12800],
    scinetone:[100,2000]
  },
  FX5:{
    slog3:[800,4000,12800],
    scinetone:[]
  },
  FX6:{
    slog3:[800,12800],
    scinetone:[320,5000]
  }
};

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
function fmtGain(v,withUnit=true){
  if(!Number.isFinite(v))return "—";
  const n=Number(v.toFixed(1));
  const txt=`${n>0?"+":""}${String(n).replace(".",",")}`;
  return withUnit?`${txt} dB`:txt;
}
function formatSensitivity(v){
  return sensitivityMode==="iso"?`ISO ${fmtIso(v)}`:fmtGain(v,true);
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
function stepAperture(value,direction){
  let i=nearestIndex(APERTURE_THIRDS,value,true);
  i=Math.max(0,Math.min(APERTURE_THIRDS.length-1,i+direction));
  return APERTURE_THIRDS[i];
}

function sensitivityValid(v){
  return sensitivityMode==="iso"?v>0:Number.isFinite(v);
}
function sensitivityDeltaStops(refValue,newValue){
  return sensitivityMode==="iso"?log2(newValue/refValue):(newValue-refValue)/6;
}
function targetSensitivityFromStops(refValue,requiredStops){
  if(sensitivityMode==="iso"){
    const raw=refValue*Math.pow(2,requiredStops);
    return ISO_THIRDS[nearestIndex(ISO_THIRDS,raw,true)];
  }
  const raw=refValue+requiredStops*6;
  return GAIN_FINE[nearestIndex(GAIN_FINE,raw,false)];
}
function stepSensitivity(value,direction){
  if(sensitivityMode==="iso"){
    let i=nearestIndex(ISO_THIRDS,value,true);
    i=Math.max(0,Math.min(ISO_THIRDS.length-1,i+direction));
    return ISO_THIRDS[i];
  }
  let i=nearestIndex(GAIN_FINE,value,false);
  i=Math.max(0,Math.min(GAIN_FINE.length-1,i+direction));
  return GAIN_FINE[i];
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

function currentBaseIsos(){
  return CAMERA_BASE_ISO[cameraMode]?.[gammaMode]||[];
}
function isNativeIso(v){
  return sensitivityMode==="iso"&&currentBaseIsos().some(x=>Math.abs(x-v)<0.001);
}
function formatThousands(v){
  return Number(v).toLocaleString("fr-FR").replace(/\u202f/g," ");
}

function updateBaseIsoNote(){
  const bases=currentBaseIsos();
  const note=$("baseIsoNote");
  if(!note)return;
  if(bases.length){
    note.classList.remove("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>ISO natifs / Lo-Hi · ${cameraMode} · ${gammaMode==="slog3"?"S-Log3":"S-Cinetone"} : ${bases.map(formatThousands).join(" / ")}</span>`;
  }else{
    note.classList.add("no-base");
    note.innerHTML=`<span class="base-dot"></span><span>${cameraMode} · S-Cinetone : repères Lo/Hi non renseignés</span>`;
  }
}

function sensitivityQuickValues(){
  if(sensitivityMode==="gain")return GAIN_MAIN;
  return [...new Set([...ISO_MAIN,...currentBaseIsos()])].sort((a,b)=>a-b);
}

function renderSensitivityRows(){
  const values=sensitivityQuickValues();
  const ref=$("refSensitivityChips");
  const neu=$("newSensitivityChips");
  const render=(wrap,current)=>{
    if(!wrap)return;
    wrap.innerHTML=values.map(v=>{
      const active=Math.abs(v-current)<0.001?" active":"";
      const native=isNativeIso(v)?" native-iso":"";
      const label=sensitivityMode==="iso"?String(v):fmtGain(v,false);
      return `<button class="${(active+native).trim()}" data-value="${v}">${label}</button>`;
    }).join("");
  };
  render(ref,num(inputs.refIso.value));
  render(neu,num(inputs.newIso.value));
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
      const required=-(dA+dS+dN);
      const target=targetSensitivityFromStops(rS,required);
      inputs.newIso.value=sensitivityMode==="iso"?fmtIso(target):fmt(target,1);
    }
  }else{
    const nS=num(inputs.newIso.value);
    if(sensitivityValid(nS)){
      const dI=sensitivityDeltaStops(rS,nS);
      const dS=log2(tN/tR);
      const dN=-(nNd-rNd);
      const required=-(dI+dS+dN);
      inputs.newAperture.value=fmtAperture(targetApertureFromStops(rN,required));
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
  $("refSensitivityHint").textContent=gain?"pas de 2 dB":"ajustement fin";
  $("newSensitivityHint").textContent=gain?"pas de 2 dB":"ajustement fin";
  document.querySelectorAll(".sensitivity-step-btn").forEach(btn=>{
    btn.textContent=gain?(Number(btn.dataset.direction)<0?"−2":" +2"):(Number(btn.dataset.direction)<0?"−⅓":"+⅓");
  });
}

function updateActiveChips(){
  document.querySelectorAll(".chips[data-target]").forEach(group=>{
    const id=group.dataset.target;
    const inp=inputs[id];
    if(!inp)return;
    const value=num(inp.value);
    group.querySelectorAll("button").forEach(btn=>{
      const v=Number(btn.dataset.value??num(btn.textContent));
      btn.classList.toggle("active",Number.isFinite(v)&&Math.abs(v-value)<0.001);
      if(id==="refIso"||id==="newIso"){
        btn.classList.toggle("native-iso",sensitivityMode==="iso"&&isNativeIso(v));
      }
    });
  });
}

function centerChipRowForTarget(id,smooth=false){
  const group=document.querySelector(`.chips[data-target="${id}"]`);
  const inp=inputs[id];
  if(!group||!inp||group.scrollWidth<=group.clientWidth)return;
  const value=num(inp.value);
  if(!Number.isFinite(value))return;
  const buttons=[...group.querySelectorAll("button")];
  if(!buttons.length)return;

  let target=buttons[0],best=Infinity;
  buttons.forEach(btn=>{
    const v=Number(btn.dataset.value??num(btn.textContent));
    if(!Number.isFinite(v))return;
    const d=(id==="refIso"||id==="newIso")&&sensitivityMode==="gain"
      ?Math.abs(v-value)
      :(v>0&&value>0?Math.abs(Math.log(v/value)):Math.abs(v-value));
    if(d<best){best=d;target=btn;}
  });
  const left=target.offsetLeft-(group.clientWidth-target.offsetWidth)/2;
  group.scrollTo({left:Math.max(0,left),behavior:smooth?"smooth":"auto"});
}
function centerExposureRows(smooth=false){
  ["refAperture","refIso","newAperture","newIso"].forEach(id=>centerChipRowForTarget(id,smooth));
}

function updateUI(){
  $("refShutterEquiv").textContent=shutterEquiv(num(inputs.refShutter.value));
  $("newShutterEquiv").textContent=shutterEquiv(num(inputs.newShutter.value));

  solveAuto();
  updateModes();
  renderSensitivityRows();
  updateActiveChips();
  updateBaseIsoNote();

  requestAnimationFrame(()=>{
    centerExposureRows(false);
  });

  const d=calcDeltas();
  if(!d){
    ["resultValue","resultState","resultDetail","equivMessage","quickAperture","quickIso","quickShutter","quickNd"]
      .forEach(id=>$(id).textContent="—");
    return;
  }

  const rN=num(inputs.refAperture.value),nN=num(inputs.newAperture.value);
  const rS=num(inputs.refIso.value),nS=num(inputs.newIso.value);

  if(manualParam==="aperture"){
    $("resultValue").textContent=formatSensitivity(nS);
    $("equivMessage").textContent=`${fmtAperture(nN)} → ${formatSensitivity(nS)} pour conserver l’exposition.`;
  }else{
    $("resultValue").textContent=`${fmtAperture(nN)} (f/ ou T)`;
    $("equivMessage").textContent=`${formatSensitivity(nS)} → ${fmtAperture(nN)} pour conserver l’exposition.`;
  }

  $("resultState").textContent=Math.abs(d.total)<0.08
    ?"EXPOSITION ÉQUIVALENTE"
    :`${fmtStop(d.total)} D’ÉCART APRÈS ARRONDI`;

  const sensDetail=sensitivityMode==="iso"
    ?`ISO ${fmtIso(rS)} → ${fmtIso(nS)}`
    :`${fmtGain(rS)} → ${fmtGain(nS)}`;

  $("resultDetail").textContent=
    `${fmtAperture(rN)} → ${fmtAperture(nN)} : ${fmtStop(d.dA)} · ${sensDetail} : ${fmtStop(d.dI)}`;

  $("quickAperture").textContent=fmtStop(d.dA);
  $("quickIso").textContent=fmtStop(d.dI);
  $("quickShutter").textContent=fmtStop(d.dS);
  $("quickNd").textContent=fmtStop(d.dN);

  requestAnimationFrame(()=>centerExposureRows(false));
}

// Event delegation for all value chips, including dynamically rendered ISO/Gain rows
document.addEventListener("click",e=>{
  const btn=e.target.closest(".chips[data-target] button");
  if(!btn)return;
  const group=btn.closest(".chips[data-target]");
  const id=group.dataset.target;
  if(!inputs[id])return;

  const value=btn.dataset.value??btn.textContent;
  inputs[id].value=String(value).replace(",",".");
  if(id==="newAperture")manualParam="aperture";
  if(id==="newIso")manualParam="sensitivity";
  updateUI();
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>centerChipRowForTarget(id,true));
  });
});

document.querySelectorAll(".third-step-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const id=btn.dataset.stepTarget;
    const direction=Number(btn.dataset.direction);
    const current=num(inputs[id].value);
    if(!Number.isFinite(current))return;

    if(id.toLowerCase().includes("iso")){
      const next=stepSensitivity(current,direction);
      inputs[id].value=sensitivityMode==="iso"?fmtIso(next):fmt(next,1);
      if(id==="newIso")manualParam="sensitivity";
    }else{
      if(!(current>0))return;
      inputs[id].value=fmtAperture(stepAperture(current,direction));
      if(id==="newAperture")manualParam="aperture";
    }
    updateUI();
    requestAnimationFrame(()=>{
      requestAnimationFrame(()=>centerChipRowForTarget(id,true));
    });
  });
});

Object.entries(inputs).forEach(([id,inp])=>{
  inp.addEventListener("input",()=>{
    if(internalUpdate)return;
    if(id==="newAperture")manualParam="aperture";
    if(id==="newIso")manualParam="sensitivity";
    updateUI();
  });
  inp.addEventListener("focus",()=>inp.select());
});

function renderFps(){
  const wrap=$("fpsChoices"),vals=FPS_BY_FREQUENCY[frequencyMode];
  if(!vals.includes(currentFps))currentFps=vals[0];
  wrap.innerHTML=vals.map(v=>`<button class="${Math.abs(v-currentFps)<.001?"active":""}" data-value="${v}">${String(v).replace(".",",")}</button>`).join("");
}

$("fpsChoices").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");
  if(!btn)return;
  currentFps=Number(btn.dataset.value);
  renderFps();
  updateUI();
});

$("cameraMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");
  if(!btn)return;
  cameraMode=btn.dataset.value;
  $("cameraMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  updateUI();
  requestAnimationFrame(()=>requestAnimationFrame(()=>centerExposureRows(true)));
});

$("gammaMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");
  if(!btn)return;
  gammaMode=btn.dataset.value;
  $("gammaMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  updateUI();
  requestAnimationFrame(()=>requestAnimationFrame(()=>centerExposureRows(true)));
});

$("sensitivityMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");
  if(!btn||btn.dataset.value===sensitivityMode)return;

  sensitivityState[sensitivityMode].ref=num(inputs.refIso.value);
  sensitivityState[sensitivityMode].new=num(inputs.newIso.value);

  sensitivityMode=btn.dataset.value;
  $("sensitivityMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));

  inputs.refIso.value=String(sensitivityState[sensitivityMode].ref);
  inputs.newIso.value=String(sensitivityState[sensitivityMode].new);
  manualParam="aperture";

  updateSensitivityLabels();
  updateUI();
  requestAnimationFrame(()=>requestAnimationFrame(()=>centerExposureRows(true)));
});

$("frequencyMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");
  if(!btn)return;
  frequencyMode=btn.dataset.value;
  $("frequencyMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  currentFps=FPS_BY_FREQUENCY[frequencyMode][0];
  renderFps();
  updateUI();
});

$("shutterMode").addEventListener("click",e=>{
  const btn=e.target.closest("button[data-value]");
  if(!btn)return;
  const next=btn.dataset.value;
  if(next===shutterMode)return;

  ["refShutter","newShutter"].forEach(id=>{
    const v=num(inputs[id].value);
    if(v>0)inputs[id].value=fmt(360*currentFps/v,1);
  });

  shutterMode=next;
  $("shutterMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  $("refShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  $("newShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  document.querySelectorAll(".shutter-speed-chips").forEach(el=>el.classList.toggle("hidden",next!=="speed"));
  document.querySelectorAll(".shutter-angle-chips").forEach(el=>el.classList.toggle("hidden",next!=="angle"));
  updateUI();
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
  sensitivityMode="iso"; cameraMode="FX30"; gammaMode="slog3";
  shutterMode="speed"; frequencyMode="50"; currentFps=25; manualParam="aperture";
  sensitivityState.iso={ref:800,new:1600};
  sensitivityState.gain={ref:0,new:6};

  inputs.refAperture.value="2.8";
  inputs.refIso.value="800";
  inputs.refShutter.value="50";
  inputs.refNd.value="0";
  inputs.newAperture.value="4";
  inputs.newIso.value="1600";
  inputs.newShutter.value="50";
  inputs.newNd.value="0";

  [["cameraMode","FX30"],["gammaMode","slog3"],["sensitivityMode","iso"],["frequencyMode","50"],["shutterMode","speed"]]
    .forEach(([id,val])=>$(id).querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.value===val)));

  $("refShutterUnit").textContent="1/x s";
  $("newShutterUnit").textContent="1/x s";
  document.querySelectorAll(".shutter-speed-chips").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".shutter-angle-chips").forEach(el=>el.classList.add("hidden"));
  updateSensitivityLabels();
  renderFps();
  updateUI();
});

// Desktop horizontal navigation
// Keep mouse-wheel horizontal scrolling, but do not capture pointer clicks.
// Auto-centering now handles most navigation, so buttons remain fully clickable.
function bindScrollableRows(){
  document.querySelectorAll(".chips").forEach(row=>{
    if(row.dataset.desktopBound==="1")return;
    row.dataset.desktopBound="1";

    row.addEventListener("wheel",e=>{
      if(row.scrollWidth<=row.clientWidth)return;
      if(Math.abs(e.deltaY)<=Math.abs(e.deltaX))return;
      e.preventDefault();
      row.scrollLeft+=e.deltaY;
    },{passive:false});
  });
}
bindScrollableRows();

const observer=new MutationObserver(()=>bindScrollableRows());
observer.observe(document.body,{childList:true,subtree:true});

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
  localStorage.setItem("bruno-set-tools-theme",next);
  applyTheme(next);
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

updateSensitivityLabels();
renderFps();
updateUI();
requestAnimationFrame(()=>centerExposureRows(false));

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
