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
html.bos-suite-embed .bft-reference-img{display:block;width:100%;height:auto;pointer-events:none;user-select:none;-webkit-user-drag:none;mix-blend-mode:multiply}
html.bos-suite-embed .bft-projector .bft-reference-img{width:112px;transform:translateY(-1px);clip-path:polygon(0% 75%,9% 65%,21% 57%,29% 47%,36% 42%,39% 29%,49% 19%,57% 13%,68% 18%,79% 29%,89% 38%,92% 50%,80% 56%,66% 61%,58% 75%,67% 100%,59% 100%,51% 78%,40% 70%,9% 88%,0% 88%)}
html.bos-suite-embed .bft-person .bft-reference-img{width:100px;clip-path:polygon(30% 17%,37% 7%,47% 3%,59% 4%,69% 12%,73% 19%,84% 21%,94% 31%,96% 47%,89% 58%,81% 59%,78% 75%,83% 94%,72% 100%,61% 79%,51% 67%,41% 80%,31% 100%,20% 96%,22% 78%,17% 59%,8% 56%,3% 42%,10% 29%,21% 22%)}
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