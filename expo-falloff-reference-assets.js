(function(){
  'use strict';
  const frame=document.getElementById('expoFrame');
  if(!frame)return;

  function apply(){
    let doc;
    try{doc=frame.contentDocument;}catch(_){return false;}
    if(!doc)return false;

    const projector=doc.getElementById('bftProjector');
    const person=doc.getElementById('bftPerson');
    if(!projector||!person)return false;

    if(!doc.getElementById('bftReferenceAssetStyle')){
      const style=doc.createElement('style');
      style.id='bftReferenceAssetStyle';
      style.textContent=`
html.bos-suite-embed .bft-projector{width:96px!important;height:76px!important;overflow:visible!important;background:transparent!important}
html.bos-suite-embed .bft-person{width:86px!important;height:86px!important;background:transparent!important;overflow:visible!important;border:0!important;box-shadow:none!important}
html.bos-suite-embed .bft-projector-simple{display:block;width:96px;height:76px;pointer-events:none;user-select:none;overflow:visible}
html.bos-suite-embed .bft-projector-simple .proj-fill{fill:#d8d8d4}
html.bos-suite-embed .bft-projector-simple .proj-outline{fill:none;stroke:#171717;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}
html.bos-suite-embed .bft-projector-simple .proj-outline-soft{fill:none;stroke:#2c2c2c;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;opacity:.72}
html.bos-suite-embed .bft-projector-simple .proj-sketch{fill:none;stroke:#555;stroke-width:1.25;stroke-linecap:round;opacity:.6}
html.bos-suite-embed .bft-person-ball{display:block;width:86px;height:86px;pointer-events:none;user-select:none;overflow:visible}
html.bos-suite-embed .bft-person-ball .ball-fill{fill:#d8d8d4}
html.bos-suite-embed .bft-person-ball .ball-outline{fill:none;stroke:#171717;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:round}
html.bos-suite-embed .bft-person-ball .ball-outline-soft{fill:none;stroke:#2c2c2c;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;opacity:.72}
html.bos-suite-embed .bft-person-ball .ball-sketch{fill:none;stroke:#555;stroke-width:1.35;stroke-linecap:round;opacity:.62}
html.bos-suite-embed .bft-projector>.bft-item-label,html.bos-suite-embed .bft-person>.bft-item-label{top:calc(100% + 7px)!important}
html.bos-suite-embed .bft-distance{display:none!important}
html.bos-suite-embed .bft-body{padding:10px 18px 12px!important}
html.bos-suite-embed .bft-intro{margin-bottom:7px!important}
html.bos-suite-embed .bft-stage{height:225px!important}
html.bos-suite-embed .bft-readout{margin-top:7px!important;padding:8px 12px!important}
@media(max-width:520px){
  html.bos-suite-embed .bft-projector{width:82px!important;height:65px!important}
  html.bos-suite-embed .bft-projector-simple{width:82px;height:65px}
  html.bos-suite-embed .bft-person{width:74px!important;height:74px!important}
  html.bos-suite-embed .bft-person-ball{width:74px;height:74px}
  html.bos-suite-embed .bft-body{padding:10px 15px 12px!important}
  html.bos-suite-embed .bft-stage{height:205px!important}
}
`;
      (doc.head||doc.documentElement).appendChild(style);
    }

    function replaceProjectorWithDrawing(el){
      if(el.querySelector('.bft-projector-simple'))return;
      el.querySelector('.bft-reference-img')?.remove();
      el.querySelector('svg')?.remove();

      const holder=doc.createElement('div');
      holder.innerHTML=`
<svg class="bft-projector-simple" viewBox="0 0 100 80" aria-hidden="true">
  <path class="proj-fill" d="M77 21 L77 59 C62 67 43 69 29 63 C18 58 12 50 12 40 C12 30 18 22 29 17 C43 11 62 13 77 21 Z"/>
  <path class="proj-outline" d="M77 21 L77 59 C62 67 43 69 29 63 C18 58 12 50 12 40 C12 30 18 22 29 17 C43 11 62 13 77 21 Z"/>
  <path class="proj-outline-soft" d="M77 24 L82 24 L82 56 L77 56"/>
  <path class="proj-sketch" d="M28 29 C39 23 53 21 65 24"/>
  <path class="proj-sketch" d="M23 40 C36 35 52 34 66 37"/>
  <path class="proj-sketch" d="M28 52 C39 49 52 49 64 51"/>
</svg>`;
      el.insertBefore(holder.firstElementChild,el.firstChild);
    }

    function replacePersonWithBall(el){
      if(el.querySelector('.bft-person-ball'))return;
      el.querySelector('.bft-reference-img')?.remove();
      el.querySelector('svg')?.remove();

      const holder=doc.createElement('div');
      holder.innerHTML=`
<svg class="bft-person-ball" viewBox="0 0 100 100" aria-hidden="true">
  <path class="ball-fill" d="M50 15.5 C68 15 83 28 85 47 C87 66 72 83 52 84 C31 86 15 72 15 51 C14 31 29 17 50 15.5 Z"/>
  <path class="ball-outline" d="M50 15.5 C68 15 83 28 85 47 C87 66 72 83 52 84 C31 86 15 72 15 51 C14 31 29 17 50 15.5 Z"/>
  <path class="ball-outline-soft" d="M48 18 C65 16 80 29 82 47 C84 64 70 79 52 81 C33 83 19 70 18 52 C17 34 31 20 48 18 Z"/>
  <path class="ball-sketch" d="M29 39 C38 34 48 32 60 33"/>
  <path class="ball-sketch" d="M25 49 C37 44 51 43 66 45"/>
  <path class="ball-sketch" d="M27 59 C39 55 52 54 67 57"/>
  <path class="ball-sketch" d="M35 68 C44 66 53 66 61 68"/>
</svg>`;
      el.insertBefore(holder.firstElementChild,el.firstChild);
    }

    replaceProjectorWithDrawing(projector);
    replacePersonWithBall(person);
    return true;
  }

  let tries=0;
  function ensure(){
    tries++;
    if(!apply()&&tries<160)setTimeout(ensure,80);
  }

  frame.addEventListener('load',()=>{tries=0;setTimeout(ensure,180);});
  setTimeout(ensure,180);
  setInterval(apply,800);
})();
