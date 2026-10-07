(function(){
  'use strict';

  const frame=document.getElementById('expoFrame');
  if(!frame)return;

  const parseNum=value=>{
    const n=Number(String(value??'').replace(/\s/g,'').replace(',','.'));
    return Number.isFinite(n)?n:NaN;
  };
  const log2=value=>Math.log(value)/Math.LN2;
  const uniqSorted=values=>[...new Set(values.map(Number).filter(v=>Number.isFinite(v)&&v>0))].sort((a,b)=>a-b);

  function isoCandidates(doc){
    const select=doc.getElementById('isoMaxSelect');
    if(!select)return [];
    return uniqSorted([...select.options].map(o=>parseNum(o.value)));
  }

  function selectedGainBase(doc){
    const active=doc.querySelector('#gainBaseMode button.active[data-value], #gainBaseMode button[aria-pressed="true"][data-value]');
    const fromButton=parseNum(active?.dataset?.value);
    if(fromButton>0)return fromButton;

    const text=doc.getElementById('baseIsoNote')?.textContent||'';
    const values=(text.match(/\d[\d\s\u00a0.]*/g)||[])
      .map(s=>Number(s.replace(/[^\d.]/g,'')))
      .filter(v=>Number.isFinite(v)&&v>0);
    return values[0]||800;
  }

  function formatDb(iso,base){
    if(!(iso>0&&base>0))return '—';
    const db=6*log2(iso/base);
    if(Math.abs(db)<0.05)return '0 dB';
    const text=(db>0?'+':'')+db.toLocaleString('fr-FR',{maximumFractionDigits:1});
    return text+' dB';
  }

  function patch(){
    try{
      const doc=frame.contentDocument;
      if(!doc)return;
      const gainButton=doc.querySelector('[data-bos-iso-mode="gain"]');
      const gainActive=!!gainButton?.classList.contains('active');
      if(!gainActive)return;

      const slider=doc.getElementById('bosCompIso');
      const out=doc.getElementById('bosCompIsoValue');
      const minOut=doc.getElementById('bosCompIsoMin');
      const hint=doc.getElementById('bosCompIsoHint');
      const values=isoCandidates(doc);
      if(!slider||!values.length)return;

      const index=Math.max(0,Math.min(values.length-1,Number(slider.value)||0));
      const iso=values[index];
      const base=selectedGainBase(doc);

      if(out)out.textContent=formatDb(iso,base);
      if(minOut)minOut.textContent=formatDb(values[0],base);
      if(hint)hint.textContent='0 dB = ISO '+Math.round(base).toLocaleString('fr-FR')+' · les valeurs inférieures restent en dB négatifs';
    }catch(_){}
  }

  function install(){
    try{
      const doc=frame.contentDocument;
      if(!doc){setTimeout(install,80);return;}
      if(!doc.getElementById('bosCompensateV3')){setTimeout(install,80);return;}
      patch();
      if(frame._bosGainFixObserver)frame._bosGainFixObserver.disconnect();
      const observer=new MutationObserver(()=>queueMicrotask(patch));
      observer.observe(doc.getElementById('bosCompensateV3'),{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['class','value']});
      doc.getElementById('bosCompIso')?.addEventListener('input',patch,true);
      doc.querySelectorAll('[data-bos-iso-mode]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(patch,0),true));
      frame._bosGainFixObserver=observer;
    }catch(_){setTimeout(install,120);}
  }

  frame.addEventListener('load',()=>setTimeout(install,150));
  if(frame.contentDocument?.readyState==='complete'||frame.contentDocument?.readyState==='interactive')setTimeout(install,150);
})();
