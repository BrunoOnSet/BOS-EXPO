const $ = id => document.getElementById(id);

const ids = ["aAperture","bAperture","aIso","bIso","aShutter","bShutter","aNd","bNd","fps"];
const inputs = Object.fromEntries(ids.map(id => [id,$(id)]));

let apertureMode = "f";
let shutterMode = "speed";

function num(v){ return Number(String(v).replace(",", ".").trim()); }
function log2(v){ return Math.log(v) / Math.log(2); }
function fmtNum(v, digits=1){
  if(!Number.isFinite(v)) return "—";
  const rounded = Number(v.toFixed(digits));
  return String(rounded).replace(".", ",");
}
function fmtStops(v){
  if(!Number.isFinite(v)) return "—";
  if(Math.abs(v) < 0.05) return "0,0";
  const sign = v > 0 ? "+" : "−";
  return `${sign}${Math.abs(v).toFixed(1).replace(".", ",")}`;
}
function fmtMainStops(v){
  if(!Number.isFinite(v)) return "—";
  if(Math.abs(v) < 0.05) return "0 STOP";
  const sign = v > 0 ? "+" : "−";
  const a = Math.abs(v);
  const txt = Math.abs(a - Math.round(a)) < 0.05 ? String(Math.round(a)) : a.toFixed(1).replace(".", ",");
  return `${sign}${txt} ${a < 1.05 ? "STOP" : "STOPS"}`;
}
function shutterTime(value){
  const fps = num(inputs.fps.value);
  if(!(fps > 0 && value > 0)) return NaN;
  return shutterMode === "speed" ? 1/value : value/(360*fps);
}
function equivalentText(value){
  const fps = num(inputs.fps.value);
  if(!(fps > 0 && value > 0)) return "—";
  if(shutterMode === "speed"){
    const angle = 360 * fps / value;
    return `${fmtNum(angle,1)}° à ${fmtNum(fps,2)} fps`;
  }
  const denom = 360 * fps / value;
  return `1/${fmtNum(denom,1)} s à ${fmtNum(fps,2)} fps`;
}
function compute(){
  const aN=num(inputs.aAperture.value), bN=num(inputs.bAperture.value);
  const aIso=num(inputs.aIso.value), bIso=num(inputs.bIso.value);
  const aSh=num(inputs.aShutter.value), bSh=num(inputs.bShutter.value);
  const aNd=num(inputs.aNd.value), bNd=num(inputs.bNd.value);

  $("aShutterEquiv").textContent = equivalentText(aSh);
  $("bShutterEquiv").textContent = equivalentText(bSh);

  if(!(aN>0 && bN>0 && aIso>0 && bIso>0 && aSh>0 && bSh>0 && aNd>=0 && bNd>=0)){
    ["totalStops","resultState","compensationText","deltaAperture","deltaIso","deltaShutter","deltaNd","compAperture","compIso","compShutter","compNd"]
      .forEach(id => $(id).textContent="—");
    return;
  }

  const dAperture = 2*log2(aN/bN);
  const dIso = log2(bIso/aIso);
  const tA = shutterTime(aSh), tB = shutterTime(bSh);
  const dShutter = log2(tB/tA);
  const dNd = -(bNd-aNd)/0.3;
  const total = dAperture+dIso+dShutter+dNd;
  const needed = -total;

  $("deltaAperture").textContent = `${fmtStops(dAperture)} stop`;
  $("deltaIso").textContent = `${fmtStops(dIso)} stop`;
  $("deltaShutter").textContent = `${fmtStops(dShutter)} stop`;
  $("deltaNd").textContent = `${fmtStops(dNd)} stop`;
  $("totalStops").textContent = fmtMainStops(total);

  if(Math.abs(total)<0.05){
    $("resultState").textContent="EXPOSITION ÉQUIVALENTE";
    $("compensationText").textContent="Aucune compensation nécessaire.";
  }else if(total>0){
    $("resultState").textContent="PLUS CLAIR";
    $("compensationText").textContent=`Pour revenir au départ : ${fmtStops(needed)} stop.`;
  }else{
    $("resultState").textContent="PLUS SOMBRE";
    $("compensationText").textContent=`Pour revenir au départ : ${fmtStops(needed)} stop.`;
  }

  // One-parameter compensation targets, starting from the NEW setting.
  const targetN = bN / Math.pow(2, needed/2);
  $("compAperture").textContent = `${apertureMode==="t"?"T":"f/"}${fmtNum(targetN,2)}`;

  const targetIso = bIso * Math.pow(2, needed);
  $("compIso").textContent = `ISO ${Math.round(targetIso)}`;

  if(shutterMode==="speed"){
    const targetDenom = bSh / Math.pow(2, needed);
    $("compShutter").textContent = `1/${fmtNum(targetDenom,1)} s`;
  }else{
    const targetAngle = bSh * Math.pow(2, needed);
    $("compShutter").textContent = targetAngle<=360 ? `${fmtNum(targetAngle,1)}°` : `>${360}°`;
  }

  const targetNd = bNd - needed*0.3;
  if(targetNd < -0.01){
    const missing = Math.abs(targetNd)/0.3;
    $("compNd").textContent = `ND 0 + ${fmtNum(missing,1)} stop`;
  }else{
    $("compNd").textContent = `ND ${Math.max(0,targetNd).toFixed(2).replace(".",",")}`;
  }

  updateActiveChips();
}

function updateActiveChips(){
  document.querySelectorAll(".chips[data-target]").forEach(group=>{
    const id=group.dataset.target;
    const inp=inputs[id];
    if(!inp) return;
    const value=num(inp.value);
    group.querySelectorAll("button").forEach(btn=>{
      btn.classList.toggle("active", Math.abs(num(btn.textContent)-value)<0.001);
    });
  });
}

document.querySelectorAll(".chips[data-target] button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const target=btn.closest(".chips").dataset.target;
    inputs[target].value=btn.textContent;
    compute();
  });
});

Object.values(inputs).forEach(inp=>{
  inp.addEventListener("input",compute);
  inp.addEventListener("focus",()=>inp.select());
});

$("apertureMode").querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    apertureMode=btn.dataset.value;
    $("apertureMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
    $("apertureUnitLabel").textContent=apertureMode==="t"?"T":"f/";
    compute();
  });
});

$("shutterMode").querySelectorAll("button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const next=btn.dataset.value;
    if(next===shutterMode) return;

    // Convert current values so changing input mode doesn't change exposure.
    const fps=num(inputs.fps.value);
    ["aShutter","bShutter"].forEach(id=>{
      const v=num(inputs[id].value);
      if(!(v>0 && fps>0)) return;
      inputs[id].value = shutterMode==="speed"
        ? fmtNum(360*fps/v,1)     // speed denominator -> angle
        : fmtNum(360*fps/v,1);    // angle -> speed denominator (same algebra)
    });

    shutterMode=next;
    $("shutterMode").querySelectorAll("button").forEach(b=>b.classList.toggle("active",b===btn));
    $("shutterUnitLabel").textContent=shutterMode==="speed"?"1/x s":"degrés";
    document.querySelectorAll(".shutter-speed-chips").forEach(el=>el.classList.toggle("hidden",shutterMode!=="speed"));
    document.querySelectorAll(".shutter-angle-chips").forEach(el=>el.classList.toggle("hidden",shutterMode!=="angle"));
    compute();
  });
});

$("copyBtn").addEventListener("click",()=>{
  inputs.bAperture.value=inputs.aAperture.value;
  inputs.bIso.value=inputs.aIso.value;
  inputs.bShutter.value=inputs.aShutter.value;
  inputs.bNd.value=inputs.aNd.value;
  compute();
});

// Theme
const themeToggle=$("themeToggle"), themeColor=$("themeColor");
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
const tipsPage=$("tipsPage"), mainApp=$("mainApp");
$("tipsBtn").addEventListener("click",()=>{mainApp.hidden=true;tipsPage.hidden=false;window.scrollTo(0,0);});
$("tipsBackBtn").addEventListener("click",()=>{tipsPage.hidden=true;mainApp.hidden=false;window.scrollTo(0,0);});

// Info
const dialog=$("infoDialog");
$("infoBtn").addEventListener("click",()=>dialog.showModal());
$("closeDialog").addEventListener("click",()=>dialog.close());
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close();});

if("serviceWorker" in navigator){
  window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}));
}

compute();
