(function(){
  'use strict';

  const VERSION='4.0.0';
  const THEME_KEY='bos-expo-split-theme-v1';
  const SETTINGS_KEY='bos-expo-split-settings-v1';
  const INSTALLED_KEY='bos-expo-split-installed-v1';
  const frame=document.getElementById('expoFrame');
  const $=id=>document.getElementById(id);
  let deferredInstallPrompt=null;
  let syncTimer=null;

  const APERTURES=[1.0,1.1,1.2,1.4,1.6,1.8,2.0,2.2,2.5,2.8,3.2,3.5,4.0,4.5,5.0,5.6,6.3,7.1,8.0,9.0,10.0,11.0,13.0,14.0,16.0,18.0,20.0,22.0];
  const SHUTTERS=[25,40,50,100,200,400,800];

  function standalone(){return window.matchMedia?.('(display-mode: standalone)').matches===true||window.navigator.standalone===true;}
  function isIOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);}
  function doc(){try{return frame?.contentDocument||null;}catch(_){return null;}}

  function savedSettings(){
    try{return JSON.parse(localStorage.getItem(SETTINGS_KEY)||'null')||{};}catch(_){return {};}
  }
  function storeSetting(key,value){
    const s=savedSettings();s[key]=value;try{localStorage.setItem(SETTINGS_KEY,JSON.stringify(s));}catch(_){ }
  }

  function fit(){
    const d=doc();if(!d||!frame)return;
    const root=d.querySelector('.app,#mainApp')||d.body;if(!root)return;
    const rect=root.getBoundingClientRect();
    const h=Math.max(1,Math.ceil(rect.height));
    if(Math.abs((parseFloat(frame.style.height)||0)-h)>1)frame.style.height=h+'px';
  }
  window.BOSExpoHostFit=fit;

  function selectText(select){return select?.options?.[select.selectedIndex]?.textContent?.trim()||select?.value||'';}
  function activeButton(container){return container?.querySelector('button.active')||container?.querySelector('button[aria-pressed="true"]')||null;}
  function buttonValue(button){return button?.dataset?.value||button?.value||button?.textContent?.trim()||'';}

  function fillFromButtons(target,container){
    if(!target||!container)return false;
    const buttons=[...container.querySelectorAll('button')];if(!buttons.length)return false;
    const current=buttonValue(activeButton(container));
    const before=target.value;
    target.replaceChildren(...buttons.map(b=>{const o=document.createElement('option');o.value=buttonValue(b);o.textContent=b.textContent.trim();return o;}));
    if([...target.options].some(o=>o.value===current))target.value=current;
    else if([...target.options].some(o=>o.value===before))target.value=before;
    return true;
  }
  function fillFromSelect(target,source){
    if(!target||!source||!source.options?.length)return false;
    const current=source.value;
    target.replaceChildren(...[...source.options].map(src=>{const o=document.createElement('option');o.value=src.value;o.textContent=src.textContent;o.disabled=src.disabled;return o;}));
    target.value=current;
    return true;
  }
  function fillStatic(target,values,formatter){
    if(!target)return;
    const previous=target.value;
    target.replaceChildren(...values.map(v=>{const o=document.createElement('option');o.value=String(v);o.textContent=formatter(v);return o;}));
    if([...target.options].some(o=>o.value===previous))target.value=previous;
  }

  function clickValue(container,value){
    const wanted=String(value);
    const button=[...container?.querySelectorAll('button')||[]].find(b=>buttonValue(b)===wanted);
    button?.click();
  }
  function dispatchSelect(source,value){
    if(!source)return;
    source.value=String(value);
    source.dispatchEvent(new Event('input',{bubbles:true}));
    source.dispatchEvent(new Event('change',{bubbles:true}));
  }

  function syncCamera(){
    const d=doc();if(!d)return false;
    const brand=d.getElementById('cameraBrandMode');
    const model=d.getElementById('cameraMode');
    const gamma=d.getElementById('gammaMode');
    if(!brand||!model||!gamma)return false;

    fillFromButtons($('sharedCameraBrand'),brand);
    fillFromSelect($('sharedCameraModel'),model);
    fillFromButtons($('sharedCameraGamma'),gamma);

    const isoSource=d.getElementById('isoMaxSelect');
    if(isoSource?.options?.length)fillFromSelect($('sharedLightIso'),isoSource);
    fillStatic($('sharedLightAperture'),APERTURES,v=>'f/'+String(v).replace('.',','));
    fillStatic($('sharedLightShutter'),SHUTTERS,v=>'1/'+v);

    const saved=savedSettings();
    if(saved.iso&&[...$('sharedLightIso').options].some(o=>o.value===String(saved.iso)))$('sharedLightIso').value=String(saved.iso);
    if(saved.aperture&&[...$('sharedLightAperture').options].some(o=>o.value===String(saved.aperture)))$('sharedLightAperture').value=String(saved.aperture);
    else if(!$('sharedLightAperture').value)$('sharedLightAperture').value='2.8';
    if(saved.shutter&&[...$('sharedLightShutter').options].some(o=>o.value===String(saved.shutter)))$('sharedLightShutter').value=String(saved.shutter);
    else if(!$('sharedLightShutter').value)$('sharedLightShutter').value='50';

    if(isoSource&&$('sharedLightIso').value&&isoSource.value!==String($('sharedLightIso').value))dispatchSelect(isoSource,$('sharedLightIso').value);

    const meta=$('sharedCameraMeta');
    if(meta)meta.textContent=[selectText($('sharedCameraModel')),selectText($('sharedCameraGamma'))].filter(Boolean).join(' · ');
    return true;
  }
  function scheduleSync(delay=80){clearTimeout(syncTimer);syncTimer=setTimeout(syncCamera,delay);}

  function applyTheme(theme){
    const value=theme==='dark'?'dark':'light';
    document.documentElement.dataset.theme=value;
    document.body.classList.toggle('dark',value==='dark');
    localStorage.setItem(THEME_KEY,value);
    if($('themeBtn'))$('themeBtn').textContent=value==='dark'?'LIGHT':'DARK';
    $('themeColor')?.setAttribute('content',value==='dark'?'#0B0C0E':'#F3F1EC');
    const d=doc();if(d){d.documentElement.dataset.theme=value;d.body?.classList.toggle('dark',value==='dark');}
  }

  function prepareFrame(){
    const d=doc();if(!d)return;
    d.documentElement.classList.add('bos-suite-embed');
    let style=d.getElementById('bos-expo-split-embed-style');
    if(!style){
      style=d.createElement('style');style.id='bos-expo-split-embed-style';
      style.textContent=`
html.bos-suite-embed,html.bos-suite-embed body{min-height:0!important;height:auto!important;background:transparent!important;overflow:hidden!important}
html.bos-suite-embed .topbar,html.bos-suite-embed .utility-row,html.bos-suite-embed #cameraSettingsPanel,html.bos-suite-embed #cameraRefPanel,html.bos-suite-embed footer{display:none!important}
html.bos-suite-embed .app,html.bos-suite-embed #mainApp{width:100%!important;max-width:none!important;min-height:0!important;margin:0!important;padding:0!important}
html.bos-suite-embed #exposeSupported.expo-quick-stack{margin:0!important;padding:0!important;gap:12px!important}
html.bos-suite-embed #readToolPanel{margin-top:0!important}
html.bos-suite-embed #exposeUnsupported{margin-top:12px!important}
`;
      (d.head||d.documentElement).appendChild(style);
    }
    applyTheme(localStorage.getItem(THEME_KEY)||'light');
    scheduleSync(30);scheduleSync(180);setTimeout(syncCamera,500);setTimeout(syncCamera,1000);
    fit();

    if(!frame._bosExpoResize&&'ResizeObserver' in window){
      const root=d.querySelector('.app,#mainApp')||d.body;
      const ro=new ResizeObserver(()=>requestAnimationFrame(fit));if(root)ro.observe(root);frame._bosExpoResize=ro;
    }
    if(!frame._bosExpoMutation){
      const mo=new MutationObserver(()=>{requestAnimationFrame(fit);scheduleSync(120);});
      mo.observe(d.documentElement,{subtree:true,childList:true,attributes:true,attributeFilter:['class','hidden','style','aria-expanded']});
      frame._bosExpoMutation=mo;
    }
    d.addEventListener('click',()=>{setTimeout(fit,0);scheduleSync(80);},true);
    d.addEventListener('change',()=>scheduleSync(80),true);
    [80,250,700,1400].forEach(ms=>setTimeout(fit,ms));
  }

  frame?.addEventListener('load',prepareFrame);
  if(doc()?.readyState==='complete'||doc()?.readyState==='interactive')prepareFrame();

  $('sharedCameraBrand')?.addEventListener('change',e=>{const d=doc();clickValue(d?.getElementById('cameraBrandMode'),e.target.value);scheduleSync(80);});
  $('sharedCameraModel')?.addEventListener('change',e=>{dispatchSelect(doc()?.getElementById('cameraMode'),e.target.value);scheduleSync(80);});
  $('sharedCameraGamma')?.addEventListener('change',e=>{const d=doc();clickValue(d?.getElementById('gammaMode'),e.target.value);scheduleSync(80);});
  $('sharedLightIso')?.addEventListener('change',e=>{storeSetting('iso',e.target.value);dispatchSelect(doc()?.getElementById('isoMaxSelect'),e.target.value);});
  $('sharedLightAperture')?.addEventListener('change',e=>storeSetting('aperture',e.target.value));
  $('sharedLightShutter')?.addEventListener('change',e=>storeSetting('shutter',e.target.value));

  $('themeBtn')?.addEventListener('click',()=>applyTheme((document.documentElement.dataset.theme||'light')==='dark'?'light':'dark'));
  $('suiteTipsBtn')?.addEventListener('click',()=>doc()?.getElementById('tipsBtn')?.click());
  $('suiteResetBtn')?.addEventListener('click',()=>{doc()?.getElementById('simpleResetBtn')?.click();setTimeout(fit,80);});
  $('projectContactBtn')?.addEventListener('click',()=>$('projectDialog')?.showModal());

  window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();deferredInstallPrompt=event;if($('installAppRow')&&!standalone())$('installAppRow').hidden=false;});
  window.addEventListener('appinstalled',()=>{localStorage.setItem(INSTALLED_KEY,'1');if($('installAppRow'))$('installAppRow').hidden=true;deferredInstallPrompt=null;});
  function updateInstall(){
    if(!$('installAppRow'))return;
    if(standalone()){localStorage.setItem(INSTALLED_KEY,'1');$('installAppRow').hidden=true;return;}
    $('installAppRow').hidden=localStorage.getItem(INSTALLED_KEY)==='1';
  }
  $('installAppBtn')?.addEventListener('click',async()=>{
    if(deferredInstallPrompt){deferredInstallPrompt.prompt();try{await deferredInstallPrompt.userChoice;}catch(_){ }deferredInstallPrompt=null;return;}
    if($('installHelpText'))$('installHelpText').textContent=isIOS()?'Installation sur iPhone / iPad':'Installation depuis votre navigateur';
    if($('installHelpBody'))$('installHelpBody').innerHTML=isIOS()?'<p><strong>Safari :</strong> touchez <strong>Partager</strong>, puis <strong>Ajouter à l’écran d’accueil</strong>.</p>':'<p>Ouvrez le menu du navigateur puis choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>.</p>';
    $('installDialog')?.showModal();
  });

  applyTheme(localStorage.getItem(THEME_KEY)||'light');
  updateInstall();
  if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js?v='+VERSION).catch(()=>{}));
})();
