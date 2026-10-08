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
html.bos-suite-embed .bft-projector{width:112px!important;height:96px!important;overflow:hidden!important;background:transparent!important}
html.bos-suite-embed .bft-person{width:86px!important;height:86px!important;background:transparent!important;overflow:visible!important;border:0!important;box-shadow:none!important}
html.bos-suite-embed .bft-reference-img{display:block;width:100%;height:auto;pointer-events:none;user-select:none;-webkit-user-drag:none;mix-blend-mode:multiply;filter:grayscale(1) contrast(1.06) brightness(.98)}
html.bos-suite-embed .bft-projector .bft-reference-img{width:112px;transform:translateY(-1px);clip-path:polygon(6% 73%,13% 60%,23% 52%,32% 42%,39% 30%,49% 18%,58% 12%,68% 16%,79% 28%,89% 38%,92% 49%,83% 55%,69% 60%,60% 73%,69% 100%,60% 100%,51% 78%,40% 71%,11% 90%,0% 88%)}
html.bos-suite-embed .bft-person-ball{display:block;width:86px;height:86px;pointer-events:none;user-select:none;overflow:visible}
html.bos-suite-embed .bft-person-ball .ball-fill{fill:#d8d8d4}
html.bos-suite-embed .bft-person-ball .ball-outline{fill:none;stroke:#171717;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:round}
html.bos-suite-embed .bft-person-ball .ball-outline-soft{fill:none;stroke:#2c2c2c;stroke-width:1.7;stroke-linecap:round;stroke-linejoin:round;opacity:.72}
html.bos-suite-embed .bft-person-ball .ball-sketch{fill:none;stroke:#555;stroke-width:1.35;stroke-linecap:round;opacity:.62}
html.bos-suite-embed .bft-projector>.bft-item-label,html.bos-suite-embed .bft-person>.bft-item-label{top:calc(100% + 7px)!important}
@media(max-width:520px){
  html.bos-suite-embed .bft-projector{width:96px!important;height:82px!important}
  html.bos-suite-embed .bft-projector .bft-reference-img{width:96px}
  html.bos-suite-embed .bft-person{width:74px!important;height:74px!important}
  html.bos-suite-embed .bft-person-ball{width:74px;height:74px}
}
`;
      (doc.head||doc.documentElement).appendChild(style);
    }

    function replaceProjector(el,src){
      if(el.querySelector('.bft-reference-img'))return;
      el.querySelector('svg')?.remove();
      const img=doc.createElement('img');
      img.className='bft-reference-img';
      img.alt='';
      img.src=src;
      el.insertBefore(img,el.firstChild);
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

    replaceProjector(projector,'/BOS-EXPO/assets/falloff-projector.webp');
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