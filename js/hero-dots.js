/* Gentle pointer parallax; no automatic motion or touch interception. */
(() => {
 'use strict';
 const hero=document.querySelector('.hero');
 const layer=hero?.querySelector('.hero-dots');
 if(!layer)return;
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 let visible=false,frame=0,x=0,y=0,targetX=0,targetY=0,lastTime=0;
 const enabled=()=>visible&&!document.hidden&&!preference.matches;
 const render=()=>{
  layer.style.setProperty('--mouse-x',`${x.toFixed(3)}px`);
  layer.style.setProperty('--mouse-y',`${y.toFixed(3)}px`);
 };
 const tick=time=>{
  const elapsed=lastTime?Math.min(time-lastTime,64):16.67;
  lastTime=time;
  const ease=1-Math.exp(-elapsed/110);
  x+=(targetX-x)*ease;
  y+=(targetY-y)*ease;
  if(Math.abs(targetX-x)<.02&&Math.abs(targetY-y)<.02){
   x=targetX;y=targetY;frame=0;lastTime=0;render();return;
  }
  render();
  frame=requestAnimationFrame(tick);
 };
 const start=()=>{if(!frame)frame=requestAnimationFrame(tick);};
 const reset=()=>{targetX=0;targetY=0;if(enabled())start();};
 const sync=()=>{
  layer.dataset.active=String(enabled());
  if(!enabled()){
   cancelAnimationFrame(frame);frame=0;lastTime=0;
   x=0;y=0;targetX=0;targetY=0;render();
  }
 };
 hero.addEventListener('pointermove',event=>{
  if(!enabled()||event.pointerType==='touch')return;
  const rect=hero.getBoundingClientRect();
  targetX=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1))*26;
  targetY=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1))*26;
  start();
 },{passive:true});
 hero.addEventListener('pointerleave',reset);
 hero.addEventListener('pointercancel',reset);
 window.addEventListener('blur',reset);
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});
 observer.observe(hero);
 preference.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 sync();
})();
