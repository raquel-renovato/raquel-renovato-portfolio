/* Reveal larger accent dots along a short, fading pointer trail. */
(() => {
 'use strict';
 const hero=document.querySelector('.hero');
 const layer=hero?.querySelector('.hero-dots');
 const trail=layer?.querySelector('.hero-dots-trail');
 if(!trail)return;
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const lifetime=700;
 const empty='linear-gradient(transparent,transparent)';
 let visible=false,frame=0,points=[];
 const enabled=()=>visible&&!document.hidden&&!preference.matches;
 const paint=mask=>{trail.style.maskImage=mask;trail.style.webkitMaskImage=mask;};
 const clear=()=>{cancelAnimationFrame(frame);frame=0;points=[];paint(empty);};
 const tick=now=>{
  points=points.filter(point=>now-point.time<lifetime);
  paint(points.length?points.map(point=>{
   const fade=Math.max(0,1-(now-point.time)/lifetime);
   const radius=70*(.35+.65*fade);
   return `radial-gradient(${radius.toFixed(1)}px circle at ${point.x}px ${point.y}px,rgba(0,0,0,${fade.toFixed(3)}) 0%,transparent 100%)`;
  }).join(','):empty);
  frame=points.length?requestAnimationFrame(tick):0;
 };
 hero.addEventListener('pointermove',event=>{
  if(!enabled()||event.pointerType==='touch')return;
  const rect=hero.getBoundingClientRect();
  points=points.slice(-23);
  points.push({x:event.clientX-rect.left,y:event.clientY-rect.top,time:performance.now()});
  if(!frame)frame=requestAnimationFrame(tick);
 },{passive:true});
 const sync=()=>{layer.dataset.active=String(enabled());if(!enabled())clear();};
 const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.05});
 observer.observe(hero);
 preference.addEventListener('change',sync);
 document.addEventListener('visibilitychange',sync);
 window.addEventListener('blur',clear);
 sync();
})();
