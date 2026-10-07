(function(){
  'use strict';

  const frame=document.getElementById('expoFrame');
  if(!frame)return;

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const log2=v=>Math.log(v)/Math.LN2;
  const fmt=v=>Number(v).toLocaleString('fr-FR',{maximumFractionDigits:1,minimumFractionDigits:1});
  const GAP=7;

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
html.bos-suite-embed .bft-stage{position:relative;height:285px;border:1px solid #d8d5ce;border-radius:17px;overflow:hidden;background:
  radial-gradient(circle at 18% 22%,rgba(40,40,40,.035) 0 1px,transparent 1.4px),
  radial-gradient(circle at 77% 63%,rgba(40,40,40,.025) 0 1px,transparent 1.3px),
  linear-gradient(180deg,#f4f2ed,#efede8);touch-action:none;user-select:none}
html.bos-suite-embed body.dark .bft-stage{border-color:#4a4b49;background:linear-gradient(180deg,#d8d6d1,#cbc8c1)}
html.bos-suite-embed .bft-paper-lines{position:absolute;inset:0;opacity:.18;pointer-events:none;background:
  repeating-linear-gradient(7deg,transparent 0 13px,rgba(30,30,30,.025) 13px 14px,transparent 14px 28px),
  repeating-linear-gradient(-11deg,transparent 0 17px,rgba(30,30,30,.02) 17px 18px,transparent 18px 32px)}
html.bos-suite-embed .bft-beam-svg{position:absolute;inset:0;width:100%;height:100%;z-index:1;pointer-events:none}
html.bos-suite-embed .bft-beam-fill{fill:rgba(255,218,73,.22)}
html.bos-suite-embed .bft-beam-edge{fill:none;stroke:#e7c832;stroke-width:1.4;stroke-linecap:round;stroke-dasharray:7 5;opacity:.55}
html.bos-suite-embed .bft-distance{position:absolute;top:18%;height:1px;border-top:1px dashed rgba(35,39,41,.38);z-index:2;pointer-events:none}
html.bos-suite-embed .bft-distance span{position:absolute;left:50%;top:-18px;transform:translateX(-50%);padding:2px 5px;border-radius:999px;background:rgba(244,242,237,.92);color:#54575a;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:8px;font-weight:700;white-space:nowrap}
html.bos-suite-embed .bft-item{position:absolute;top:54%;transform:translate(-50%,-50%);z-index:4;cursor:grab;touch-action:none;outline:none}
html.bos-suite-embed .bft-item:active{cursor:grabbing}
html.bos-suite-embed .bft-item:focus-visible{filter:drop-shadow(0 0 0.7px #2F5B66) drop-shadow(0 0 5px rgba(47,91,102,.45))}
html.bos-suite-embed .bft-item svg{display:block;width:100%;height:100%;overflow:visible}
html.bos-suite-embed .bft-sketch{filter:url(#bftRoughen)}
html.bos-suite-embed .bft-item-label{position:absolute;left:50%;top:calc(100% + 9px);transform:translateX(-50%) rotate(-1deg);color:#1d1f20;font-family:"Marker Felt","Bradley Hand","Segoe Print",cursive;font-size:12px;font-weight:700;letter-spacing:.03em;white-space:nowrap;text-transform:uppercase;pointer-events:none}
html.bos-suite-embed .bft-projector{width:96px;height:80px}
html.bos-suite-embed .bft-person{width:92px;height:105px}
html.bos-suite-embed .bft-wall{width:48px;height:142px;--bft-wall:180}
html.bos-suite-embed .bft-wall .bft-wall-fill{fill:rgb(var(--bft-wall),var(--bft-wall),var(--bft-wall));transition:fill .08s linear}
html.bos-suite-embed .bft-hint{position:absolute;left:50%;bottom:12px;transform:translateX(-50%) rotate(-.4deg);z-index:5;color:#525558;font-family:"Marker Felt","Bradley Hand","Segoe Print",cursive;font-size:10px;font-weight:700;letter-spacing:.03em;white-space:nowrap}
html.bos-suite-embed .bft-readout{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:11px;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--panel2)}
html.bos-suite-embed .bft-readout span{color:var(--muted);font-size:9px;line-height:1.35}
html.bos-suite-embed .bft-readout strong{color:#2F5B66;font-size:10px;text-align:right}html.bos-suite-embed body.dark .bft-readout strong{color:#7FA7B0}
@media(max-width:520px){html.bos-suite-embed .bft-stage{height:250px}.bft-body{padding:14px 15px 16px}.bft-projector{width:82px;height:69px}.bft-person{width:78px;height:90px}.bft-wall{width:42px;height:122px}.bft-item-label{font-size:10px}}
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
      <div class="bft-paper-lines"></div>

      <svg width="0" height="0" aria-hidden="true" style="position:absolute">
        <defs>
          <filter id="bftRoughen" x="-10%" y="-10%" width="120%" height="120%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.055" numOctaves="1" seed="7" result="noise"/>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.8" xChannelSelector="R" yChannelSelector="G"/>
          </filter>
        </defs>
      </svg>

      <svg class="bft-beam-svg" id="bftBeamSvg" viewBox="0 0 1000 285" preserveAspectRatio="none" aria-hidden="true">
        <polygon class="bft-beam-fill" id="bftBeamFill" points=""></polygon>
        <path class="bft-beam-edge" id="bftBeamTop" d=""></path>
        <path class="bft-beam-edge" id="bftBeamBottom" d=""></path>
      </svg>

      <div class="bft-distance" id="bftSourceDistance"><span id="bftSourceDistanceText">—</span></div>
      <div class="bft-distance" id="bftWallDistance"><span id="bftWallDistanceText">—</span></div>

      <div class="bft-item bft-projector" id="bftProjector" data-kind="source" role="slider" aria-label="Position du projecteur" tabindex="0">
        <svg viewBox="0 0 120 90" aria-hidden="true">
          <g class="bft-sketch">
            <path d="M20 34 L29 20 L74 18 L93 33 L89 59 L70 71 L29 67 L18 52 Z" fill="#36383a" stroke="#101112" stroke-width="4" stroke-linejoin="round"/>
            <path d="M29 25 L71 23 M24 35 L82 31 M23 46 L79 42 M27 56 L76 52 M34 64 L68 60" stroke="#66696b" stroke-width="2.2" opacity=".75"/>
            <path d="M90 31 Q104 35 108 44 Q104 54 89 60" fill="#f0efeb" stroke="#101112" stroke-width="4"/>
            <path d="M106 36 L116 32 L116 58 L106 53" fill="#faf8f1" stroke="#101112" stroke-width="3"/>
            <path d="M42 69 L41 78 M69 68 L74 78 M41 78 L31 85 M41 78 L51 86 M74 78 L65 86 M74 78 L84 84" stroke="#303234" stroke-width="3" stroke-linecap="round"/>
            <circle cx="56" cy="72" r="5" fill="#626466" stroke="#101112" stroke-width="2.5"/>
          </g>
        </svg>
        <span class="bft-item-label">PROJECTEUR</span>
      </div>

      <div class="bft-item bft-person" id="bftPerson" data-kind="person" role="slider" aria-label="Position du personnage" tabindex="0">
        <svg viewBox="0 0 110 125" aria-hidden="true">
          <g class="bft-sketch">
            <ellipse cx="55" cy="28" rx="20" ry="21" fill="#5d5f60" stroke="#111213" stroke-width="4"/>
            <path d="M24 47 Q55 35 86 47 L94 77 Q85 86 77 80 L72 62 L72 99 Q65 109 55 109 Q45 109 38 99 L38 62 L33 80 Q25 86 16 77 Z" fill="#f1f0ed" stroke="#111213" stroke-width="4" stroke-linejoin="round"/>
            <path d="M39 96 L31 113 Q28 120 35 123 Q42 125 46 117 L51 105 M71 96 L79 113 Q82 120 75 123 Q68 125 64 117 L59 105" fill="#9fa1a2" stroke="#111213" stroke-width="4" stroke-linecap="round"/>
            <path d="M18 77 Q14 84 20 89 Q26 93 31 85 M92 77 Q96 84 90 89 Q84 93 79 85" fill="#d7d7d4" stroke="#111213" stroke-width="3"/>
            <path d="M31 48 Q37 55 39 65 M79 48 Q73 55 71 65 M42 46 Q55 51 68 46" stroke="#b9bab8" stroke-width="2.2" opacity=".9"/>
            <path d="M42 18 Q55 10 68 18 M38 27 Q55 17 72 27 M41 35 Q55 27 69 35" stroke="#77797a" stroke-width="2" opacity=".65"/>
          </g>
        </svg>
        <span class="bft-item-label">PERSONNAGE</span>
      </div>

      <div class="bft-item bft-wall" id="bftWall" data-kind="wall" role="slider" aria-label="Position du mur" tabindex="0">
        <svg viewBox="0 0 50 150" aria-hidden="true">
          <g class="bft-sketch">
            <rect class="bft-wall-fill" x="8" y="5" width="32" height="140" rx="2" stroke="#111213" stroke-width="4"/>
            <path d="M13 18 L35 12 M12 33 L36 25 M12 49 L36 41 M12 64 L36 56 M12 81 L36 73 M12 97 L36 89 M12 113 L36 105 M12 130 L36 122" stroke="rgba(20,21,22,.26)" stroke-width="1.6"/>
            <path d="M17 6 L17 145 M30 6 L30 145" stroke="rgba(255,255,255,.20)" stroke-width="1.4"/>
          </g>
        </svg>
        <span class="bft-item-label">MUR</span>
      </div>

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
    const state={source:13,person:54,wall:82};

    function wallStops(){
      const dSubject=Math.max(1,state.person-state.source);
      const dWall=Math.max(dSubject+1,state.wall-state.source);
      return 2*log2(dSubject/dWall);
    }

    function render(){
      const stops=wallStops();
      const darkness=clamp((-stops)/5.2,0,1);
      const gray=Math.round(244-(226*darkness));
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

      const stage=q('bftStage');
      const stageW=stage?.clientWidth||1000;
      const stageH=stage?.clientHeight||285;
      const x0=stageW*state.source/100;
      const x1=stageW*state.wall/100;
      const cy=stageH*.54;
      const near=13;
      const far=Math.min(stageH*.28,58);
      q('bftBeamSvg').setAttribute('viewBox',`0 0 ${stageW} ${stageH}`);
      q('bftBeamFill').setAttribute('points',`${x0},${cy-near} ${x1},${cy-far} ${x1},${cy+far} ${x0},${cy+near}`);
      q('bftBeamTop').setAttribute('d',`M ${x0} ${cy-near} L ${x1} ${cy-far}`);
      q('bftBeamBottom').setAttribute('d',`M ${x0} ${cy+near} L ${x1} ${cy+far}`);

      let text='Mur presque aussi lumineux';
      if(stops<-4.2)text='Mur presque noir';
      else if(stops<-3)text='Mur très sombre';
      else if(stops<-1.8)text='Mur nettement plus sombre';
      else if(stops<-.75)text='Mur légèrement plus sombre';
      q('bftResult').textContent=text+' · '+Math.abs(stops).toLocaleString('fr-FR',{maximumFractionDigits:1})+' stop'+(Math.abs(stops)>=1.5?'s':'')+' sous le personnage';

      ['bftProjector','bftPerson','bftWall'].forEach(id=>{
        const key=id==='bftProjector'?'source':id==='bftPerson'?'person':'wall';
        q(id)?.setAttribute('aria-valuenow',String(state[key]));
      });
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
        e.preventDefault();
        const step=e.shiftKey?5:1;
        const dir=e.key==='ArrowRight'?step:-step;
        setPosition(kind,state[kind]+dir);
      });
    });

    function reset(ev){ev?.stopPropagation();state.source=13;state.person=54;state.wall=82;render();}
    q('bftReset').addEventListener('click',reset);
    q('bftReset').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reset(e);}});
    q('bftToggle').addEventListener('click',e=>{
      if(e.target.closest('#bftReset'))return;
      const collapsed=panel.classList.toggle('bmp-collapsed');
      q('bftToggle').setAttribute('aria-expanded',collapsed?'false':'true');
      setTimeout(()=>{render();window.BOSExpoHostFit?.();},40);
    });
    window.addEventListener('resize',()=>{if(!panel.classList.contains('bmp-collapsed'))render();});

    render();
    setTimeout(()=>window.BOSExpoHostFit?.(),80);
  }

  frame.addEventListener('load',()=>setTimeout(setup,120));
  if(frame.contentDocument?.readyState==='complete'||frame.contentDocument?.readyState==='interactive')setTimeout(setup,120);
})();
