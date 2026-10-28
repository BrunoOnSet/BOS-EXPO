(function(){
  'use strict';

  const VERSION='4.1.0';
  const THEME_KEY='bos-expo-split-theme-v1';
  const SETTINGS_KEY='bos-expo-split-settings-v1';
  const INSTALLED_KEY='bos-expo-split-installed-v1';
  const frame=document.getElementById('expoFrame');
  const $=id=>document.getElementById(id);
  let deferredInstallPrompt=null;
  let syncTimer=null;


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

  $('themeBtn')?.addEventListener('click',()=>applyTheme((document.documentElement.dataset.theme||'light')==='dark'?'light':'dark'));
  $('suiteTipsBtn')?.addEventListener('click',()=>doc()?.getElementById('tipsBtn')?.click());
  $('suiteResetBtn')?.addEventListener('click',()=>{doc()?.getElementById('simpleResetBtn')?.click();setTimeout(fit,80);});
  $('projectContactBtn')?.addEventListener('click',()=>$('projectDialog')?.showModal());

  // Installation PWA native, au clic direct comme dans LIGHT / REMIND.
  // beforeinstallprompt n'est proposé que par les navigateurs compatibles.
  function showInstallFallback(){
    const ios=isIOS();
    const android=/android/i.test(navigator.userAgent);
    if($('installHelpText')){
      $('installHelpText').textContent=ios?'Installation sur iPhone / iPad':android?'Installation sur Android':'Installation depuis votre navigateur';
    }
    if($('installHelpBody')){
      if(ios){
        $('installHelpBody').innerHTML=
          '<p><strong>Sur iPhone / iPad :</strong> ouvrez cette page dans <strong>Safari</strong>, touchez <strong>Partager</strong>, puis <strong>Ajouter à l’écran d’accueil</strong> et confirmez.</p>';
      }else if(android){
        $('installHelpBody').innerHTML=
          '<p>Dans <strong>Chrome</strong>, ouvrez le menu <strong>⋮</strong> puis choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong>.</p>'+
          '<p>Sur <strong>Samsung Internet</strong> : menu <strong>☰</strong> → <strong>Ajouter la page à</strong> → <strong>Écran d’accueil</strong>.</p>';
      }else{
        $('installHelpBody').innerHTML=
          '<p>Ce navigateur ne propose pas de fenêtre d’installation directe. Ouvrez son menu puis choisissez <strong>Installer l’application</strong> ou <strong>Ajouter à l’écran d’accueil</strong> si cette option est disponible.</p>';
      }
    }
    $('installDialog')?.showModal();
  }
  function updateInstall(){
    const row=$('installAppRow');
    if(!row)return;
    // Ne pas masquer le bouton sur une ancienne indication sauvegardée :
    // une désinstallation peut avoir eu lieu depuis.
    row.hidden=standalone();
  }
  window.addEventListener('beforeinstallprompt',event=>{
    event.preventDefault();
    deferredInstallPrompt=event;
    updateInstall();
  });
  window.addEventListener('appinstalled',()=>{
    try{localStorage.setItem(INSTALLED_KEY,'1');}catch(_){}
    deferredInstallPrompt=null;
    if($('installAppRow'))$('installAppRow').hidden=true;
  });
  $('installAppBtn')?.addEventListener('click',async()=>{
    if(standalone()){updateInstall();return;}
    // Appel synchronisé à l'action utilisateur : impératif pour Chrome / Android.
    const event=deferredInstallPrompt;
    if(event){
      deferredInstallPrompt=null;
      try{
        const result=event.prompt();
        if(result&&typeof result.then==='function')await result;
        const choice=await event.userChoice;
        if(choice?.outcome==='accepted'){
          try{localStorage.setItem(INSTALLED_KEY,'1');}catch(_){}
          if($('installAppRow'))$('installAppRow').hidden=true;
        }else{
          updateInstall();
        }
        return;
      }catch(error){
        console.warn('[EXPO] Fenêtre native d’installation indisponible',error);
      }
    }
    showInstallFallback();
  });

  applyTheme(localStorage.getItem(THEME_KEY)||'light');
  updateInstall();
  if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js?v='+VERSION,{updateViaCache:'none'}).catch(()=>{}));
})();
