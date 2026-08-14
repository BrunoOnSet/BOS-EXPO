const $ = id => document.getElementById(id);

const inputs = {
  refAperture:$("refAperture"), refIso:$("refIso"), refShutter:$("refShutter"), refNd:$("refNd"),
  newAperture:$("newAperture"), newIso:$("newIso"), newShutter:$("newShutter"), newNd:$("newNd")
};

let shutterMode = "speed";
let frequencyMode = "50";
let currentFps = 25;
let manualParam = "aperture"; // aperture or iso
let internalUpdate = false;

const FPS_BY_FREQUENCY = {
  "50":[25,50,100,200],
  "60":[23.98,24,29.97,30,60,120,240]
};

const APERTURE_THIRDS = [
  1.0,1.1,1.2,1.4,1.6,1.8,2.0,2.2,2.5,2.8,3.2,3.5,4.0,4.5,5.0,5.6,
  6.3,7.1,8.0,9.0,10.0,11.0,13.0,14.0,16.0,18.0,20.0,22.0
];
const ISO_THIRDS = [
  50,64,80,100,125,160,200,250,320,400,500,640,800,1000,1250,1600,
  2000,2500,3200,4000,5000,6400,8000,10000,12800,16000,20000,25600
];

function nearestIndex(list, value){
  let best=0, dist=Infinity;
  list.forEach((v,i)=>{
    const d=Math.abs(Math.log(v/value));
    if(d<dist){dist=d;best=i;}
  });
  return best;
}
function snapThird(type, value){
  if(!(value>0)) return NaN;
  const list=type==="aperture" ? APERTURE_THIRDS : ISO_THIRDS;
  return list[nearestIndex(list,value)];
}

function apertureIndexIfStandard(value){
  if(!(value>0)) return -1;
  const i=nearestIndex(APERTURE_THIRDS,value);
  // Accept normal photographic rounding, e.g. 5.6 represents the exact full-stop position.
  const ratio=Math.max(APERTURE_THIRDS[i],value)/Math.min(APERTURE_THIRDS[i],value);
  return ratio < 1.025 ? i : -1;
}

function apertureDeltaStops(refValue,newValue){
  const ri=apertureIndexIfStandard(refValue);
  const ni=apertureIndexIfStandard(newValue);
  if(ri>=0 && ni>=0) return (ri-ni)/3;
  return 2*log2(refValue/newValue);
}

function targetApertureFromStops(refValue, requiredApertureStops){
  const ri=apertureIndexIfStandard(refValue);
  if(ri>=0){
    const targetIndex=Math.round(ri - requiredApertureStops*3);
    const clamped=Math.max(0,Math.min(APERTURE_THIRDS.length-1,targetIndex));
    return APERTURE_THIRDS[clamped];
  }
  return snapThird("aperture", refValue / Math.pow(2, requiredApertureStops/2));
}

function stepThird(type, value, direction){
  const list=type==="aperture" ? APERTURE_THIRDS : ISO_THIRDS;
  let i=nearestIndex(list,value);
  i=Math.max(0,Math.min(list.length-1,i+direction));
  return list[i];
}


function num(v){ return Number(String(v).replace(",", ".").trim()); }
function log2(v){ return Math.log(v)/Math.log(2); }
function fmt(v,d=1){
  if(!Number.isFinite(v)) return "—";
  const n=Number(v.toFixed(d));
  return String(n).replace(".",",");
}
function fmtStop(v){
  if(!Number.isFinite(v)) return "—";
  if(Math.abs(v)<0.005) return "0,0 stop";
  return `${v>0?"+":"−"}${Math.abs(v).toFixed(1).replace(".",",")} stop`;
}
function fmtAperture(v){ return Number.isFinite(v) ? fmt(v,2) : "—"; }
function fmtIso(v){ return Number.isFinite(v) ? String(Math.max(1,Math.round(v))) : "—"; }

function timeFromShutter(v){
  if(!(v>0 && currentFps>0)) return NaN;
  return shutterMode==="speed" ? 1/v : v/(360*currentFps);
}
function shutterEquiv(v){
  if(!(v>0 && currentFps>0)) return "—";
  if(shutterMode==="speed"){
    return `${fmt(360*currentFps/v,1)}° à ${fmt(currentFps,2)} fps`;
  }
  return `1/${fmt(360*currentFps/v,1)} s à ${fmt(currentFps,2)} fps`;
}

function calcDeltas(){
  const rN=num(inputs.refAperture.value), nN=num(inputs.newAperture.value);
  const rIso=num(inputs.refIso.value), nIso=num(inputs.newIso.value);
  const rSh=num(inputs.refShutter.value), nSh=num(inputs.newShutter.value);
  const rNd=num(inputs.refNd.value), nNd=num(inputs.newNd.value);
  if(!(rN>0&&nN>0&&rIso>0&&nIso>0&&rSh>0&&nSh>0&&rNd>=0&&nNd>=0)) return null;

  const dA=apertureDeltaStops(rN,nN);
  const dI=log2(nIso/rIso);
  const dS=log2(timeFromShutter(nSh)/timeFromShutter(rSh));
  const dN=-(nNd-rNd);
  return {dA,dI,dS,dN,total:dA+dI+dS+dN};
}

function solveAuto(){
  const rN=num(inputs.refAperture.value), rIso=num(inputs.refIso.value);
  const rSh=num(inputs.refShutter.value), nSh=num(inputs.newShutter.value);
  const rNd=num(inputs.refNd.value), nNd=num(inputs.newNd.value);
  if(!(rN>0&&rIso>0&&rSh>0&&nSh>0&&rNd>=0&&nNd>=0)) return;

  const tR=timeFromShutter(rSh), tN=timeFromShutter(nSh);
  if(!(tR>0&&tN>0)) return;

  internalUpdate=true;

  if(manualParam==="aperture"){
    const nN=num(inputs.newAperture.value);
    if(nN>0){
      const ndStops=(nNd-rNd);
      const dA=apertureDeltaStops(rN,nN);
      const dS=log2(tN/tR);
      // dISO must cancel aperture + shutter + ND.
      const requiredIsoStops=-(dA+dS-ndStops);
      const iso=rIso*Math.pow(2,requiredIsoStops);
      inputs.newIso.value=fmtIso(snapThird("iso",iso));
    }
  }else{
    const nIso=num(inputs.newIso.value);
    if(nIso>0){
      const ndStops=(nNd-rNd);
      const dI=log2(nIso/rIso);
      const dS=log2(tN/tR);
      const dN=-ndStops;
      // Aperture must cancel ISO + shutter + ND.
      const requiredApertureStops=-(dI+dS+dN);
      const aperture=targetApertureFromStops(rN,requiredApertureStops);
      inputs.newAperture.value=fmtAperture(aperture);
    }
  }

  internalUpdate=false;
}

function updateModes(){
  const apAuto=manualParam==="iso";
  $("apertureBadge").textContent=apAuto?"AUTO":"MANUEL";
  $("apertureBadge").className=`mode-badge ${apAuto?"auto":"manual"}`;
  $("isoBadge").textContent=apAuto?"MANUEL":"AUTO";
  $("isoBadge").className=`mode-badge ${apAuto?"manual":"auto"}`;
  $("apertureCard").classList.toggle("auto-card",apAuto);
  $("isoCard").classList.toggle("auto-card",!apAuto);
}

function updateActiveChips(){
  document.querySelectorAll(".chips[data-target]").forEach(group=>{
    const id=group.dataset.target;
    const inp=inputs[id];
    if(!inp) return;
    const value=num(inp.value);
    group.querySelectorAll("button").forEach(btn=>{
      btn.classList.toggle("active",Math.abs(num(btn.textContent)-value)<0.001);
    });
  });
}


function centerChipRowForTarget(id, smooth=false){
  const group=document.querySelector(`.chips[data-target="${id}"]`);
  const inp=inputs[id];
  if(!group || !inp || group.scrollWidth<=group.clientWidth) return;

  const value=num(inp.value);
  if(!Number.isFinite(value)) return;

  const buttons=[...group.querySelectorAll("button")];
  if(!buttons.length) return;

  let target=buttons[0];
  let best=Infinity;
  buttons.forEach(btn=>{
    const v=num(btn.textContent);
    if(!Number.isFinite(v)) return;
    const d=Math.abs(Math.log(v/value));
    if(d<best){best=d;target=btn;}
  });

  const left=target.offsetLeft - (group.clientWidth-target.offsetWidth)/2;
  group.scrollTo({
    left:Math.max(0,left),
    behavior:smooth ? "smooth" : "auto"
  });
}

function centerExposureRows(smooth=false){
  ["refAperture","refIso","newAperture","newIso"].forEach(id=>{
    centerChipRowForTarget(id,smooth);
  });
}

function updateUI(){
  $("refShutterEquiv").textContent=shutterEquiv(num(inputs.refShutter.value));
  $("newShutterEquiv").textContent=shutterEquiv(num(inputs.newShutter.value));

  solveAuto();
  updateModes();
  updateActiveChips();
  centerExposureRows(false);

  const d=calcDeltas();
  if(!d){
    ["resultValue","resultState","resultDetail","equivMessage","quickAperture","quickIso","quickShutter","quickNd"]
      .forEach(id=>$(id).textContent="—");
    return;
  }

  const rN=num(inputs.refAperture.value), nN=num(inputs.newAperture.value);
  const rIso=num(inputs.refIso.value), nIso=num(inputs.newIso.value);

  if(manualParam==="aperture"){
    $("resultValue").textContent=`ISO ${fmtIso(nIso)}`;
    $("equivMessage").textContent=`${fmtAperture(nN)} → ISO ${fmtIso(nIso)} pour conserver l’exposition.`;
  }else{
    $("resultValue").textContent=`${fmtAperture(nN)} (f/ ou T)`;
    $("equivMessage").textContent=`ISO ${fmtIso(nIso)} → ${fmtAperture(nN)} pour conserver l’exposition.`;
  }

  $("resultState").textContent=Math.abs(d.total)<0.08
    ? "EXPOSITION ÉQUIVALENTE"
    : `${fmtStop(d.total)} D’ÉCART APRÈS ARRONDI ⅓`;
  $("resultDetail").textContent=
    `${fmtAperture(rN)} → ${fmtAperture(nN)} : ${fmtStop(d.dA)} · ISO ${fmtIso(rIso)} → ${fmtIso(nIso)} : ${fmtStop(d.dI)}`;

  $("quickAperture").textContent=fmtStop(d.dA);
  $("quickIso").textContent=fmtStop(d.dI);
  $("quickShutter").textContent=fmtStop(d.dS);
  $("quickNd").textContent=fmtStop(d.dN);
}

document.querySelectorAll(".chips[data-target] button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const id=btn.closest(".chips").dataset.target;
    inputs[id].value=btn.textContent;
    if(id==="newAperture") manualParam="aperture";
    if(id==="newIso") manualParam="iso";
    updateUI();
    if(["refAperture","refIso","newAperture","newIso"].includes(id)){
      requestAnimationFrame(()=>centerChipRowForTarget(id,true));
    }
  });
});


document.querySelectorAll(".third-step-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const id=btn.dataset.stepTarget;
    const direction=Number(btn.dataset.direction);
    const type=id.toLowerCase().includes("iso") ? "iso" : "aperture";
    const current=num(inputs[id].value);
    if(!(current>0)) return;
    const next=stepThird(type,current,direction);
    inputs[id].value=type==="iso" ? fmtIso(next) : fmtAperture(next);

    if(id==="newAperture") manualParam="aperture";
    if(id==="newIso") manualParam="iso";
    updateUI();
    requestAnimationFrame(()=>centerChipRowForTarget(id,true));
  });
});

Object.entries(inputs).forEach(([id,inp])=>{
  inp.addEventListener("input",()=>{
    if(internalUpdate) return;
    if(id==="newAperture") manualParam="aperture";
    if(id==="newIso") manualParam="iso";
    updateUI();
  });
  inp.addEventListener("focus",()=>inp.select());
});

function renderFps(){
  const wrap=$("fpsChoices"), vals=FPS_BY_FREQUENCY[frequencyMode];
  if(!vals.includes(currentFps)) currentFps=vals[0];
  wrap.innerHTML=vals.map(v=>`<button class="${Math.abs(v-currentFps)<.001?"active":""}" data-value="${v}">${String(v).replace(".",",")}</button>`).join("");
  wrap.querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
    currentFps=Number(btn.dataset.value); renderFps(); updateUI();
  }));
}

$("frequencyMode").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
  frequencyMode=btn.dataset.value;
  $("frequencyMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  currentFps=FPS_BY_FREQUENCY[frequencyMode][0];
  renderFps(); updateUI();
}));

$("shutterMode").querySelectorAll("button").forEach(btn=>btn.addEventListener("click",()=>{
  const next=btn.dataset.value;
  if(next===shutterMode) return;
  ["refShutter","newShutter"].forEach(id=>{
    const v=num(inputs[id].value);
    if(v>0) inputs[id].value=fmt(360*currentFps/v,1);
  });
  shutterMode=next;
  $("shutterMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
  $("refShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  $("newShutterUnit").textContent=next==="speed"?"1/x s":"degrés";
  document.querySelectorAll(".shutter-speed-chips").forEach(el=>el.classList.toggle("hidden",next!=="speed"));
  document.querySelectorAll(".shutter-angle-chips").forEach(el=>el.classList.toggle("hidden",next!=="angle"));
  updateUI();
}));

$("copyRefBtn").addEventListener("click",()=>{
  inputs.newAperture.value=inputs.refAperture.value;
  inputs.newIso.value=inputs.refIso.value;
  inputs.newShutter.value=inputs.refShutter.value;
  inputs.newNd.value=inputs.refNd.value;
  manualParam="aperture";
  updateUI();
});
$("resetBtn").addEventListener("click",()=>{
  inputs.refAperture.value="2.8"; inputs.refIso.value="800"; inputs.refShutter.value="50"; inputs.refNd.value="0";
  inputs.newAperture.value="4"; inputs.newIso.value="1600"; inputs.newShutter.value="50"; inputs.newNd.value="0";
  frequencyMode="50"; currentFps=25; shutterMode="speed"; manualParam="aperture";
  $("frequencyMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.value==="50"));
  $("shutterMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b.dataset.value==="speed"));
  $("refShutterUnit").textContent="1/x s"; $("newShutterUnit").textContent="1/x s";
  document.querySelectorAll(".shutter-speed-chips").forEach(el=>el.classList.remove("hidden"));
  document.querySelectorAll(".shutter-angle-chips").forEach(el=>el.classList.add("hidden"));
  renderFps(); updateUI();
});


// Desktop navigation for horizontally overflowing quick-value rows.
// - vertical mouse wheel -> horizontal scroll
// - click + drag -> horizontal scroll
// Mobile/touch behavior remains native.
document.querySelectorAll(".chips").forEach(row=>{
  row.addEventListener("wheel", e=>{
    if(row.scrollWidth <= row.clientWidth) return;
    if(Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
    e.preventDefault();
    row.scrollLeft += e.deltaY;
  }, {passive:false});

  let isDragging=false;
  let startX=0;
  let startScrollLeft=0;
  let moved=false;

  row.addEventListener("pointerdown", e=>{
    if(e.pointerType==="touch") return;
    if(row.scrollWidth <= row.clientWidth) return;
    isDragging=true;
    moved=false;
    startX=e.clientX;
    startScrollLeft=row.scrollLeft;
    row.setPointerCapture?.(e.pointerId);
    row.classList.add("is-dragging");
  });

  row.addEventListener("pointermove", e=>{
    if(!isDragging) return;
    const dx=e.clientX-startX;
    if(Math.abs(dx)>3) moved=true;
    row.scrollLeft=startScrollLeft-dx;
  });

  const endDrag=e=>{
    if(!isDragging) return;
    isDragging=false;
    row.classList.remove("is-dragging");
    try{ row.releasePointerCapture?.(e.pointerId); }catch(_){}
  };

  row.addEventListener("pointerup", endDrag);
  row.addEventListener("pointercancel", endDrag);
  row.addEventListener("pointerleave", e=>{
    if(isDragging && e.buttons===0) endDrag(e);
  });

  // Prevent an accidental chip click when the gesture was actually a drag.
  row.addEventListener("click", e=>{
    if(moved){
      e.preventDefault();
      e.stopPropagation();
      moved=false;
    }
  }, true);
});

// Theme
const themeToggle=$("themeToggle"), themeColor=$("themeColor");
function applyTheme(theme){
  const dark=theme==="dark"; document.body.classList.toggle("dark",dark);
  themeToggle.textContent=dark?"LIGHT":"DARK";
  themeColor.setAttribute("content",dark?"#0B0C0E":"#F3F1EC");
}
applyTheme(localStorage.getItem("bruno-set-tools-theme")||"light");
themeToggle.addEventListener("click",()=>{
  const next=document.body.classList.contains("dark")?"light":"dark";
  localStorage.setItem("bruno-set-tools-theme",next); applyTheme(next);
});

// Tips
const tipsPage=$("tipsPage"), mainApp=$("mainApp");
$("tipsBtn").addEventListener("click",()=>{mainApp.hidden=true;tipsPage.hidden=false;window.scrollTo(0,0);});
$("tipsBackBtn").addEventListener("click",()=>{tipsPage.hidden=true;mainApp.hidden=false;window.scrollTo(0,0);});

// Info
const dialog=$("infoDialog");
$("infoBtn").addEventListener("click",()=>dialog.showModal());
$("closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});

renderFps();
updateUI();
requestAnimationFrame(()=>centerExposureRows(false));

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}
