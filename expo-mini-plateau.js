(function(){
  'use strict';

  const frame=document.getElementById('expoFrame');
  if(!frame)return;

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const log2=v=>Math.log(v)/Math.LN2;
  const fmt=v=>Number(v).toLocaleString('fr-FR',{maximumFractionDigits:1,minimumFractionDigits:1});
  const GAP=6;

  function styleText(){return `
html.bos-suite-embed #bosMiniPlateau{width:100%;margin-top:12px;border:1px solid var(--card-border,#D7D9D6);border-radius:22px;background:var(--panel);box-shadow:none;overflow:hidden;padding:0}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed{height:82px}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed .bft-body{display:none}
html.bos-suite-embed .bft-head{display:grid;grid-template-columns:34px minmax(0,1fr) auto 24px;align-items:center;gap:12px;width:100%;height:80px;min-height:80px;padding:14px 16px;border:0;background:transparent;text-align:left;cursor:pointer;color:inherit;box-sizing:border-box}
html.bos-suite-embed #bosMiniPlateau:not(.bmp-collapsed) .bft-head{border-bottom:1px solid var(--line)}
html.bos-suite-embed .bft-number{width:34px;height:34px;display:grid;place-items:center;border:1px solid #2F5B66;border-radius:10px;background:rgba(47,91,102,.14);color:#2F5B66;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:11px;font-weight:700}
html.bos-suite-embed body.dark .bft-number{background:rgba(47,91,102,.22);color:#7FA7B0}
html.bos-suite-embed .bft-title{min-width:0}
html.bos-suite-embed .bft-title strong{display:block;overflow:hidden;color:#2F5B66;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:16px;line-height:1.15;font-weight:700;white-space:nowrap;text-overflow:ellipsis}
html.bos-suite-embed body.dark .bft-title strong{color:#7FA7B0}
html.bos-suite-embed .bft-title small{display:block;margin-top:4px;overflow:hidden;color:var(--muted);font-size:10px;line-height:1.3;white-space:nowrap;text-overflow:ellipsis}
html.bos-suite-embed .bft-reset{min-height:30px;padding:0 10px;border:1px solid var(--line);border-radius:999px;background:var(--panel2);color:var(--muted);font-size:9px;font-weight:800;letter-spacing:.06em;cursor:pointer}
html.bos-suite-embed .bft-chevron{display:grid;place-items:center;width:24px;height:24px;color:var(--muted);font-size:18px;line-height:1;transform:rotate(180deg)}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed .bft-chevron{transform:none}
html.bos-suite-embed .bft-body{padding:16px 18px 18px}
html.bos-suite-embed .bft-intro{margin:0 0 12px;color:var(--muted);font-size:10px;line-height:1.45}
html.bos-suite-embed .bft-stage{position:relative;height:265px;border:1px solid var(--line);border-radius:17px;overflow:hidden;background:var(--panel2);touch-action:none;user-select:none}
html.bos-suite-embed .bft-axis{position:absolute;left:7%;right:7%;top:52%;height:1px;background:var(--line)}
html.bos-suite-embed .bft-beam{position:absolute;left:0;top:37%;height:30%;border-radius:999px;background:linear-gradient(90deg,rgba(255,224,139,.21),rgba(255,224,139,.08));pointer-events:none;transform-origin:left center}
html.bos-suite-embed .bft-distance{position:absolute;top:32%;height:1px;border-top:1px dashed rgba(47,91,102,.38);pointer-events:none}
html.bos-suite-embed .bft-distance span{position:absolute;left:50%;top:-18px;transform:translateX(-50%);padding:2px 5px;border-radius:999px;background:var(--panel2);color:var(--muted);font-size:8px;font-weight:700;white-space:nowrap}
html.bos-suite-embed .bft-item{position:absolute;top:52%;transform:translate(-50%,-50%);z-index:4;cursor:grab;touch-action:none}
html.bos-suite-embed .bft-item:active{cursor:grabbing}
html.bos-suite-embed .bft-item-label{position:absolute;left:50%;top:calc(100% + 13px);transform:translateX(-50%);color:var(--muted);font-size:8px;font-weight:800;letter-spacing:.055em;white-space:nowrap;text-transform:uppercase;pointer-events:none}
html.bos-suite-embed .bft-projector{width:62px;height:48px}
html.bos-suite-embed .bft-projector-body{position:absolute;left:0;top:7px;width:42px;height:32px;border:2px solid #2F5B66;border-radius:7px;background:var(--panel);box-sizing:border-box}
html.bos-suite-embed .bft-projector-body:before{content:"";position:absolute;left:7px;top:7px;width:8px;height:8px;border-radius:50%;background:#2F5B66;box-shadow:13px 0 0 rgba(47,91,102,.34)}
html.bos-suite-embed .bft-projector-lens{position:absolute;left:40px;top:14px;width:19px;height:18px;border:2px solid #2F5B66;border-left:0;border-radius:0 8px 8px 0;background:var(--panel)}
html.bos-suite-embed .bft-person{width:58px;height:58px;border-radius:50%;background:rgba(47,91,102,.10);border:1px solid rgba(47,91,102,.24);box-shadow:0 0 0 10px rgba(255,226,153,.12)}
html.bos-suite-embed .bft-person:before{content:"";position:absolute;left:50%;top:10px;width:21px;height:21px;transform:translateX(-50%);border-radius:50%;background:#2F5B66}
html.bos-suite-embed .bft-person:after{content:"";position:absolute;left:50%;bottom:8px;width:35px;height:18px;transform:translateX(-50%);border-radius:18px 18px 8px 8px;background:#2F5B66}
html.bos-suite-embed body.dark .bft-person:before,html.bos-suite-embed body.dark .bft-person:after{background:#7FA7B0}
html.bos-suite-embed .bft-wall{width:24px;height:128px;border-radius:4px;border:1px solid rgba(47,91,102,.36);background:rgb(var(--bft-wall,180),var(--bft-wall,180),var(--bft-wall,180));box-shadow:0 7px 16px rgba(0,0,0,.12);transition:background .08s linear}
html.bos-suite-embed .bft-wall:before{content:"";position:absolute;inset:8px 5px;border:1px solid rgba(47,91,102,.18);border-radius:2px}
html.bos-suite-embed .bft-hint{position:absolute;left:50%;bottom:14px;transform:translateX(-50%);color:var(--muted);font-size:8px;font-weight:700;letter-spacing:.03em;white-space:nowrap}
html.bos-suite-embed .bft-readout{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:11px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--panel2)}
html.bos-suite-embed .bft-readout span{color:var(--muted);font-size:9px;line-height:1.35}
html.bos-suite-embed .bft-readout strong{color:#2F5B66;font-size:10px;text-align:right}html.bos-suite-embed body.dark .bft-readout strong{color:#7FA7B0}
@media(max-width:520px){html.bos-suite-embed .bft-stage{height:230px}.bft-body{padding:14px 15px 16px}.bft-projector{transform:translate(-50%,-50%) scale(.88)}.bft-wall{height:108px}}
@media(max-width:430px){html.bos-suite-embed .bft-head{grid-template-columns:34px minmax(0,1fr) 24px;gap:10px;padding:14px 15px}.bft-reset{display:none}.bft-readout{align-items:flex-start;flex-direction:column;gap:4px}.bft-readout strong{text-align:left}}
`;}

  function markup(){return `
<section id="bosMiniPlateau" class="bmp-collapsed" aria-label="Comprendre le fall-off">
  <button type="button" class="bft-head" id="bftToggle" aria-expanded="false">
    <span class="bft-number">07</span>
    <span class="bft-title"><strong>COMPRENDRE LE FALL-OFF</strong><small>Déplace les éléments et regarde ce qui arrive au mur.</small></span>
    <span class="bft-reset" id="bftReset" role="button" tabindex="0">RESET</span>
    <span class="bft-chevron" aria-hidden="true">⌄</span>
  </button>
  <div class="bft-body">
    <p class="bft-intro">Vue du dessus. Glisse le projecteur, le personnage ou le mur. Le personnage reste toujours à la même exposition : seule la luminosité du mur change.</p>
    <div class="bft-stage" id="bftStage">
      <div class="bft-axis"></div>
      <div class="bft-beam" id="bftBeam"></div>
      <div class="bft-distance" id="bftSourceDistance"><span id="bftSourceDistanceText">—</span></div>
      <div class="bft-distance" id="bftWallDistance"><span id="bftWallDistanceText">—</span></div>

      <div class="bft-item bft-projector" id="bftProjector" data-kind="source" role="slider" aria-label="Position du projecteur" tabindex="0">
        <div class="bft-projector-body"></div><div class="bft-projector-lens"></div><span class="bft-item-label">PROJECTEUR</span>
      </div>
      <div class="bft-item bft-person" id="bftPerson" data-kind="person" role="slider" aria-label="Position du personnage" tabindex="0"><span class="bft-item-label">PERSONNAGE</span></div>
      <div class="bft-item bft-wall" id="bftWall" data-kind="wall" role="slider" aria-label="Position du mur" tabindex="0"><span class="bft-item-label">MUR</span></div>

      <div class="bft-hint">GLISSE DIRECTEMENT LES 3 ÉLÉMENTS</div>
    </div>
    <div class="bft-readout"><span>Personnage : exposition constante</span><strong id="bftResult">Mur légèrement plus sombre</strong></div>
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
    const state={source:12,person:55,wall:78};

    function wallStops(){
      const dSubject=Math.max(1,state.person-state.source);
      const dWall=Math.max(dSubject+1,state.wall-state.source);
      return 2*log2(dSubject/dWall);
    }

    function render(){
      const stops=wallStops();
      const dark=clamp((-stops)/5.5,0,1);
      const gray=Math.round(242-(224*dark));
      q('bftWall').style.setProperty('--bft-wall',gray);
      q('bftProjector').style.left=state.source+'%';
      q('bftPerson').style.left=state.person+'%';
      q('bftWall').style.left=state.wall+'%';

      const src=q('bftSourceDistance');
      src.style.left=state.source+'%';src.style.width=(state.person-state.source)+'%';
      const wall=q('bftWallDistance');
      wall.style.left=state.person+'%';wall.style.width=(state.wall-state.person)+'%';
      q('bftSourceDistanceText').textContent='PROJECTEUR → PERSO · '+fmt(state.person-state.source);
      q('bftWallDistanceText').textContent='PERSO → MUR · '+fmt(state.wall-state.person);

      const beam=q('bftBeam');
      beam.style.left=state.source+'%';beam.style.width=(state.wall-state.source)+'%';

      let text='Mur presque aussi lumineux';
      if(stops<-4.2)text='Mur presque noir';
      else if(stops<-3)text='Mur très sombre';
      else if(stops<-1.8)text='Mur nettement plus sombre';
      else if(stops<-.75)text='Mur légèrement plus sombre';
      q('bftResult').textContent=text+' · '+Math.abs(stops).toLocaleString('fr-FR',{maximumFractionDigits:1})+' stop'+(Math.abs(stops)>=1.5?'s':'')+' sous le personnage';

      ['bftProjector','bftPerson','bftWall'].forEach(id=>q(id)?.setAttribute('aria-valuenow',String(state[id==='bftProjector'?'source':id==='bftPerson'?'person':'wall'])));
      window.BOSExpoHostFit?.();
    }

    function setPosition(kind,pct){
      if(kind==='source')state.source=clamp(pct,7,state.person-GAP);
      if(kind==='person')state.person=clamp(pct,state.source+GAP,state.wall-GAP);
      if(kind==='wall')state.wall=clamp(pct,state.person+GAP,94);
      render();
    }

    function pctFromEvent(e){
      const rect=q('bftStage').getBoundingClientRect();
      return clamp(((e.clientX-rect.left)/rect.width)*100,0,100);
    }

    ['bftProjector','bftPerson','bftWall'].forEach(id=>{
      const el=q(id);if(!el)return;
      const kind=el.dataset.kind;
      el.addEventListener('pointerdown',e=>{e.preventDefault();el.setPointerCapture?.(e.pointerId);setPosition(kind,pctFromEvent(e));});
      el.addEventListener('pointermove',e=>{if(el.hasPointerCapture?.(e.pointerId))setPosition(kind,pctFromEvent(e));});
      el.addEventListener('keydown',e=>{
        if(e.key!=='ArrowLeft'&&e.key!=='ArrowRight')return;
        e.preventDefault();const step=e.shiftKey?5:1;const dir=e.key==='ArrowRight'?step:-step;setPosition(kind,state[kind]+dir);
      });
    });

    function reset(ev){ev?.stopPropagation();state.source=12;state.person=55;state.wall=78;render();}
    q('bftReset').addEventListener('click',reset);
    q('bftReset').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reset(e);}});
    q('bftToggle').addEventListener('click',e=>{if(e.target.closest('#bftReset'))return;const collapsed=panel.classList.toggle('bmp-collapsed');q('bftToggle').setAttribute('aria-expanded',collapsed?'false':'true');setTimeout(()=>window.BOSExpoHostFit?.(),30);});

    render();setTimeout(()=>window.BOSExpoHostFit?.(),80);
  }

  frame.addEventListener('load',()=>setTimeout(setup,120));
  if(frame.contentDocument?.readyState==='complete'||frame.contentDocument?.readyState==='interactive')setTimeout(setup,120);
})();
