const $ = id => document.getElementById(id);
const els = {
  themeBtn: $('themeBtn'), startBtn: $('startBtn'), cameraState: $('cameraState'),
  video: $('video'), viewer: $('viewer'), lockBadge: $('lockBadge'), sampleCanvas: $('sampleCanvas'),
  referenceBtn: $('referenceBtn'), initialRefWrap: $('initialRefWrap'), stopValue: $('stopValue'), ratioValue: $('ratioValue'),
  cameraSelectWrap: $('cameraSelectWrap'), cameraSelect: $('cameraSelect'), liveModeNote: $('liveModeNote'),
  meterMode: $('meterMode'), meterIso: $('meterIso'), meterTime: $('meterTime'), diagMeterMode: $('diagMeterMode'),
  photoRefBtn: $('photoRefBtn'), photoMeasureBtn: $('photoMeasureBtn'), photoAInfo: $('photoAInfo'), photoBInfo: $('photoBInfo'), photoDelta: $('photoDelta'),
  diagManual: $('diagManual'), diagIso: $('diagIso'), diagTime: $('diagTime'), diagWb: $('diagWb'), diagPhoto: $('diagPhoto'), diagSettings: $('diagSettings'), diagRaw: $('diagRaw')
};

let stream = null;
let track = null;
let imageCapture = null;
let capabilities = {};
let referenceLuma = null;
let lockVerified = false;
let meterMode = 'none'; // none | lock | auto
let autoReference = null;
let liveLoop = null;
let recentStops = [];
let photoA = null;
let photoB = null;
let currentDeviceId = '';

const sleep = ms => new Promise(r => setTimeout(r, ms));
const clamp = (v,a,b) => Math.max(a,Math.min(b,v));
const log2 = v => Math.log(v)/Math.LN2;
const fmt = (v,n=1) => Number(v).toLocaleString('fr-FR',{minimumFractionDigits:n,maximumFractionDigits:n});
const supported = v => Array.isArray(v) ? v.length > 0 : !!v;
const rangeHas = (r,v) => r && Number.isFinite(r.min) && Number.isFinite(r.max) && Number.isFinite(v) && v >= r.min && v <= r.max;

function setTheme(dark){
  document.body.classList.toggle('dark', dark);
  els.themeBtn.textContent = dark ? 'LIGHT' : 'DARK';
  localStorage.setItem('bos-cellule-theme', dark ? 'dark' : 'light');
}
setTheme(localStorage.getItem('bos-cellule-theme') === 'dark');
els.themeBtn.addEventListener('click',()=>setTheme(!document.body.classList.contains('dark')));

function setBadge(text,state=''){
  els.lockBadge.textContent = text;
  els.lockBadge.className = 'viewer-badge' + (state ? ` ${state}` : '');
}

async function stopCamera(){
  if(liveLoop) cancelAnimationFrame(liveLoop);
  liveLoop = null;
  if(stream) stream.getTracks().forEach(t=>t.stop());
  stream = null; track = null; imageCapture = null; referenceLuma = null; lockVerified = false; meterMode='none'; autoReference=null;
  els.video.srcObject = null;
  if(els.meterMode) els.meterMode.textContent='EN ATTENTE';
  if(els.meterIso) els.meterIso.textContent='—';
  if(els.meterTime) els.meterTime.textContent='—';
}

async function listCameras(){
  try{
    const devices = await navigator.mediaDevices.enumerateDevices();
    const cams = devices.filter(d=>d.kind==='videoinput');
    if(cams.length>1){
      els.cameraSelect.innerHTML = cams.map((d,i)=>`<option value="${d.deviceId}">${d.label || `Caméra ${i+1}`}</option>`).join('');
      if(currentDeviceId && cams.some(c=>c.deviceId===currentDeviceId)) els.cameraSelect.value=currentDeviceId;
      els.cameraSelectWrap.classList.remove('hidden');
    } else {
      els.cameraSelectWrap.classList.add('hidden');
    }
  }catch(_){ }
}

async function startCamera(deviceId=''){
  if(!navigator.mediaDevices?.getUserMedia){
    els.cameraState.textContent='getUserMedia indisponible dans ce navigateur.';
    return;
  }
  await stopCamera();
  try{
    const videoConstraints = deviceId ? {deviceId:{exact:deviceId}} : {facingMode:{ideal:'environment'},width:{ideal:1280},height:{ideal:960}};
    stream = await navigator.mediaDevices.getUserMedia({video:videoConstraints,audio:false});
    track = stream.getVideoTracks()[0];
    currentDeviceId = track.getSettings?.().deviceId || deviceId || '';
    els.video.srcObject = stream;
    await els.video.play();
    await sleep(500);
    capabilities = track.getCapabilities ? track.getCapabilities() : {};
    imageCapture = ('ImageCapture' in window) ? new ImageCapture(track) : null;
    els.cameraState.textContent = track.label || 'Caméra active';
    els.startBtn.textContent = 'REDÉMARRER';
    els.referenceBtn.disabled = false;
    els.photoRefBtn.disabled = !imageCapture;
    els.photoMeasureBtn.disabled = !imageCapture;
    setBadge('AUTO · PRÊT POUR RÉF.');
    meterMode='none'; autoReference=null;
    updateDiagnostics();
    await listCameras();
    startLiveSampling();
  } catch(err){
    els.cameraState.textContent = `Caméra inaccessible : ${err.name || 'erreur'}`;
    setBadge('CAMÉRA INDISPONIBLE','warn');
    els.diagRaw.textContent = String(err?.stack || err);
  }
}

els.startBtn.addEventListener('click',()=>startCamera(currentDeviceId));
els.cameraSelect.addEventListener('change',()=>startCamera(els.cameraSelect.value));

function exposureSettings(){
  const s=track?.getSettings?.() || {};
  const iso=Number(s.iso), exposureTime=Number(s.exposureTime);
  return {
    iso:Number.isFinite(iso)&&iso>0?iso:NaN,
    exposureTime:Number.isFinite(exposureTime)&&exposureTime>0?exposureTime:NaN,
    exposureMode:s.exposureMode || '',
    raw:s
  };
}
function formatExposureTimeRaw(v){
  if(!Number.isFinite(v)||v<=0)return '—';
  // La spec exprime exposureTime en unités de 100 µs. Le ratio est ce qui compte pour AUTO-METER.
  const seconds=v/10000;
  const inv=seconds>0?1/seconds:NaN;
  if(Number.isFinite(inv)&&inv>=2)return `≈ 1/${Math.round(inv)}`;
  return `${fmt(seconds,3)} s`;
}
function updateMeterStrip(){
  const s=exposureSettings();
  if(els.meterMode) els.meterMode.textContent=meterMode==='lock'?'LOCK':meterMode==='auto'?'AUTO-METER':'EN ATTENTE';
  if(els.meterIso) els.meterIso.textContent=Number.isFinite(s.iso)?`ISO ${Math.round(s.iso)}`:'—';
  if(els.meterTime) els.meterTime.textContent=formatExposureTimeRaw(s.exposureTime);
  if(els.diagMeterMode) els.diagMeterMode.textContent=meterMode==='lock'?'LOCK · pixels':meterMode==='auto'?'AUTO-METER · ISO + temps':'Non défini';
}
function updateDiagnostics(){
  const modes = capabilities.exposureMode || [];
  const canManual = modes.includes?.('manual') || false;
  const canIsoControl = !!capabilities.iso;
  const canTimeControl = !!capabilities.exposureTime;
  const wbModes = capabilities.whiteBalanceMode || [];
  const canWb = wbModes.includes?.('manual') || false;
  const s = exposureSettings();
  const isoRead=Number.isFinite(s.iso), timeRead=Number.isFinite(s.exposureTime);
  els.diagManual.textContent = canManual ? 'EXPOSÉ' : 'NON EXPOSÉ';
  els.diagIso.textContent = isoRead ? (canIsoControl?'LU + CONTRÔLABLE':'LU') : (canIsoControl?'CONTRÔLABLE':'NON EXPOSÉ');
  els.diagTime.textContent = timeRead ? (canTimeControl?'LU + CONTRÔLABLE':'LU') : (canTimeControl?'CONTRÔLABLE':'NON EXPOSÉ');
  els.diagWb.textContent = canWb ? 'OUI' : 'NON / NON EXPOSÉ';
  els.diagPhoto.textContent = imageCapture ? 'OUI' : 'NON';
  const bits=[];
  if(isoRead) bits.push(`ISO ${Math.round(s.iso)}`);
  if(timeRead) bits.push(`t ${s.exposureTime}`);
  if(s.exposureMode) bits.push(s.exposureMode);
  els.diagSettings.textContent = bits.length?bits.join(' · '):'Non exposés';
  updateMeterStrip();
  els.diagRaw.textContent = JSON.stringify({settings:s.raw,capabilities:{
    exposureMode:capabilities.exposureMode,iso:capabilities.iso,exposureTime:capabilities.exposureTime,
    exposureCompensation:capabilities.exposureCompensation,whiteBalanceMode:capabilities.whiteBalanceMode,colorTemperature:capabilities.colorTemperature,
    focusMode:capabilities.focusMode,torch:capabilities.torch,zoom:capabilities.zoom
  }},null,2);
}

function srgbToLinear(x){
  x/=255;
  return x<=0.04045 ? x/12.92 : Math.pow((x+0.055)/1.055,2.4);
}

function sampleCenterLuma(){
  if(!track || els.video.readyState < 2) return NaN;
  const c=els.sampleCanvas, ctx=c.getContext('2d',{willReadFrequently:true});
  const vw=els.video.videoWidth, vh=els.video.videoHeight;
  if(!vw||!vh) return NaN;
  ctx.drawImage(els.video,0,0,c.width,c.height);
  const size=Math.floor(Math.min(c.width,c.height)*0.22);
  const x=Math.floor((c.width-size)/2), y=Math.floor((c.height-size)/2);
  const data=ctx.getImageData(x,y,size,size).data;
  let sum=0,n=0;
  for(let i=0;i<data.length;i+=16){ // 1 pixel sur 4 environ
    const r=srgbToLinear(data[i]), g=srgbToLinear(data[i+1]), b=srgbToLinear(data[i+2]);
    sum += 0.2126*r + 0.7152*g + 0.0722*b; n++;
  }
  return n?sum/n:NaN;
}

async function sampleMedian(count=12,spacing=45){
  const vals=[];
  for(let i=0;i<count;i++){
    const v=sampleCenterLuma();
    if(Number.isFinite(v)&&v>0) vals.push(v);
    await sleep(spacing);
  }
  vals.sort((a,b)=>a-b);
  return vals.length ? vals[Math.floor(vals.length/2)] : NaN;
}

async function settingsMedian(count=8,spacing=90){
  const vals=[];
  for(let i=0;i<count;i++){
    const s=exposureSettings();
    if(Number.isFinite(s.iso)&&Number.isFinite(s.exposureTime)) vals.push(s);
    await sleep(spacing);
  }
  if(!vals.length)return null;
  const med=key=>{const a=vals.map(v=>v[key]).sort((x,y)=>x-y);return a[Math.floor(a.length/2)];};
  return {iso:med('iso'),exposureTime:med('exposureTime'),samples:vals};
}
function settingsStable(samples){
  if(!samples?.length)return false;
  const isos=samples.map(s=>s.iso), times=samples.map(s=>s.exposureTime);
  const iMin=Math.min(...isos),iMax=Math.max(...isos),tMin=Math.min(...times),tMax=Math.max(...times);
  const iMid=(iMin+iMax)/2,tMid=(tMin+tMax)/2;
  return (iMax-iMin)<=Math.max(1,iMid*0.04) && (tMax-tMin)<=Math.max(0.01,tMid*0.06);
}
async function tryEnableAutoExposure(){
  if(!track?.applyConstraints)return;
  const modes=capabilities.exposureMode||[];
  const preferred=modes.includes?.('continuous')?'continuous':(modes.includes?.('single-shot')?'single-shot':null);
  if(!preferred)return;
  const advanced={exposureMode:preferred};
  if(rangeHas(capabilities.exposureCompensation,0))advanced.exposureCompensation=0;
  try{await track.applyConstraints({advanced:[advanced]});await sleep(700);}catch(_){ }
}
async function tryLockExposure(){
  if(!track?.applyConstraints || !track?.getSettings || !track?.getCapabilities) return {ok:false,reason:'API contraintes indisponible'};
  const caps=track.getCapabilities();
  const modes=caps.exposureMode || [];
  if(!modes.includes?.('manual')) return {ok:false,reason:'exposureMode manual non exposé'};

  // Laisse d'abord l'AE se stabiliser, puis passe en manuel en deux étapes.
  await sleep(900);
  const before=exposureSettings();
  try{
    await track.applyConstraints({advanced:[{exposureMode:'manual'}]});
    await sleep(500);
    let locked=exposureSettings();
    const advanced={exposureMode:'manual'};
    if(rangeHas(caps.iso,locked.iso))advanced.iso=locked.iso;
    if(rangeHas(caps.exposureTime,locked.exposureTime))advanced.exposureTime=locked.exposureTime;
    if((caps.whiteBalanceMode||[]).includes?.('manual'))advanced.whiteBalanceMode='manual';
    try{await track.applyConstraints({advanced:[advanced]});}catch(_){ }
    await sleep(500);
    const med=await settingsMedian(8,90);
    const after=exposureSettings();
    const modeLocked=after.exposureMode==='manual';
    const stable=med?.samples?settingsStable(med.samples):false;
    updateDiagnostics();
    return {ok:!!modeLocked&&stable,reason:modeLocked?(stable?'manual stable confirmé':'manual présent mais valeurs instables'):'manual non confirmé par getSettings()',before,after,median:med};
  }catch(err){
    return {ok:false,reason:`applyConstraints: ${err.name||err.message}`};
  }
}
function exposureProduct(s){
  return Number.isFinite(s?.iso)&&Number.isFinite(s?.exposureTime)&&s.iso>0&&s.exposureTime>0 ? s.iso*s.exposureTime : NaN;
}
async function sampleAutoExposure(count=10,spacing=100){
  const vals=[];
  for(let i=0;i<count;i++){
    const s=exposureSettings();
    const p=exposureProduct(s);
    if(Number.isFinite(p))vals.push({p,iso:s.iso,exposureTime:s.exposureTime});
    await sleep(spacing);
  }
  if(!vals.length)return null;
  vals.sort((a,b)=>a.p-b.p);
  return vals[Math.floor(vals.length/2)];
}

async function setReference(){
  if(!track) return;
  els.referenceBtn.disabled=true;
  els.referenceBtn.textContent='ANALYSE…';
  setBadge('TEST DU VERROU…');
  await sleep(600);
  const lock=await tryLockExposure();
  lockVerified=lock.ok;

  if(lockVerified){
    const lum=await sampleMedian();
    if(Number.isFinite(lum)&&lum>0.0001){
      meterMode='lock'; referenceLuma=lum; autoReference=null; recentStops=[];
      setBadge('LOCK · RÉF. 0,0','ok');
      els.stopValue.textContent='0,0 stop';
      els.ratioValue.textContent='Référence mémorisée. Déplace le téléphone vers une autre zone.';
      els.liveModeNote.textContent='Mode LOCK : exposition téléphone figée et stable. L’écart est calculé à partir de la luminance centrale.';
      if(els.initialRefWrap) els.initialRefWrap.classList.add('hidden');
    } else {
      lockVerified=false; referenceLuma=null;
    }
  }

  if(!lockVerified){
    // Si le manuel n'est pas fiable, repasse volontairement en AE et exploite ISO + temps s'ils sont remontés en live.
    await tryEnableAutoExposure();
    const auto=await sampleAutoExposure();
    if(auto && Number.isFinite(exposureProduct(auto))){
      meterMode='auto'; autoReference=auto; referenceLuma=null; recentStops=[];
      setBadge('AUTO-METER · RÉF. 0,0','ok');
      els.stopValue.textContent='0,0 stop';
      els.ratioValue.textContent='Référence mémorisée via ISO + temps d’exposition du téléphone.';
      els.liveModeNote.textContent=`Mode AUTO-METER : verrou manuel non fiable (${lock.reason}), mais ISO + temps d’exposition sont lisibles. L’app laisse l’AE travailler et déduit l’écart de ses changements de réglages.`;
      if(els.initialRefWrap) els.initialRefWrap.classList.add('hidden');
    } else {
      meterMode='none'; autoReference=null; referenceLuma=null;
      setBadge('LIVE NON EXPLOITABLE','warn');
      els.stopValue.textContent='—';
      els.ratioValue.textContent='Utilise le mode 2 PHOTOS.';
      els.liveModeNote.textContent=`Ni verrouillage fiable ni ISO + temps d’exposition live exploitables (${lock.reason}). Aucun chiffre live n’est affiché.`;
    }
  }
  updateDiagnostics();
  els.referenceBtn.disabled=false;
  els.referenceBtn.textContent='DÉFINIR COMME RÉF.';
}

els.referenceBtn.addEventListener('click',setReference);


function startLiveSampling(){
  let last=0;
  const tick=(ts)=>{
    if(ts-last>180){
      last=ts;
      updateMeterStrip();
      if(meterMode==='lock' && referenceLuma && lockVerified){
        const lum=sampleCenterLuma();
        if(Number.isFinite(lum)&&lum>0){
          let stops=log2(lum/referenceLuma);
          recentStops.push(stops); if(recentStops.length>7) recentStops.shift();
          const sorted=[...recentStops].sort((a,b)=>a-b);
          stops=sorted[Math.floor(sorted.length/2)];
          renderLiveStops(stops);
        }
      } else if(meterMode==='auto' && autoReference){
        const cur=exposureSettings();
        const refP=exposureProduct(autoReference),curP=exposureProduct(cur);
        if(Number.isFinite(refP)&&Number.isFinite(curP)&&refP>0&&curP>0){
          // Une scène plus lumineuse pousse l'AE vers moins d'ISO / moins de temps : signe positif.
          let stops=-log2(curP/refP);
          recentStops.push(stops); if(recentStops.length>9) recentStops.shift();
          const sorted=[...recentStops].sort((a,b)=>a-b);
          stops=sorted[Math.floor(sorted.length/2)];
          renderLiveStops(stops);
        }
      }
      if(Math.floor(ts)%1200<200)updateDiagnostics();
    }
    liveLoop=requestAnimationFrame(tick);
  };
  liveLoop=requestAnimationFrame(tick);
}
function renderLiveStops(stops){
  const sign=stops>0.04?'+':'';
  els.stopValue.textContent=`${sign}${fmt(stops,1)} stop${Math.abs(stops)>=1.5?'s':''}`;
  const ratio=Math.pow(2,Math.abs(stops));
  if(Math.abs(stops)<0.08) els.ratioValue.textContent='≈ même niveau que la référence';
  else els.ratioValue.textContent=`≈ ${fmt(ratio,1)}× ${stops>0?'plus lumineux':'moins lumineux'} que la référence`;
}

// ---------- EXIF minimal JPEG parser ----------
function parseExif(buffer){
  const dv=new DataView(buffer);
  if(dv.byteLength<4 || dv.getUint16(0,false)!==0xFFD8) return null;
  let off=2;
  while(off+4<dv.byteLength){
    if(dv.getUint8(off)!==0xFF){off++;continue;}
    const marker=dv.getUint8(off+1); off+=2;
    if(marker===0xDA || marker===0xD9) break;
    if(off+2>dv.byteLength) break;
    const len=dv.getUint16(off,false);
    if(marker===0xE1 && len>=8 && off+len<=dv.byteLength){
      const sig=String.fromCharCode(...new Uint8Array(buffer,off+2,4));
      if(sig==='Exif') return parseTiff(dv,off+8);
    }
    off+=len;
  }
  return null;
}
function parseTiff(dv,base){
  if(base+8>dv.byteLength)return null;
  const le=dv.getUint16(base,false)===0x4949;
  const u16=o=>dv.getUint16(base+o,le), u32=o=>dv.getUint32(base+o,le);
  const first=u32(4); const out={};
  function rational(abs){ if(abs+8>dv.byteLength)return NaN; const n=dv.getUint32(abs,le),d=dv.getUint32(abs+4,le); return d?n/d:NaN; }
  function readIFD(rel){
    const p=base+rel;if(p+2>dv.byteLength)return;
    const count=dv.getUint16(p,le);
    for(let i=0;i<count;i++){
      const e=p+2+i*12;if(e+12>dv.byteLength)break;
      const tag=dv.getUint16(e,le),type=dv.getUint16(e+2,le),num=dv.getUint32(e+4,le),valOff=dv.getUint32(e+8,le);
      const valueAbs=e+8;
      const pointed=base+valOff;
      let value;
      if(type===3 && num===1)value=dv.getUint16(valueAbs,le);
      else if(type===4 && num===1)value=dv.getUint32(valueAbs,le);
      else if(type===5 && num===1)value=rational(pointed);
      else if(type===10 && num===1){const n=dv.getInt32(pointed,le),d=dv.getInt32(pointed+4,le);value=d?n/d:NaN;}
      if(tag===0x8769 && Number.isFinite(value)) readIFD(value);
      if(tag===0x829A) out.exposureTime=value;
      if(tag===0x829D) out.fNumber=value;
      if(tag===0x8827) out.iso=value;
      if(tag===0x9204) out.exposureBias=value;
    }
  }
  readIFD(first);
  if(!out.exposureTime || !out.iso) return Object.keys(out).length?out:null;
  return out;
}
function photoInfoText(x){
  if(!x)return 'EXIF non lus';
  const p=[];
  if(x.iso)p.push(`ISO ${Math.round(x.iso)}`);
  if(x.exposureTime){const inv=1/x.exposureTime;p.push(inv>=2?`1/${Math.round(inv)} s`:`${fmt(x.exposureTime,3)} s`);}
  if(x.fNumber)p.push(`f/${fmt(x.fNumber,1)}`);
  return p.length?p.join(' · '):'Métadonnées insuffisantes';
}
function ev100(x){
  if(!x?.exposureTime || !x?.iso)return NaN;
  const n=x.fNumber || 1;
  return log2((n*n)/x.exposureTime) - log2(x.iso/100);
}
async function takeExif(){
  if(!imageCapture)throw new Error('ImageCapture indisponible');
  const blob=await imageCapture.takePhoto();
  const buffer=await blob.arrayBuffer();
  return parseExif(buffer);
}
async function captureA(){
  els.photoRefBtn.disabled=true;els.photoRefBtn.textContent='CAPTURE…';
  try{photoA=await takeExif();els.photoAInfo.textContent=photoInfoText(photoA);els.photoDelta.textContent=photoA?'Photo A mémorisée. Prends maintenant la photo B.':'EXIF absents : mode 2 photos non exploitable sur ce téléphone.';}
  catch(err){els.photoAInfo.textContent='Erreur';els.photoDelta.textContent=String(err.message||err);}
  els.photoRefBtn.disabled=false;els.photoRefBtn.textContent='PHOTO A · RÉF.';
}
async function captureB(){
  els.photoMeasureBtn.disabled=true;els.photoMeasureBtn.textContent='CAPTURE…';
  try{
    photoB=await takeExif();els.photoBInfo.textContent=photoInfoText(photoB);
    const a=ev100(photoA),b=ev100(photoB);
    if(Number.isFinite(a)&&Number.isFinite(b)){
      const d=b-a,sign=d>0.04?'+':'';const ratio=Math.pow(2,Math.abs(d));
      els.photoDelta.textContent=`${sign}${fmt(d,1)} stop${Math.abs(d)>=1.5?'s':''} · ≈ ${fmt(ratio,1)}× ${d>=0?'plus lumineux':'moins lumineux'}`;
      els.photoDelta.classList.add('ok');
    }else{
      els.photoDelta.textContent='Métadonnées insuffisantes pour calculer l’écart.';els.photoDelta.classList.remove('ok');
    }
  }catch(err){els.photoBInfo.textContent='Erreur';els.photoDelta.textContent=String(err.message||err);}
  els.photoMeasureBtn.disabled=false;els.photoMeasureBtn.textContent='PHOTO B · MESURE';
}
els.photoRefBtn.addEventListener('click',captureA);
els.photoMeasureBtn.addEventListener('click',captureB);

window.addEventListener('pagehide',()=>{if(stream)stream.getTracks().forEach(t=>t.stop())});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
