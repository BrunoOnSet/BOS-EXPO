(function(){
  'use strict';
  const STORAGE_KEY='bos-expo-bubbles-v1';
  const state={camera:false,dynamics:false,compensate:false};
  try{
    const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'null');
    if(saved&&typeof saved==='object')Object.keys(state).forEach(k=>{if(typeof saved[k]==='boolean')state[k]=saved[k];});
  }catch(_){ }
  function save(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}catch(_){}}

  const camera=document.getElementById('sharedCameraDetails');
  if(camera){
    camera.open=!!state.camera;
    camera.addEventListener('toggle',()=>{state.camera=camera.open;save();});
  }

  const frame=document.getElementById('expoFrame');
  function doc(){try{return frame?.contentDocument||null;}catch(_){return null;}}
  function fit(){window.BOSExpoHostFit?.();}

  function parts(d,id){
    const panel=d.getElementById(id);if(!panel)return null;
    const head=id==='readToolPanel'?panel.querySelector('.quick-inline-head'):panel.querySelector('.compact-section-head');
    if(!head)return null;
    return {panel,head,legacyButton:panel.querySelector('.panel-collapse-btn'),legacyContent:panel.querySelector('.panel-collapse-content')};
  }

  function shortCopy(p,closed){
    if(p.panel.id!=='readToolPanel')return;
    const title=p.panel.querySelector('.panel-kicker');
    const subtitle=p.panel.querySelector('.panel-subtitle');
    if(title){if(!title.dataset.fullText)title.dataset.fullText=title.textContent.trim();title.textContent=closed?'DYNAMIQUE DE L’IMAGE':title.dataset.fullText;}
    if(subtitle){if(!subtitle.dataset.fullText)subtitle.dataset.fullText=subtitle.textContent.trim();subtitle.textContent=closed?'Lire le waveform et les repères de latitude.':subtitle.dataset.fullText;}
  }

  function normalizeLegacy(p){
    p.panel.classList.remove('collapsed');
    if(p.legacyContent)p.legacyContent.hidden=false;
    if(p.legacyButton){p.legacyButton.setAttribute('aria-expanded','true');p.legacyButton.style.setProperty('display','none','important');}
  }

  function ensureChevron(d,p){
    let chev=p.head.querySelector('.bos-suite-collapse-chevron');
    if(!chev){chev=d.createElement('span');chev.className='bos-suite-collapse-chevron';chev.setAttribute('aria-hidden','true');chev.textContent='⌄';p.head.appendChild(chev);}
    p.head.classList.add('bos-suite-collapse-head');
    p.head.setAttribute('role','button');p.head.setAttribute('tabindex','0');
  }

  function apply(p,key){
    normalizeLegacy(p);
    const open=!!state[key];
    p.panel.classList.toggle('bos-suite-collapsed',!open);
    p.head.setAttribute('aria-expanded',open?'true':'false');
    shortCopy(p,!open);
    fit();setTimeout(fit,80);
  }

  function bindOne(d,id,key){
    const p=parts(d,id);if(!p)return false;
    ensureChevron(d,p);
    if(p.panel.dataset.bosExpoSplitCollapse==='1'){apply(p,key);return true;}
    p.panel.dataset.bosExpoSplitCollapse='1';
    apply(p,key);

    p.head.addEventListener('click',event=>{
      if(event.target.closest('#simpleResetBtn,.small-action,button:not(.panel-collapse-btn),a,input,select,textarea,label'))return;
      event.preventDefault();event.stopImmediatePropagation();
      state[key]=!state[key];save();apply(p,key);
    },true);
    p.head.addEventListener('keydown',event=>{
      if(event.key!=='Enter'&&event.key!==' ')return;
      if(event.target.closest('#simpleResetBtn,.small-action,button:not(.panel-collapse-btn),a,input,select,textarea,label'))return;
      event.preventDefault();event.stopImmediatePropagation();
      state[key]=!state[key];save();apply(p,key);
    },true);

    const obs=new MutationObserver(()=>{
      const shouldClosed=!state[key];
      const wrong=p.panel.classList.contains('bos-suite-collapsed')!==shouldClosed;
      const legacyClosed=p.panel.classList.contains('collapsed')||!!p.legacyContent?.hidden;
      if(wrong||legacyClosed)apply(p,key);
    });
    obs.observe(p.panel,{attributes:true,attributeFilter:['class']});
    if(p.legacyContent)obs.observe(p.legacyContent,{attributes:true,attributeFilter:['hidden']});
    if(p.legacyButton)obs.observe(p.legacyButton,{attributes:true,attributeFilter:['aria-expanded']});
    p.panel._bosExpoSplitObserver=obs;
    return true;
  }

  function bind(){
    const d=doc();if(!d)return false;
    const a=bindOne(d,'readToolPanel','dynamics');
    const b=bindOne(d,'simpleExpoPanel','compensate');
    return a&&b;
  }
  function retry(){let n=0;const run=()=>{if(bind())return;if(++n<100)setTimeout(run,40);};run();}
  frame?.addEventListener('load',retry);
  if(doc()?.readyState==='complete'||doc()?.readyState==='interactive')retry();
})();
