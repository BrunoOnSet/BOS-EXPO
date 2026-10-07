(function(){
  'use strict';

  const frame=document.getElementById('expoFrame');
  if(!frame)return;

  const APERTURES=[1,1.1,1.2,1.4,1.6,1.8,2,2.2,2.5,2.8,3.2,3.5,4,4.5,5,5.6,6.3,7.1,8,9,10,11,13,14,16];
  const ISOS=[100,125,160,200,250,320,400,500,640,800,1000,1250,1600,2000,2500,3200,4000,5000,6400,8000,10000,12800];
  const ND_STOPS=[0,1/3,2/3,1,4/3,5/3,2,7/3,8/3,3,10/3,11/3,4,13/3,14/3,5,16/3,17/3,6];

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const log2=v=>Math.log(v)/Math.LN2;
  const fmt=(v,d=1)=>Number(v).toLocaleString('fr-FR',{maximumFractionDigits:d,minimumFractionDigits:0});
  const fmtStop=v=>{
    if(Math.abs(v)<0.05)return '0,0 stop';
    return (v>0?'+':'−')+Math.abs(v).toLocaleString('fr-FR',{maximumFractionDigits:1})+' stop';
  };
  const fmtNd=v=>{
    const whole=Math.floor(v+1e-6),frac=v-whole;
    if(Math.abs(frac-1/3)<.05)return `${whole?whole+'⅓':'⅓'} stop`;
    if(Math.abs(frac-2/3)<.05)return `${whole?whole+'⅔':'⅔'} stop`;
    return `${whole} ${whole===1?'stop':'stops'}`;
  };

  function styleText(){return `
html.bos-suite-embed #bosMiniPlateau{
  width:100%;margin-top:12px;border:1px solid var(--card-border,#D7D9D6);border-radius:22px;background:var(--panel);box-shadow:none;overflow:hidden;padding:0;
}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed{height:82px}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed .bmp-body{display:none}
html.bos-suite-embed .bmp-head{display:grid;grid-template-columns:34px minmax(0,1fr) auto 24px;align-items:center;gap:12px;width:100%;height:80px;min-height:80px;padding:14px 16px;border:0;background:transparent;text-align:left;cursor:pointer;color:inherit}
html.bos-suite-embed #bosMiniPlateau:not(.bmp-collapsed) .bmp-head{border-bottom:1px solid var(--line)}
html.bos-suite-embed .bmp-number{width:34px;height:34px;display:grid;place-items:center;border:1px solid #2F5B66;border-radius:10px;background:rgba(47,91,102,.14);color:#2F5B66;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:11px;font-weight:700}
html.bos-suite-embed body.dark .bmp-number{background:rgba(47,91,102,.22);color:#7FA7B0}
html.bos-suite-embed .bmp-title{min-width:0}
html.bos-suite-embed .bmp-title strong{display:block;overflow:hidden;color:#2F5B66;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:16px;line-height:1.15;font-weight:700;white-space:nowrap;text-overflow:ellipsis}
html.bos-suite-embed body.dark .bmp-title strong{color:#7FA7B0}
html.bos-suite-embed .bmp-title small{display:block;margin-top:4px;overflow:hidden;color:var(--muted);font-size:10px;line-height:1.3;white-space:nowrap;text-overflow:ellipsis}
html.bos-suite-embed .bmp-reset{min-height:30px;padding:0 10px;border:1px solid var(--line);border-radius:999px;background:var(--panel2);color:var(--muted);font-size:9px;font-weight:800;letter-spacing:.06em;cursor:pointer}
html.bos-suite-embed .bmp-chevron{display:grid;place-items:center;width:24px;height:24px;color:var(--muted);font-size:18px;line-height:1;transform:rotate(180deg)}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed .bmp-chevron{transform:none}
html.bos-suite-embed .bmp-body{padding:16px 18px 18px}
html.bos-suite-embed .bmp-intro{margin:0 0 12px;color:var(--muted);font-size:10px;line-height:1.45}
html.bos-suite-embed .bmp-views{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(180px,.75fr);gap:12px}
html.bos-suite-embed .bmp-stage,html.bos-suite-embed .bmp-monitor{position:relative;min-height:220px;border:1px solid var(--line);border-radius:16px;overflow:hidden;background:var(--panel2)}
html.bos-suite-embed .bmp-stage{background:linear-gradient(to bottom,var(--panel2) 0 72%,color-mix(in srgb,var(--muted) 10%,var(--panel2)) 72% 100%)}
html.bos-suite-embed .bmp-stage-floor{position:absolute;left:5%;right:5%;bottom:27%;height:1px;background:var(--line)}
html.bos-suite-embed .bmp-stage svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
html.bos-suite-embed #bmpBeam{fill:rgba(255,220,132,.18);stroke:rgba(199,151,44,.34);stroke-width:1;stroke-dasharray:5 5}
html.bos-suite-embed .bmp-source{position:absolute;bottom:25%;width:42px;height:88px;transform:translateX(-50%);transition:left .15s ease}
html.bos-suite-embed .bmp-source .head{position:absolute;left:7px;top:0;width:28px;height:20px;border:2px solid #2F5B66;border-radius:3px;transform:skewY(-7deg);background:var(--panel)}
html.bos-suite-embed .bmp-source .stand{position:absolute;left:20px;top:20px;width:2px;height:55px;background:#2F5B66}
html.bos-suite-embed .bmp-source .stand:before,html.bos-suite-embed .bmp-source .stand:after{content:"";position:absolute;bottom:0;width:27px;height:2px;background:#2F5B66;transform-origin:left center}
html.bos-suite-embed .bmp-source .stand:before{transform:rotate(28deg)}html.bos-suite-embed .bmp-source .stand:after{transform:rotate(152deg)}
html.bos-suite-embed .bmp-subject{position:absolute;left:62%;bottom:25%;width:34px;height:94px;transform:translateX(-50%);filter:brightness(var(--bmp-subject-bright,1));transition:filter .12s ease}
html.bos-suite-embed .bmp-subject:before{content:"";position:absolute;left:8px;top:0;width:18px;height:18px;border-radius:50%;background:var(--text)}
html.bos-suite-embed .bmp-subject:after{content:"";position:absolute;left:6px;top:19px;width:22px;height:60px;border-radius:48% 48% 22% 22%;background:var(--text);box-shadow:-8px 51px 0 -6px var(--text),8px 51px 0 -6px var(--text)}
html.bos-suite-embed .bmp-wall{position:absolute;right:7%;bottom:25%;width:22px;height:112px;border:1px solid var(--line);background:color-mix(in srgb,var(--text) var(--bmp-wall-mix,18%),var(--panel));transition:background .12s ease}
html.bos-suite-embed .bmp-camera{position:absolute;bottom:23%;width:49px;height:50px;transform:translateX(-50%);transition:left .15s ease}
html.bos-suite-embed .bmp-camera .body{position:absolute;left:3px;top:7px;width:32px;height:23px;border:2px solid #2F5B66;border-radius:4px;background:var(--panel)}
html.bos-suite-embed .bmp-camera .lens{position:absolute;left:34px;top:12px;width:12px;height:13px;border:2px solid #2F5B66;border-left:0;border-radius:0 4px 4px 0}
html.bos-suite-embed .bmp-camera .legs{position:absolute;left:19px;top:29px;width:2px;height:18px;background:#2F5B66;box-shadow:-7px 14px 0 -0.5px #2F5B66,7px 14px 0 -0.5px #2F5B66}
html.bos-suite-embed .bmp-label{position:absolute;color:var(--muted);font-size:8px;font-weight:800;letter-spacing:.05em;text-transform:uppercase;white-space:nowrap}
html.bos-suite-embed #bmpSourceLabel{bottom:9%;transform:translateX(-50%)}html.bos-suite-embed #bmpCameraLabel{bottom:3%;transform:translateX(-50%)}html.bos-suite-embed #bmpSubjectLabel{left:62%;bottom:9%;transform:translateX(-50%)}html.bos-suite-embed #bmpWallLabel{right:4%;bottom:9%}
html.bos-suite-embed .bmp-monitor{background:#17191c;isolation:isolate}
html.bos-suite-embed .bmp-monitor-bg{position:absolute;inset:0;background:linear-gradient(90deg,rgba(25,29,33,.96),rgba(90,91,88,.78));filter:brightness(var(--bmp-preview-bg,1)) blur(var(--bmp-bg-blur,2px));transform:scale(1.05);transition:filter .12s ease}
html.bos-suite-embed .bmp-monitor-bg:before,html.bos-suite-embed .bmp-monitor-bg:after{content:"";position:absolute;bottom:14%;width:17%;height:57%;background:rgba(255,255,255,.13);border-radius:4px}
html.bos-suite-embed .bmp-monitor-bg:before{left:12%}html.bos-suite-embed .bmp-monitor-bg:after{right:11%;height:39%}
html.bos-suite-embed .bmp-monitor-subject{position:absolute;left:50%;bottom:-3%;width:54px;height:78%;transform:translateX(-50%) scale(var(--bmp-subject-scale,1));transform-origin:50% 100%;filter:brightness(var(--bmp-preview-subject,1));transition:filter .12s ease,transform .15s ease}
html.bos-suite-embed .bmp-monitor-subject:before{content:"";position:absolute;left:31%;top:0;width:38%;aspect-ratio:1;border-radius:50%;background:#c9cbcd}
html.bos-suite-embed .bmp-monitor-subject:after{content:"";position:absolute;left:0;bottom:0;width:100%;height:70%;border-radius:45% 45% 12% 12%;background:#b7b9bc}
html.bos-suite-embed .bmp-noise{position:absolute;inset:0;opacity:var(--bmp-noise,.04);mix-blend-mode:screen;pointer-events:none;background-image:radial-gradient(circle at 20% 20%,#fff 0 0.7px,transparent .8px),radial-gradient(circle at 80% 35%,#fff 0 0.6px,transparent .7px),radial-gradient(circle at 45% 75%,#fff 0 0.55px,transparent .65px);background-size:6px 7px,8px 6px,7px 9px}
html.bos-suite-embed .bmp-monitor-top{position:absolute;left:10px;right:10px;top:9px;display:flex;align-items:center;justify-content:space-between;gap:8px;color:#fff;font-size:8px;font-weight:700;text-shadow:0 1px 3px #000}
html.bos-suite-embed .bmp-monitor-stop{padding:5px 7px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(0,0,0,.28);font-size:9px}
html.bos-suite-embed .bmp-readouts{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:10px}
html.bos-suite-embed .bmp-readout{padding:9px 10px;border:1px solid var(--line);border-radius:12px;background:var(--panel2)}
html.bos-suite-embed .bmp-readout span{display:block;color:var(--muted);font-size:8px;font-weight:800;letter-spacing:.05em;text-transform:uppercase}
html.bos-suite-embed .bmp-readout strong{display:block;margin-top:3px;color:#2F5B66;font-size:12px}html.bos-suite-embed body.dark .bmp-readout strong{color:#7FA7B0}
html.bos-suite-embed .bmp-controls{display:grid;grid-template-columns:1fr 1fr;gap:9px 12px;margin-top:14px}
html.bos-suite-embed .bmp-control{padding:10px 11px;border:1px solid var(--line);border-radius:13px;background:var(--panel2)}
html.bos-suite-embed .bmp-control-head{display:flex;align-items:baseline;justify-content:space-between;gap:10px;margin-bottom:7px}
html.bos-suite-embed .bmp-control-head span{color:var(--text);font-size:9px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}
html.bos-suite-embed .bmp-control-head strong{color:#2F5B66;font-size:11px;font-variant-numeric:tabular-nums;white-space:nowrap}html.bos-suite-embed body.dark .bmp-control-head strong{color:#7FA7B0}
html.bos-suite-embed .bmp-control input[type=range]{width:100%;margin:0;accent-color:#2F5B66}
html.bos-suite-embed .bmp-note{margin:12px 0 0;color:var(--muted);font-size:9px;line-height:1.45}
@media(max-width:620px){html.bos-suite-embed .bmp-views{grid-template-columns:1fr}html.bos-suite-embed .bmp-stage,html.bos-suite-embed .bmp-monitor{min-height:190px}}
@media(max-width:430px){html.bos-suite-embed .bmp-head{grid-template-columns:34px minmax(0,1fr) 24px;gap:10px;padding:14px 15px}html.bos-suite-embed .bmp-reset{display:none}html.bos-suite-embed .bmp-body{padding:14px 15px 16px}html.bos-suite-embed .bmp-controls{grid-template-columns:1fr}html.bos-suite-embed .bmp-readouts{grid-template-columns:1fr 1fr}.bmp-readout:last-child{grid-column:1/-1}}
`;}

  function markup(){return `
<section id="bosMiniPlateau" class="bmp-collapsed" aria-label="Mini plateau interactif">
  <button type="button" class="bmp-head" id="bmpToggle" aria-expanded="false">
    <span class="bmp-number">07</span>
    <span class="bmp-title"><strong>MINI PLATEAU</strong><small>Bouge la source et les réglages : regarde ce qui change.</small></span>
    <span class="bmp-reset" id="bmpReset" role="button" tabindex="0">RESET</span>
    <span class="bmp-chevron" aria-hidden="true">⌄</span>
  </button>
  <div class="bmp-body">
    <p class="bmp-intro">Un petit plateau à manipuler. La distance source–sujet suit la loi de l’inverse du carré ; la distance caméra–sujet change le cadre, pas l’exposition.</p>
    <div class="bmp-views">
      <div class="bmp-stage" id="bmpStage">
        <div class="bmp-stage-floor"></div>
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><polygon id="bmpBeam" points="20,40 62,43 89,29 89,76 62,72"></polygon></svg>
        <div class="bmp-source" id="bmpSource"><div class="head"></div><div class="stand"></div></div>
        <div class="bmp-camera" id="bmpCamera"><div class="body"></div><div class="lens"></div><div class="legs"></div></div>
        <div class="bmp-subject" id="bmpSubject"></div>
        <div class="bmp-wall" id="bmpWall"></div>
        <span class="bmp-label" id="bmpSourceLabel">SOURCE · 2 m</span>
        <span class="bmp-label" id="bmpCameraLabel">CAMÉRA · 2 m</span>
        <span class="bmp-label" id="bmpSubjectLabel">SUJET</span>
        <span class="bmp-label" id="bmpWallLabel">FOND</span>
      </div>
      <div class="bmp-monitor" id="bmpMonitor">
        <div class="bmp-monitor-bg"></div><div class="bmp-monitor-subject"></div><div class="bmp-noise"></div>
        <div class="bmp-monitor-top"><span>IMAGE CAMÉRA</span><span class="bmp-monitor-stop" id="bmpMonitorStop">0,0 stop</span></div>
      </div>
    </div>
    <div class="bmp-readouts">
      <div class="bmp-readout"><span>Exposition sujet</span><strong id="bmpSubjectStop">0,0 stop</strong></div>
      <div class="bmp-readout"><span>Fond vs sujet</span><strong id="bmpFalloff">−2,0 stops</strong></div>
      <div class="bmp-readout"><span>Lecture</span><strong id="bmpState">Référence</strong></div>
    </div>
    <div class="bmp-controls">
      <label class="bmp-control"><div class="bmp-control-head"><span>Distance source → sujet</span><strong id="bmpSourceDistanceOut">2,0 m</strong></div><input id="bmpSourceDistance" type="range" min="0.5" max="5" step="0.1" value="2"></label>
      <label class="bmp-control"><div class="bmp-control-head"><span>Puissance source</span><strong id="bmpPowerOut">100 %</strong></div><input id="bmpPower" type="range" min="-2" max="2" step="0.5" value="0"></label>
      <label class="bmp-control"><div class="bmp-control-head"><span>Distance caméra → sujet</span><strong id="bmpCameraDistanceOut">2,0 m</strong></div><input id="bmpCameraDistance" type="range" min="1" max="6" step="0.1" value="2"></label>
      <label class="bmp-control"><div class="bmp-control-head"><span>Diaphragme</span><strong id="bmpApertureOut">f/2,8</strong></div><input id="bmpAperture" type="range" min="0" max="${APERTURES.length-1}" step="1" value="9"></label>
      <label class="bmp-control"><div class="bmp-control-head"><span>ISO</span><strong id="bmpIsoOut">ISO 800</strong></div><input id="bmpIso" type="range" min="0" max="${ISOS.length-1}" step="1" value="9"></label>
      <label class="bmp-control"><div class="bmp-control-head"><span>ND</span><strong id="bmpNdOut">0 stop</strong></div><input id="bmpNd" type="range" min="0" max="${ND_STOPS.length-1}" step="1" value="0"></label>
    </div>
    <p class="bmp-note">Référence : source à 2 m · puissance 100 % · f/2,8 · ISO 800 · ND 0. Ici, rapprocher la caméra ne rend pas l’image plus claire : cela modifie seulement le cadre.</p>
  </div>
</section>`;}

  function setup(){
    let doc;
    try{doc=frame.contentDocument;}catch(_){return;}
    if(!doc||!doc.documentElement.classList.contains('bos-suite-embed')){setTimeout(setup,80);return;}
    if(doc.getElementById('bosMiniPlateau'))return;

    let style=doc.getElementById('bos-mini-plateau-style');
    if(!style){style=doc.createElement('style');style.id='bos-mini-plateau-style';style.textContent=styleText();(doc.head||doc.documentElement).appendChild(style);}

    const wrap=doc.createElement('div');wrap.innerHTML=markup();const panel=wrap.firstElementChild;
    const anchor=doc.getElementById('simpleExpoPanel')||doc.querySelector('.app,#mainApp')?.lastElementChild;
    if(anchor?.parentNode)anchor.insertAdjacentElement('afterend',panel);else (doc.querySelector('.app,#mainApp')||doc.body).appendChild(panel);

    const q=id=>doc.getElementById(id);
    const state={sourceDistance:2,powerStops:0,cameraDistance:2,aperture:2.8,iso:800,nd:0};

    function exposure(){
      const light=state.powerStops-2*log2(state.sourceDistance/2);
      const aperture=-2*log2(state.aperture/2.8);
      const iso=log2(state.iso/800);
      return light+aperture+iso-state.nd;
    }
    function falloff(){return -2*log2((state.sourceDistance+2)/state.sourceDistance);}
    function render(){
      const total=exposure(),fall=falloff();
      const sourceX=clamp(53-state.sourceDistance*8.2,8,49);
      const cameraX=clamp(50-state.cameraDistance*6.3,7,45);
      const subjectBrightness=clamp(Math.pow(2,total*.22),.45,1.9);
      const wallBrightness=clamp(Math.pow(2,(total+fall)*.20),.35,1.65);
      const previewSubject=clamp(Math.pow(2,total*.24),.42,2.05);
      const previewBg=clamp(Math.pow(2,(total+fall)*.20),.32,1.7);
      const scale=clamp(2.25/state.cameraDistance,.52,1.7);
      const blur=clamp((2.8/state.aperture)*3,.4,5.2);
      const noise=clamp(.025+Math.max(0,log2(state.iso/800))*.055,.02,.32);

      q('bmpSource').style.left=sourceX+'%';q('bmpCamera').style.left=cameraX+'%';
      q('bmpSourceLabel').style.left=sourceX+'%';q('bmpCameraLabel').style.left=cameraX+'%';
      q('bmpStage').style.setProperty('--bmp-subject-bright',subjectBrightness);
      q('bmpStage').style.setProperty('--bmp-wall-mix',Math.round(clamp(wallBrightness*22,8,50))+'%');
      q('bmpMonitor').style.setProperty('--bmp-preview-subject',previewSubject);
      q('bmpMonitor').style.setProperty('--bmp-preview-bg',previewBg);
      q('bmpMonitor').style.setProperty('--bmp-subject-scale',scale);
      q('bmpMonitor').style.setProperty('--bmp-bg-blur',blur+'px');
      q('bmpMonitor').style.setProperty('--bmp-noise',noise);

      const poly=q('bmpBeam');if(poly)poly.setAttribute('points',`${sourceX},40 62,43 89,29 89,76 62,72`);
      q('bmpSourceLabel').textContent='SOURCE · '+fmt(state.sourceDistance,1)+' m';
      q('bmpCameraLabel').textContent='CAMÉRA · '+fmt(state.cameraDistance,1)+' m';
      q('bmpSourceDistanceOut').textContent=fmt(state.sourceDistance,1)+' m';
      q('bmpCameraDistanceOut').textContent=fmt(state.cameraDistance,1)+' m';
      q('bmpPowerOut').textContent=Math.round(Math.pow(2,state.powerStops)*100)+' %';
      q('bmpApertureOut').textContent='f/'+String(state.aperture).replace('.',',');
      q('bmpIsoOut').textContent='ISO '+Math.round(state.iso).toLocaleString('fr-FR');
      q('bmpNdOut').textContent=fmtNd(state.nd);
      q('bmpMonitorStop').textContent=fmtStop(total);
      q('bmpSubjectStop').textContent=fmtStop(total);
      q('bmpFalloff').textContent=fmtStop(fall);
      q('bmpState').textContent=Math.abs(total)<.12?'Référence':total>.12?'Plus clair':'Plus sombre';
      window.BOSExpoHostFit?.();
    }

    q('bmpSourceDistance').addEventListener('input',e=>{state.sourceDistance=Number(e.target.value);render();});
    q('bmpPower').addEventListener('input',e=>{state.powerStops=Number(e.target.value);render();});
    q('bmpCameraDistance').addEventListener('input',e=>{state.cameraDistance=Number(e.target.value);render();});
    q('bmpAperture').addEventListener('input',e=>{state.aperture=APERTURES[Number(e.target.value)]||2.8;render();});
    q('bmpIso').addEventListener('input',e=>{state.iso=ISOS[Number(e.target.value)]||800;render();});
    q('bmpNd').addEventListener('input',e=>{state.nd=ND_STOPS[Number(e.target.value)]||0;render();});

    function reset(ev){ev?.stopPropagation();state.sourceDistance=2;state.powerStops=0;state.cameraDistance=2;state.aperture=2.8;state.iso=800;state.nd=0;q('bmpSourceDistance').value='2';q('bmpPower').value='0';q('bmpCameraDistance').value='2';q('bmpAperture').value=String(APERTURES.indexOf(2.8));q('bmpIso').value=String(ISOS.indexOf(800));q('bmpNd').value='0';render();}
    q('bmpReset').addEventListener('click',reset);q('bmpReset').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reset(e);}});
    q('bmpToggle').addEventListener('click',e=>{if(e.target.closest('#bmpReset'))return;const collapsed=panel.classList.toggle('bmp-collapsed');q('bmpToggle').setAttribute('aria-expanded',collapsed?'false':'true');setTimeout(()=>window.BOSExpoHostFit?.(),30);});

    render();setTimeout(()=>window.BOSExpoHostFit?.(),80);
  }

  frame.addEventListener('load',()=>setTimeout(setup,120));
  if(frame.contentDocument?.readyState==='complete'||frame.contentDocument?.readyState==='interactive')setTimeout(setup,120);
})();
