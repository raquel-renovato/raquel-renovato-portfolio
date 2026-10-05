/* Match the decorative icon to the hovered or keyboard-focused project. */
(() => {
 'use strict';
 const directory=document.querySelector('.project-index');
 if(!directory)return;
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const stage=directory.querySelector('.project-icon-stage');
 const links=[...directory.querySelectorAll('.project-index-link')];
 const icons=[...directory.querySelectorAll('.project-icon-slide')];
 const select=index=>{
  icons.forEach((icon,i)=>icon.classList.toggle('is-active',i===index));
 };
 links.forEach((link,index)=>{
  link.addEventListener('pointerenter',()=>select(index));
  link.addEventListener('focus',()=>select(index));
 });
 const reset=()=>{stage?.style.setProperty('--icon-x','0deg');stage?.style.setProperty('--icon-y','0deg');};
 directory.addEventListener('pointermove',event=>{
  if(!stage||preference.matches||event.pointerType==='touch')return;
  const rect=directory.getBoundingClientRect();
  const x=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));
  const y=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));
  stage.style.setProperty('--icon-x',`${(-y*7).toFixed(2)}deg`);
  stage.style.setProperty('--icon-y',`${(x*10).toFixed(2)}deg`);
 },{passive:true});
 directory.addEventListener('pointerleave',reset);
 window.addEventListener('blur',reset);
 preference.addEventListener('change',reset);
 // Keep the illustration in its column and hide it early as the final row approaches.
 if(stage&&links.length){
  const desktop=matchMedia('(min-width: 701px)');
  let frame=0;
  const updateScroll=()=>{
   frame=0;
   if(!desktop.matches)return;
   const last=links[links.length-1].getBoundingClientRect();
   const end=window.innerHeight/2+40;
   const opacity=Math.max(0,Math.min(1,(last.top-end)/40));
   stage.style.setProperty('--icon-opacity',String(opacity));
  };
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(updateScroll);};
  window.addEventListener('scroll',schedule,{passive:true});
  window.addEventListener('resize',schedule,{passive:true});
  desktop.addEventListener('change',schedule);
  new ResizeObserver(schedule).observe(directory);
  updateScroll();
 }
})();
