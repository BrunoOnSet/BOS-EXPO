(function(){
  'use strict';

  const expoFrame=document.getElementById('expoFrame');
  if(!expoFrame)return;

  const APERTURES=[1,1.1,1.2,1.4,1.6,1.8,2,2.2,2.5,2.8,3.2,3.5,4,4.5,5,5.6,6.3,7.1,8,9,10,11,13,14,16,18,20,22];

  function parseNumber(value){
    const n=Number(String(value??'').trim().replace(',','.'));
    return Number.isFinite(n)?n:NaN;
  }

  function nearestAperture(value){
    const n=Number(value);
    if(!(n>0))return NaN;
    let best=APERTURES[0],bestDist=Infinity;
    for(const aperture of APERTURES){
      const dist=Math.abs(Math.log(aperture/n));
      if(dist<bestDist){bestDist=dist;best=aperture;}
    }
    return best;
  }

  function apertureText(value){
    const v=nearestAperture(value);
    if(!Number.isFinite(v))return '—';
    return String(v).replace('.',',');
  }

  function normalizeControl(el){
    if(!el)return false;
    const current=parseNumber(el.value);
    if(!(current>0))return false;
    const snapped=nearestAperture(current);
    if(!Number.isFinite(snapped))return false;
    if(Math.abs(current-snapped)<1e-9)return false;
    el.value=String(snapped);
    return true;
  }

  function normalizeApertureControls(doc){
    let changed=false;
    ['refAperture','newAperture','apertureMinSelect','apertureMaxSelect'].forEach(id=>{
      changed=normalizeControl(doc.getElementById(id))||changed;
    });
    return changed;
  }

  function normalizeFStopText(text){
    return String(text||'').replace(/f\/\s*(\d+(?:[.,]\d+)?)/g,(match,raw)=>{
      const n=parseNumber(raw);
      return Number.isFinite(n)?`f/${apertureText(n)}`:match;
    });
  }

  function normalizeVisibleApertures(doc){
    ['refApertureSelect','newApertureSelect','resultValue','equivMessage','resultDetail','simpleApertureValue','bosCompApertureValue'].forEach(id=>{
      const el=doc.getElementById(id);
      if(!el)return;
      const next=normalizeFStopText(el.textContent);
      if(next!==el.textContent)el.textContent=next;
    });
  }

  function ensureStraightMiniPlateauBeam(doc){
    const panel=doc.getElementById('bosMiniPlateau');
    const beam=doc.getElementById('bmpBeam');
    const source=doc.getElementById('bmpSource');
    if(!panel||!beam||!source)return;

    const apply=()=>{
      const sourceX=parseFloat(source.style.left)||20;
      const points=`${sourceX},40 89,29 89,76 ${sourceX},52`;
      if(beam.getAttribute('points')!==points)beam.setAttribute('points',points);
    };

    apply();
    if(!panel.__bosStraightBeamObserver){
      const observer=new MutationObserver(()=>apply());
      observer.observe(beam,{attributes:true,attributeFilter:['points']});
      observer.observe(source,{attributes:true,attributeFilter:['style']});
      panel.__bosStraightBeamObserver=observer;
    }
  }

  function patchExpo(){
    try{
      const doc=expoFrame.contentDocument;
      const win=expoFrame.contentWindow;
      if(!doc||!win)return false;

      if(typeof win.fmtAperture==='function'&&!win.fmtAperture.__bosNormalized){
        const patched=function(value){
          const snapped=nearestAperture(value);
          return Number.isFinite(snapped)?apertureText(snapped):'—';
        };
        patched.__bosNormalized=true;
        win.fmtAperture=patched;
      }

      if(typeof win.targetApertureFromStops==='function'&&!win.targetApertureFromStops.__bosNormalized){
        const originalTarget=win.targetApertureFromStops;
        const patchedTarget=function(refValue,requiredStops){
          return nearestAperture(originalTarget.call(this,nearestAperture(refValue),requiredStops));
        };
        patchedTarget.__bosNormalized=true;
        win.targetApertureFromStops=patchedTarget;
      }

      if(typeof win.apertureDeltaStops==='function'&&!win.apertureDeltaStops.__bosNormalized){
        const originalDelta=win.apertureDeltaStops;
        const patchedDelta=function(refValue,newValue){
          return originalDelta.call(this,nearestAperture(refValue),nearestAperture(newValue));
        };
        patchedDelta.__bosNormalized=true;
        win.apertureDeltaStops=patchedDelta;
      }

      if(typeof win.updateUI==='function'&&!win.updateUI.__bosApertureNormalized){
        const originalUpdate=win.updateUI;
        const patchedUpdate=function(){
          normalizeApertureControls(doc);
          const result=originalUpdate.apply(this,arguments);
          normalizeApertureControls(doc);
          normalizeVisibleApertures(doc);
          return result;
        };
        patchedUpdate.__bosApertureNormalized=true;
        win.updateUI=patchedUpdate;
      }

      normalizeApertureControls(doc);
      normalizeVisibleApertures(doc);
      ensureStraightMiniPlateauBeam(doc);
      return true;
    }catch(_){return false;}
  }

  let attempts=0;
  function ensurePatched(){
    attempts+=1;
    const ok=patchExpo();
    if(!ok&&attempts<100)setTimeout(ensurePatched,60);
  }

  expoFrame.addEventListener('load',()=>{attempts=0;setTimeout(ensurePatched,80);});
  setTimeout(ensurePatched,80);

  // Filet de sécurité : si un ancien état local réinjecte une valeur comme 8,01,
  // elle est immédiatement rabattue sur le tiers de diaph normalisé le plus proche.
  setInterval(()=>{patchExpo();},500);
})();
