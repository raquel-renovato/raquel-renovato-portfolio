/* Pause the moving previews on request, out of view and for reduced motion. */
(() => {
 'use strict';
 const showcases=document.querySelectorAll('.project-mosaic-project');
 if(!showcases.length)return;
 const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
 showcases.forEach(showcase=>{
 const button=showcase.querySelector('.project-mosaic-motion');
 const name=showcase.querySelector('h3').textContent;
 let paused=false,visible=false;
 const sync=()=>{
  showcase.dataset.moving=String(visible&&!paused&&!motionPreference.matches&&!document.hidden);
  button.setAttribute('aria-pressed',String(paused));
  button.setAttribute('aria-label',(paused?'Retomar animação: ':'Pausar animação: ')+name);
  button.firstElementChild.textContent=paused?'▷':'Ⅱ';
  button.lastElementChild.textContent=paused?'Retomar movimento':'Pausar movimento';
 };
 button.addEventListener('click',()=>{paused=!paused;sync();});
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:0.1});
 observer.observe(showcase.querySelector('.project-mosaic-window'));
 motionPreference.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 sync();
 });
})();
