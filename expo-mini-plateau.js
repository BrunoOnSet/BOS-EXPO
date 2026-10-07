(function(){
  'use strict';

  const frame=document.getElementById('expoFrame');
  if(!frame)return;

  const SOURCE_MAX=20;
  const SOURCE_MIN=0.5;
  const BG_MAX=5;
  const BG_MIN=0.3;

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const log2=v=>Math.log(v)/Math.LN2;
  const fmt=v=>Number(v).toLocaleString('fr-FR',{maximumFractionDigits:1,minimumFractionDigits:1});

  function styleText(){return `
html.bos-suite-embed #bosMiniPlateau{
  width:100%;margin-top:12px;border:1px solid var(--card-border,#D7D9D6);border-radius:22px;background:var(--panel);box-shadow:none;overflow:hidden;padding:0;
}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed{height:82px}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed .bfd-body{display:none}
html.bos-suite-embed .bfd-head{display:grid;grid-template-columns:34px minmax(0,1fr) auto 24px;align-items:center;gap:12px;width:100%;height:80px;min-height:80px;padding:14px 16px;border:0;background:transparent;text-align:left;cursor:pointer;color:inherit;box-sizing:border-box}
html.bos-suite-embed #bosMiniPlateau:not(.bmp-collapsed) .bfd-head{border-bottom:1px solid var(--line)}
html.bos-suite-embed .bfd-number{width:34px;height:34px;display:grid;place-items:center;border:1px solid #2F5B66;border-radius:10px;background:rgba(47,91,102,.14);color:#2F5B66;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:11px;font-weight:700}
html.bos-suite-embed body.dark .bfd-number{background:rgba(47,91,102,.22);color:#7FA7B0}
html.bos-suite-embed .bfd-title{min-width:0}
html.bos-suite-embed .bfd-title strong{display:block;overflow:hidden;color:#2F5B66;font-family:Montserrat,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;font-size:16px;line-height:1.15;font-weight:700;white-space:nowrap;text-overflow:ellipsis}
html.bos-suite-embed body.dark .bfd-title strong{color:#7FA7B0}
html.bos-suite-embed .bfd-title small{display:block;margin-top:4px;overflow:hidden;color:var(--muted);font-size:10px;line-height:1.3;white-space:nowrap;text-overflow:ellipsis}
html.bos-suite-embed .bfd-reset{min-height:30px;padding:0 10px;border:1px solid var(--line);border-radius:999px;background:var(--panel2);color:var(--muted);font-size:9px;font-weight:800;letter-spacing:.06em;cursor:pointer}
html.bos-suite-embed .bfd-chevron{display:grid;place-items:center;width:24px;height:24px;color:var(--muted);font-size:18px;line-height:1;transform:rotate(180deg)}
html.bos-suite-embed #bosMiniPlateau.bmp-collapsed .bfd-chevron{transform:none}
html.bos-suite-embed .bfd-body{padding:16px 18px 18px}
html.bos-suite-embed .bfd-intro{margin:0 0 12px;color:var(--muted);font-size:10px;line-height:1.45}

html.bos-suite-embed .bfd-scene{position:relative;width:100%;aspect-ratio:16/9;min-height:240px;border:1px solid var(--line);border-radius:17px;overflow:hidden;background:#d8d3c9;isolation:isolate}
html.bos-suite-embed .bfd-room{position:absolute;inset:0;z-index:1;background:linear-gradient(#d8d3c9 0 73%,#b8afa1 73% 100%)}
html.bos-suite-embed body.dark .bfd-room{background:linear-gradient(#484743 0 73%,#33322f 73% 100%)}
html.bos-suite-embed .bfd-wall-line{position:absolute;left:0;right:0;top:73%;height:1px;background:rgba(47,91,102,.18)}
html.bos-suite-embed .bfd-rug{position:absolute;left:27%;right:23%;bottom:4%;height:18%;border-radius:50%;background:rgba(47,91,102,.08);transform:perspective(260px) rotateX(62deg)}
html.bos-suite-embed .bfd-cabinet{position:absolute;left:8%;bottom:25%;width:20%;height:52%;border:2px solid #2F5B66;border-radius:4px;background:rgba(255,255,255,.24);box-shadow:inset 0 0 0 1px rgba(255,255,255,.18)}
html.bos-suite-embed .bfd-cabinet:before{content:"";position:absolute;left:50%;top:0;bottom:0;width:1px;background:#2F5B66;opacity:.55}
html.bos-suite-embed .bfd-cabinet:after{content:"";position:absolute;left:8%;right:8%;top:39%;height:1px;background:#2F5B66;opacity:.45;box-shadow:0 42px 0 #2F5B66}
html.bos-suite-embed .bfd-cabinet-knob{position:absolute;top:48%;width:4px;height:4px;border-radius:50%;background:#2F5B66}.bfd-cabinet-knob.a{left:43%}.bfd-cabinet-knob.b{right:43%}
html.bos-suite-embed .bfd-console{position:absolute;right:8%;bottom:25%;width:24%;height:18%;border-top:3px solid #2F5B66;border-left:2px solid #2F5B66;border-right:2px solid #2F5B66;opacity:.8}
html.bos-suite-embed .bfd-frame{position:absolute;right:12%;top:15%;width:15%;height:18%;border:2px solid #2F5B66;border-radius:2px;opacity:.72}.bfd-frame:after{content:"";position:absolute;inset:12%;border:1px solid #2F5B66;opacity:.4}
html.bos-suite-embed .bfd-plant{position:absolute;right:27%;bottom:25%;width:14%;height:42%}
html.bos-suite-embed .bfd-pot{position:absolute;left:30%;bottom:0;width:42%;height:22%;border:2px solid #2F5B66;border-radius:3px 3px 8px 8px;background:rgba(47,91,102,.10)}
html.bos-suite-embed .bfd-stem{position:absolute;left:50%;bottom:19%;width:2px;height:58%;background:#2F5B66;transform-origin:bottom}
html.bos-suite-embed .bfd-stem.s1{transform:rotate(-17deg)}.bfd-stem.s2{transform:rotate(15deg)}.bfd-stem.s3{transform:rotate(0)}
html.bos-suite-embed .bfd-leaf{position:absolute;width:25%;height:18%;border:2px solid #2F5B66;border-radius:80% 20% 80% 20%;background:rgba(47,91,102,.12)}
html.bos-suite-embed .bfd-leaf.l1{left:15%;top:22%;transform:rotate(15deg)}.bfd-leaf.l2{right:12%;top:16%;transform:rotate(72deg)}.bfd-leaf.l3{left:37%;top:4%;transform:rotate(46deg)}.bfd-leaf.l4{right:6%;top:39%;transform:rotate(55deg)}
html.bos-suite-embed .bfd-lamp{position:absolute;left:34%;bottom:25%;width:9%;height:45%}.bfd-lamp:before{content:"";position:absolute;left:48%;top:20%;bottom:0;width:2px;background:#2F5B66}.bfd-lamp:after{content:"";position:absolute;left:13%;top:0;width:74%;height:24%;border:2px solid #2F5B66;border-radius:50% 50% 10% 10%;background:rgba(47,91,102,.08)}
html.bos-suite-embed .bfd-room-shade{position:absolute;inset:0;z-index:2;background:#090b0c;opacity:var(--bfd-darkness,.18);transition:opacity .12s linear;pointer-events:none}
html.bos-suite-embed .bfd-subject-glow{position:absolute;z-index:3;left:50%;top:9%;width:34%;height:84%;transform:translateX(-50%);background:radial-gradient(ellipse at 50% 50%,rgba(255,244,211,.30) 0,rgba(255,244,211,.10) 42%,transparent 72%);pointer-events:none}
html.bos-suite-embed .bfd-person{position:absolute;z-index:4;left:50%;bottom:8%;width:110px;height:78%;transform:translateX(-50%);filter:drop-shadow(0 9px 12px rgba(0,0,0,.18))}
html.bos-suite-embed .bfd-head-person{position:absolute;left:50%;top:2%;width:36%;aspect-ratio:1;border-radius:50%;transform:translateX(-50%);background:#d8b59e;border:2px solid rgba(47,91,102,.42)}
html.bos-suite-embed .bfd-hair{position:absolute;left:50%;top:1%;width:38%;height:15%;border-radius:50% 50% 38% 38%;transform:translateX(-50%);background:#26292b}
html.bos-suite-embed .bfd-neck{position:absolute;left:43%;top:32%;width:14%;height:9%;background:#d8b59e}
html.bos-suite-embed .bfd-body-person{position:absolute;left:18%;right:18%;top:38%;bottom:8%;border-radius:38% 38% 12% 12%;background:#2F5B66;box-shadow:inset 0 0 0 2px rgba(255,255,255,.08)}
html.bos-suite-embed .bfd-arm{position:absolute;top:42%;width:14%;height:42%;border-radius:999px;background:#2F5B66}.bfd-arm.a{left:11%;transform:rotate(8deg)}.bfd-arm.b{right:11%;transform:rotate(-8deg)}
html.bos-suite-embed .bfd-scene-badge{position:absolute;z-index:6;right:12px;top:12px;padding:7px 9px;border:1px solid rgba(255,255,255,.58);border-radius:999px;background:rgba(255,255,255,.76);backdrop-filter:blur(8px);color:#2F5B66;font-size:9px;font-weight:800;letter-spacing:.04em;box-shadow:0 2px 10px rgba(0,0,0,.06)}
html.bos-suite-embed body.dark .bfd-scene-badge{background:rgba(20,22,24,.72);border-color:rgba(255,255,255,.14);color:#7FA7B0}

html.bos-suite-embed .bfd-status{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:11px 0 0;padding:10px 12px;border:1px solid var(--line);border-radius:12px;background:var(--panel2)}
html.bos-suite-embed .bfd-status span{color:var(--muted);font-size:9px;line-height:1.35}.bfd-status strong{color:#2F5B66;font-size:10px;text-align:right}html.bos-suite-embed body.dark .bfd-status strong{color:#7FA7B0}
html.bos-suite-embed .bfd-controls{display:grid;gap:12px;margin-top:14px}
html.bos-suite-embed .bfd-control{padding:11px 12px 10px;border:1px solid var(--line);border-radius:14px;background:var(--panel2)}
html.bos-suite-embed .bfd-control-head{display:flex;align-items:baseline;justify-content:space-between;gap:12px;margin-bottom:9px}.bfd-control-head span{color:var(--text);font-size:9px;font-weight:800;letter-spacing:.04em;text-transform:uppercase}.bfd-control-head strong{color:#2F5B66;font-size:11px;white-space:nowrap}html.bos-suite-embed body.dark .bfd-control-head strong{color:#7FA7B0}
html.bos-suite-embed .bfd-range{width:100%;margin:0;accent-color:#2F5B66}
html.bos-suite-embed .bfd-extremes{display:flex;justify-content:space-between;gap:12px;margin-top:5px;color:var(--muted);font-size:8px;font-weight:700}.bfd-extremes span:last-child{text-align:right}
html.bos-suite-embed .bfd-note{margin:12px 0 0;color:var(--muted);font-size:9px;line-height:1.45}
@media(max-width:520px){html.bos-suite-embed .bfd-scene{min-height:215px}.bfd-person{width:92px}.bfd-body{padding:14px 15px 16px}}
@media(max-width:430px){html.bos-suite-embed .bfd-head{grid-template-columns:34px minmax(0,1fr) 24px;gap:10px;padding:14px 15px}.bfd-reset{display:none}.bfd-scene-badge{right:9px;top:9px}.bfd-status{align-items:flex-start;flex-direction:column;gap:4px}.bfd-status strong{text-align:left}}
`;}

  function markup(){return `
<section id="bosMiniPlateau" class="bmp-collapsed" aria-label="Distances et fall-off">
  <button type="button" class="bfd-head" id="bfdToggle" aria-expanded="false">
    <span class="bfd-number">07</span>
    <span class="bfd-title"><strong>DISTANCES & FOND</strong><small>Le sujet reste exposé. Regarde ce qui arrive au fond.</small></span>
    <span class="bfd-reset" id="bfdReset" role="button" tabindex="0">RESET</span>
    <span class="bfd-chevron" aria-hidden="true">⌄</span>
  </button>
  <div class="bfd-body">
    <p class="bfd-intro">Le personnage reste toujours correctement exposé. Déplace simplement les deux distances et observe la luminosité du décor.</p>

    <div class="bfd-scene" id="bfdScene">
      <div class="bfd-room">
        <div class="bfd-wall-line"></div><div class="bfd-rug"></div>
        <div class="bfd-cabinet"><i class="bfd-cabinet-knob a"></i><i class="bfd-cabinet-knob b"></i></div>
        <div class="bfd-lamp"></div>
        <div class="bfd-plant"><i class="bfd-pot"></i><i class="bfd-stem s1"></i><i class="bfd-stem s2"></i><i class="bfd-stem s3"></i><i class="bfd-leaf l1"></i><i class="bfd-leaf l2"></i><i class="bfd-leaf l3"></i><i class="bfd-leaf l4"></i></div>
        <div class="bfd-console"></div><div class="bfd-frame"></div>
      </div>
      <div class="bfd-room-shade"></div>
      <div class="bfd-subject-glow"></div>
      <div class="bfd-person"><div class="bfd-head-person"></div><div class="bfd-hair"></div><div class="bfd-neck"></div><div class="bfd-body-person"></div><div class="bfd-arm a"></div><div class="bfd-arm b"></div></div>
      <div class="bfd-scene-badge" id="bfdBadge">FOND −0,7 stop</div>
    </div>

    <div class="bfd-status"><span>Le personnage reste à la même exposition.</span><strong id="bfdStatusText">Fond légèrement plus sombre</strong></div>

    <div class="bfd-controls">
      <label class="bfd-control">
        <div class="bfd-control-head"><span>Distance projecteur / personnage</span><strong id="bfdSourceOut">10,3 m</strong></div>
        <input class="bfd-range" id="bfdSource" type="range" min="0" max="100" step="1" value="50">
        <div class="bfd-extremes"><span>LOIN · 20 m</span><span>PROCHE · 0,5 m</span></div>
      </label>
      <label class="bfd-control">
        <div class="bfd-control-head"><span>Distance personnage / fond</span><strong id="bfdBgOut">2,7 m</strong></div>
        <input class="bfd-range" id="bfdBg" type="range" min="0" max="100" step="1" value="50">
        <div class="bfd-extremes"><span>LOIN · 5 m</span><span>PROCHE · 0,3 m</span></div>
      </label>
    </div>

    <p class="bfd-note">Plus la source est proche du personnage, plus la lumière chute vite derrière lui. Plus le fond est éloigné du personnage, plus il reçoit peu de lumière.</p>
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
    const state={sourcePos:50,bgPos:50};

    function distanceFromSlider(pos,max,min){return max-(max-min)*(pos/100);}
    function render(){
      const sourceDistance=distanceFromSlider(state.sourcePos,SOURCE_MAX,SOURCE_MIN);
      const bgDistance=distanceFromSlider(state.bgPos,BG_MAX,BG_MIN);

      // Le personnage est compensé pour rester à exposition constante.
      // Le fond reçoit la lumière à la distance source→personnage + personnage→fond.
      const ratio=Math.pow(sourceDistance/(sourceDistance+bgDistance),2);
      const fallStops=2*log2(sourceDistance/(sourceDistance+bgDistance));

      // Gamma visuel doux : le décor reste lisible tout en rendant le fall-off évident.
      const perceived=Math.pow(clamp(ratio,0,1),0.45);
      const darkness=clamp(1-perceived,0,0.97);
      q('bfdScene').style.setProperty('--bfd-darkness',darkness.toFixed(3));

      q('bfdSourceOut').textContent=fmt(sourceDistance)+' m';
      q('bfdBgOut').textContent=fmt(bgDistance)+' m';
      const abs=Math.abs(fallStops);
      q('bfdBadge').textContent='FOND '+(fallStops>-0.05?'0,0':'−'+abs.toLocaleString('fr-FR',{maximumFractionDigits:1}))+' stop'+(abs>=1.5?'s':'');

      let text='Fond presque au niveau du sujet';
      if(abs>=0.45&&abs<1.2)text='Fond légèrement plus sombre';
      else if(abs>=1.2&&abs<2.4)text='Le sujet se détache davantage';
      else if(abs>=2.4&&abs<4)text='Fond nettement plus sombre';
      else if(abs>=4)text='Fond presque noir';
      q('bfdStatusText').textContent=text;
      window.BOSExpoHostFit?.();
    }

    q('bfdSource').addEventListener('input',e=>{state.sourcePos=Number(e.target.value);render();});
    q('bfdBg').addEventListener('input',e=>{state.bgPos=Number(e.target.value);render();});

    function reset(ev){ev?.stopPropagation();state.sourcePos=50;state.bgPos=50;q('bfdSource').value='50';q('bfdBg').value='50';render();}
    q('bfdReset').addEventListener('click',reset);
    q('bfdReset').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();reset(e);}});
    q('bfdToggle').addEventListener('click',e=>{if(e.target.closest('#bfdReset'))return;const collapsed=panel.classList.toggle('bmp-collapsed');q('bfdToggle').setAttribute('aria-expanded',collapsed?'false':'true');setTimeout(()=>window.BOSExpoHostFit?.(),30);});

    render();setTimeout(()=>window.BOSExpoHostFit?.(),80);
  }

  frame.addEventListener('load',()=>setTimeout(setup,120));
  if(frame.contentDocument?.readyState==='complete'||frame.contentDocument?.readyState==='interactive')setTimeout(setup,120);
})();
