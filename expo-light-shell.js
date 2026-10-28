(function(){
  'use strict';
  const frame=document.getElementById('expoFrame');
  const appsBtn=document.getElementById('applicationsModeBtn');
  const techBtn=document.getElementById('technicalModeBtn');
  if(!frame||!appsBtn||!techBtn)return;

  const KEY='bos-expo-light-shell-v1';
  const state={mode:'applications',camera:false,dynamics:false,compensate:false,triangle:false,effects:false,nd:false};
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
  function normalizeLegacy(panel){
    if(panel.classList.contains('collapsed'))panel.classList.remove('collapsed');
    const body=panel.querySelector('.panel-collapse-content');
    if(body?.hidden)body.hidden=false;
    const legacy=panel.querySelector('.panel-collapse-btn');
    if(legacy){
      legacy.setAttribute('aria-expanded','true');
      legacy.style.setProperty('display','none','important');
    }
    if(panel.dataset.bosExpoLegacyWatch!=='1'){
      panel.dataset.bosExpoLegacyWatch='1';
      const observer=new MutationObserver(()=>{
        if(panel.classList.contains('collapsed')||body?.hidden)normalizeLegacy(panel);
      });
      observer.observe(panel,{attributes:true,attributeFilter:['class']});
      if(body)observer.observe(body,{attributes:true,attributeFilter:['hidden']});
    }
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
    normalizeLegacy(panel);
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
      img.src=new URL('assets/triangle-exposition.jpg?v=1',location.href).href;
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
  function effectsTechnicalCard(d){
    let details=d.getElementById('expoEffectsDetails');
    if(!details){
      details=d.createElement('details');
      details.id='expoEffectsDetails';
      details.className='controls-card collapsible-card expo-light-card';
      details.appendChild(summary(d,'02','EFFETS DES RÉGLAGES','Shutter, diaphragme et gain / ISO'));
      const content=d.createElement('div');
      content.className='expo-tech-visual expo-tech-awaiting-image';
      const pending=d.createElement('p');
      pending.className='expo-tech-image-pending';
      pending.textContent='Illustration à ajouter sur GitHub : effets-des-reglages.jpg';
      const img=d.createElement('img');
      img.alt='Effets des réglages : flou de mouvement selon le shutter, profondeur de champ selon le diaphragme et bruit selon le gain / ISO.';
      img.loading='eager';
      img.decoding='async';
      // Ne pas afficher une icône d'image cassée tant que le JPG n'est pas déposé.
      img.style.display='none';
      img.addEventListener('load',()=>{
        if(img.naturalWidth>0){
          img.style.display='block';
          pending.hidden=true;
          content.classList.remove('expo-tech-awaiting-image');
          scheduleFit();
        }
      });
      img.addEventListener('error',()=>{pending.hidden=false;scheduleFit();});
      content.append(pending,img);
      details.appendChild(content);
      const previous=triangle(d);
      if(previous?.parentNode)previous.parentNode.insertBefore(details,previous.nextSibling);
      else (d.getElementById('mainApp')||d.body).appendChild(details);
      // Nom fixe : l'utilisateur peut déposer ce JPG lui-même dans assets/.
      img.src=new URL('assets/effets-des-reglages.jpg',location.href).href;
    }
    bindDetails(details,'effects');
    return details;
  }
  function ndTechnicalCard(d){
    let details=d.getElementById('expoNdDetails');
    if(!details){
      details=d.createElement('details');
      details.id='expoNdDetails';
      details.className='controls-card collapsible-card expo-light-card';
      details.appendChild(summary(d,'03','FILTRE ND','Densité, transmission et équivalence en stops'));
      const content=d.createElement('div');
      content.className='expo-tech-visual';
      const img=d.createElement('img');
      img.alt='Fiche illustrée des filtres ND : densité optique de ND 0,3 à 3,9, noms commerciaux ND2 à ND8192, lumière transmise et réduction en stops.';
      img.src=new URL('assets/fiche-filtres-nd.jpg?v=1',location.href).href;
      img.loading='lazy';
      img.decoding='async';
      img.addEventListener('load',scheduleFit);
      content.appendChild(img);
      details.appendChild(content);
      const previous=effectsTechnicalCard(d);
      if(previous?.parentNode)previous.parentNode.insertBefore(details,previous.nextSibling);
      else (d.getElementById('mainApp')||d.body).appendChild(details);
    }
    bindDetails(details,'nd');
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
    // Réglages caméra reste une application uniquement, jamais une fiche.
    // Le contenu reste en DOM pour la synchronisation caméra.
    const cameraCard=document.getElementById('sharedCameraDetails');
    if(cameraCard){
      cameraCard.hidden=!apps;
      cameraCard.inert=!apps;
      cameraCard.setAttribute('aria-hidden',String(!apps));
    }
    document.documentElement.classList.add('bos-expo-shell');
    document.documentElement.classList.remove('bos-light-split-embed','bos-light-section-applications','bos-light-section-technical');
    const d=doc();
    if(d){
      d.documentElement.classList.toggle('bos-expo-section-applications',apps);
      d.documentElement.classList.toggle('bos-expo-section-technical',!apps);
      d.documentElement.classList.remove('bos-light-split-embed','bos-light-section-applications','bos-light-section-technical');
    }
    scheduleFit();
  }
  function prepare(){
    const d=doc();
    if(!d?.head||!d.body)return false;
    d.documentElement.classList.add('bos-expo-light-frame');
    d.documentElement.classList.remove('bos-light-split-embed','bos-light-section-applications','bos-light-section-technical');
    addSheet(d,'bosExpoLightDesign','/BOS-LIGHT/light-design.css?v=20261012-clean14');
    addSheet(d,'bosExpoLightBubbles','/BOS-LIGHT/light-bubbles.css?v=20261012-clean14');
    addSheet(d,'bosExpoLightShell',new URL('expo-light-shell.css?v=13',location.href).href);
    // Aucun module de Fall Off n'est créé par EXPO.
    d.getElementById('bosMiniPlateau')?.remove();
    const camera=document.getElementById('sharedCameraDetails');
    if(camera&&camera.dataset.bosExpoLightBound!=='1'){
      camera.dataset.bosExpoLightBound='1';
      camera.open=!!state.camera;
      camera.addEventListener('toggle',()=>{state.camera=camera.open;save();scheduleFit();});
    }
    const ok1=wrapApp(d,'readToolPanel','expoDynamicsDetails','02','DYNAMIQUE DE L’IMAGE','Courbe et roll off','dynamics');
    const ok2=wrapApp(d,'simpleExpoPanel','expoCompensateDetails','03','COMPENSER','Conserve ton exposition.','compensate');
    triangle(d);
    effectsTechnicalCard(d);
    ndTechnicalCard(d);
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