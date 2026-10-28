(function(){
  'use strict';
  const frame=document.getElementById('expoFrame');
  const appsBtn=document.getElementById('applicationsModeBtn');
  const techBtn=document.getElementById('technicalModeBtn');
  if(!frame||!appsBtn||!techBtn)return;

  const KEY='bos-expo-light-shell-v1';
  const state={mode:'applications',camera:false,dynamics:false,compensate:false,triangle:false};
  try{
    const saved=JSON.parse(localStorage.getItem(KEY)||'null');
    if(saved&&typeof saved==='object'){
      Object.keys(state).forEach(key=>{
        if(typeof saved[key]===typeof state[key])state[key]=saved[key];
      });
    }
  }catch(_){}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch(_){}}
  function doc(){try{return frame.contentDocument||null;}catch(_){return null;}}
  function fit(){if(typeof window.BOSExpoHostFit==='function')window.BOSExpoHostFit();}
  function scheduleFit(){requestAnimationFrame(fit);setTimeout(fit,70);setTimeout(fit,250);}
  function addSheet(d,id,url){
    if(d.getElementById(id))return;
    const link=d.createElement('link');
    link.rel='stylesheet';
    link.id=id;
    link.href=url;
    d.head.appendChild(link);
    link.addEventListener('load',scheduleFit,{once:true});
  }
  function summary(d,number,title,subtitle){
    // Même structure HTML et mêmes classes que la carte Applications de LIGHT.
    const el=d.createElement('summary');
    el.className='card-heading collapsible-heading';
    const num=d.createElement('span');num.className='step';num.textContent=number;
    const copy=d.createElement('div');copy.className='heading-copy';
    const h=d.createElement('h2');h.textContent=title;
    const p=d.createElement('p');p.textContent=subtitle;
    copy.append(h,p);
    const val=d.createElement('div');val.className='summary-value';val.setAttribute('aria-hidden','true');
    const chev=d.createElement('span');chev.className='chevron';chev.setAttribute('aria-hidden','true');chev.textContent='⌄';
    el.append(num,copy,val,chev);
    return el;
  }
  function bindDetails(details,key){
    if(details.dataset.bosExpoLightBound==='1')return;
    details.dataset.bosExpoLightBound='1';
    details.open=!!state[key];
    details.addEventListener('toggle',()=>{
      state[key]=details.open;
      save();scheduleFit();
    });
  }
  function wrapApp(d,id,wrapperId,number,title,subtitle,key){
    const panel=d.getElementById(id);
    if(!panel)return false;
    let details=d.getElementById(wrapperId);
    if(!details){
      details=d.createElement('details');
      details.id=wrapperId;
      details.className='controls-card collapsible-card expo-light-card';
      details.appendChild(summary(d,number,title,subtitle));
      panel.parentNode.insertBefore(details,panel);
      details.appendChild(panel);
    }
    panel.classList.add('expo-source-panel');
    bindDetails(details,key);
    return true;
  }
  function triangle(d){
    let details=d.getElementById('expoTriangleDetails');
    if(!details){
      details=d.createElement('details');
      details.id='expoTriangleDetails';
      details.className='controls-card collapsible-card expo-light-card';
      details.appendChild(summary(d,'01','TRIANGLE D’EXPOSITION','Ouverture, vitesse et gain / ISO'));
      const content=d.createElement('div');content.className='expo-tech-visual';
      const img=d.createElement('img');
      img.alt='Triangle d’exposition : vitesse, ouverture (diaph), gain / ISO, et leurs effets sur le mouvement, la profondeur de champ, la luminosité et le bruit.';
      img.src=new URL('assets/triangle-exposition.svg?v=1',location.href).href;
      img.loading='lazy';
      img.addEventListener('load',scheduleFit);
      content.appendChild(img);
      details.appendChild(content);
      const root=d.getElementById('mainApp')||d.querySelector('.app')||d.body;
      const anchor=d.getElementById('exposeSupported');
      if(anchor?.parentElement===root)root.insertBefore(details,anchor);
      else root.appendChild(details);
    }
    bindDetails(details,'triangle');
    return details;
  }
  function applyMode(mode){
    state.mode=mode==='technical'?'technical':'applications';
    save();
    const apps=state.mode==='applications';
    appsBtn.classList.toggle('active',apps);
    techBtn.classList.toggle('active',!apps);
    appsBtn.setAttribute('aria-pressed',String(apps));
    techBtn.setAttribute('aria-pressed',String(!apps));
    document.body.classList.toggle('bos-expo-section-technical',!apps);
    document.body.classList.toggle('bos-expo-section-applications',apps);
    document.documentElement.classList.add('bos-light-split-embed');
    document.documentElement.classList.toggle('bos-light-section-applications',apps);
    document.documentElement.classList.toggle('bos-light-section-technical',!apps);
    const d=doc();
    if(d){
      d.documentElement.classList.toggle('bos-expo-section-applications',apps);
      d.documentElement.classList.toggle('bos-expo-section-technical',!apps);
      d.documentElement.classList.toggle('bos-light-section-applications',apps);
      d.documentElement.classList.toggle('bos-light-section-technical',!apps);
    }
    scheduleFit();
  }
  function prepare(){
    const d=doc();
    if(!d?.head||!d.body)return false;
    d.documentElement.classList.add('bos-expo-light-frame','bos-light-split-embed');
    addSheet(d,'bosExpoLightDesign','/BOS-LIGHT/light-design.css?v=20261012-clean14');
    addSheet(d,'bosExpoLightBubbles','/BOS-LIGHT/light-bubbles.css?v=20261012-clean14');
    addSheet(d,'bosExpoLightShell',new URL('expo-light-shell.css?v=1',location.href).href);
    // Aucun module de Fall Off n'est créé par EXPO.
    d.getElementById('bosMiniPlateau')?.remove();
    const camera=document.getElementById('sharedCameraDetails');
    if(camera&&camera.dataset.bosExpoLightBound!=='1'){
      camera.dataset.bosExpoLightBound='1';
      camera.open=!!state.camera;
      camera.addEventListener('toggle',()=>{state.camera=camera.open;save();scheduleFit();});
    }
    const ok1=wrapApp(d,'readToolPanel','expoDynamicsDetails','02','EXPLORER LA DYNAMIQUE DE L’IMAGE','Déplace le curseur : EXPO situe ce niveau dans la courbe et, quand la DB le documente, indique séparément la latitude capteur constructeur.','dynamics');
    const ok2=wrapApp(d,'simpleExpoPanel','expoCompensateDetails','03','COMPENSER','Change un réglage ; EXPO conserve la même exposition avec les paramètres déverrouillés.','compensate');
    triangle(d);
    applyMode(state.mode);
    return ok1&&ok2;
  }
  function refresh(){
    let tries=0;
    const attempt=()=>{
      if(prepare())return;
      if(++tries<80)setTimeout(attempt,60);
    };
    attempt();
    [120,350,900].forEach(ms=>setTimeout(()=>{prepare();scheduleFit();},ms));
  }
  appsBtn.addEventListener('click',()=>applyMode('applications'));
  techBtn.addEventListener('click',()=>applyMode('technical'));
  frame.addEventListener('load',refresh);
  refresh();
})();