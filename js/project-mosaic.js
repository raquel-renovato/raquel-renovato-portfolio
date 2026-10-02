/* Pause the moving previews on request, out of view and for reduced motion. */
(() => {
 'use strict';
 const showcase=document.querySelector('.project-mosaic-showcase');
 if(!showcase)return;
 const button=showcase.querySelector('.project-mosaic-motion');
 const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
 let paused=false,visible=false;
 const sync=()=>{
  showcase.dataset.moving=String(visible&&!paused&&!motionPreference.matches&&!document.hidden);
  button.setAttribute('aria-pressed',String(paused));
  button.setAttribute('aria-label',paused?'Retomar animação das prévias':'Pausar animação das prévias');
  button.firstElementChild.textContent=paused?'▷':'Ⅱ';
  button.lastElementChild.textContent=paused?'Retomar movimento':'Pausar movimento';
 };
 button.addEventListener('click',()=>{paused=!paused;sync();});
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0.1});
 observer.observe(showcase.querySelector('.project-mosaic-window'));
 motionPreference.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 sync();
})();
