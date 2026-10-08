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
html.bos-suite-embed .bft-person{width:100px!important;height:121px!important;background:transparent!important;overflow:visible!important;border:0!important;box-shadow:none!important}
html.bos-suite-embed .bft-reference-img{display:block;width:100%;height:auto;pointer-events:none;user-select:none;-webkit-user-drag:none;mix-blend-mode:multiply;filter:grayscale(1) contrast(1.06) brightness(.98)}
html.bos-suite-embed .bft-projector .bft-reference-img{width:112px;transform:translateY(-1px);clip-path:polygon(6% 73%,13% 60%,23% 52%,32% 42%,39% 30%,49% 18%,58% 12%,68% 16%,79% 28%,89% 38%,92% 49%,83% 55%,69% 60%,60% 73%,69% 100%,60% 100%,51% 78%,40% 71%,11% 90%,0% 88%)}
html.bos-suite-embed .bft-person .bft-reference-img{width:100px;clip-path:polygon(49% 2%,58% 4%,64% 10%,66% 17%,63% 24%,59% 28%,55% 30%,57% 35%,67% 39%,74% 48%,77% 58%,73% 61%,68% 58%,65% 46%,61% 36%,56% 33%,54% 61%,58% 78%,64% 98%,57% 100%,51% 79%,49% 65%,47% 79%,41% 100%,34% 98%,40% 78%,44% 61%,42% 33%,37% 36%,33% 46%,30% 58%,25% 61%,21% 58%,24% 48%,31% 39%,41% 35%,43% 30%,39% 28%,35% 24%,32% 17%,34% 10%,40% 4%)}
html.bos-suite-embed .bft-projector>.bft-item-label,html.bos-suite-embed .bft-person>.bft-item-label{top:calc(100% + 7px)!important}
@media(max-width:520px){
  html.bos-suite-embed .bft-projector{width:96px!important;height:82px!important}
  html.bos-suite-embed .bft-projector .bft-reference-img{width:96px}
  html.bos-suite-embed .bft-person{width:86px!important;height:104px!important}
  html.bos-suite-embed .bft-person .bft-reference-img{width:86px}
}
`;
      (doc.head||doc.documentElement).appendChild(style);
    }

    function replace(el,src){
      if(el.querySelector('.bft-reference-img'))return;
      el.querySelector('svg')?.remove();
      const img=doc.createElement('img');
      img.className='bft-reference-img';
      img.alt='';
      img.src=src;
      el.insertBefore(img,el.firstChild);
    }

    replace(projector,'/BOS-EXPO/assets/falloff-projector.webp');
    replace(person,'/BOS-EXPO/assets/falloff-personnage.webp');
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