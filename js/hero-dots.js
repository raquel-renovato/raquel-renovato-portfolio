/* Stop decorative motion when the Hero is hidden or reduced motion is preferred. */
(() => {
 'use strict';
 const hero=document.querySelector('.hero');
 const layer=hero?.querySelector('.hero-dots');
 if(!layer)return;
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let visible=false;
 const sync=()=>{layer.dataset.active=String(visible&&!document.hidden&&!preference.matches);};
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0.05});
 observer.observe(hero);
 preference.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 sync();
})();
