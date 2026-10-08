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
html.bos-suite-embed .bft-projector{width:112px!important;height:96px!important;overflow:visible!important;background:transparent!important}
html.bos-suite-embed .bft-person{width:86px!important;height:86px!important;background:transparent!important;overflow:visible!important;border:0!important;box-shadow:none!important}
html.bos-suite-embed .bft-projector-simple{display:block;width:112px;height:84px;pointer-events:none;user-select:none;overflow:visible}
html.bos-suite-embed .bft-projector-simple .proj-fill{fill:#d8d8d4}
html.bos-suite-embed .bft-projector-simple .proj-dark{fill:#363636}
html.bos-suite-embed .bft-projector-simple .proj-outline{fill:none;stroke:#171717;stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round}
html.bos-suite-embed .bft-projector-simple .proj-outline-soft{fill:none;stroke:#2c2c2c;stroke-width:1.6;stroke-linecap:round;stroke-linejoin:round;opacity:.72}
html.bos-suite-embed .bft-projector-simple .proj-sketch{fill:none;stroke:#555;stroke-width:1.25;stroke-linecap:round;opacity:.6}
html.bos-suite-embed .bft-person-ball{display:block;width:86px;height:86px;pointer-events:none;user-select:none;overflow:visible}
html.bos-suite-embed .bft-person-ball .ball-fill{fill:#d8d8d4}
html.bos-suite-embed .bft-person-ball .ball-outline{fill:none;stroke:#171717;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:round}
html.bos-suite-embed .bft-person-ball .ball-outline-soft{fill:none;stroke:#2c2c2c;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;opacity:.72}
html.bos-suite-embed .bft-person-ball .ball-sketch{fill:none;stroke:#555;stroke-width:1.35;stroke-linecap:round;opacity:.62}
html.bos-suite-embed .bft-projector>.bft-item-label,html.bos-suite-embed .bft-person>.bft-item-label{top:calc(100% + 7px)!important}
@media(max-width:520px){
  html.bos-suite-embed .bft-projector{width:96px!important;height:82px!important}
  html.bos-suite-embed .bft-projector-simple{width:96px;height:72px}
  html.bos-suite-embed .bft-person{width:74px!important;height:74px!important}
  html.bos-suite-embed .bft-person-ball{width:74px;height:74px}
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
<svg class="bft-projector-simple" viewBox="0 0 120 90" aria-hidden="true">
  <path class="proj-fill" d="M17 30 C32 24 55 23 74 28 L82 34 L82 58 L74 64 C54 69 32 68 17 62 Z"/>
  <path class="proj-outline" d="M17 30 C32 24 55 23 74 28 L82 34 L82 58 L74 64 C54 69 32 68 17 62 Z"/>
  <path class="proj-outline-soft" d="M20 32 C35 27 55 26 71 30 L78 35 L78 56 L71 61 C53 65 34 65 20 60 Z"/>
  <path class="proj-fill" d="M81 34 L101 39 C106 40 108 45 108 48 C108 52 106 57 101 58 L81 59 Z"/>
  <path class="proj-outline" d="M81 34 L101 39 C106 40 108 45 108 48 C108 52 106 57 101 58 L81 59 Z"/>
  <path class="proj-dark" d="M101 41 C105 42 106 45 106 48 C106 52 104 55 101 56 Z"/>
  <path class="proj-outline-soft" d="M15 38 C10 39 8 43 8 48 C8 53 11 57 16 58"/>
  <path class="proj-sketch" d="M29 35 C42 31 57 31 69 34"/>
  <path class="proj-sketch" d="M27 44 C42 41 58 41 72 43"/>
  <path class="proj-sketch" d="M27 53 C42 51 58 51 72 52"/>
  <path class="proj-sketch" d="M31 60 C43 59 55 59 65 58"/>
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