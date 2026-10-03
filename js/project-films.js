/* Silent, viewport-aware video previews with a manual pause option. */
(() => {
 'use strict';
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const entries=[...document.querySelectorAll('.project-film-intro')].map(root=>({root,video:root.querySelector('video'),button:root.querySelector('button'),name:root.querySelector('h3').textContent.trim(),visible:false,paused:false,manualPlay:false,pending:false}));
 const label=entry=>{
  const running=!entry.video.paused;
  entry.button.setAttribute('aria-pressed',String(running));
  entry.button.setAttribute('aria-label',(running?'Pausar prévia: ':'Reproduzir prévia: ')+entry.name);
  entry.button.firstElementChild.textContent=running?'Ⅱ':'▷';
  entry.button.lastElementChild.textContent=running?'Pausar prévia':'Reproduzir prévia';
 };
 const sync=entry=>{
  const shouldPlay=entry.visible&&!entry.paused&&!document.hidden&&(!preference.matches||entry.manualPlay);
  if(!shouldPlay){entry.video.pause();label(entry);return;}
  if(!entry.video.getAttribute('src'))entry.video.src=entry.video.dataset.src;
  if(entry.pending)return;
  entry.pending=true;
  entry.video.play().catch(()=>{}).finally(()=>{entry.pending=false;if(!entry.visible||entry.paused||document.hidden||(preference.matches&&!entry.manualPlay))entry.video.pause();label(entry);});
 };
 const observer=new IntersectionObserver(changes=>{
  changes.forEach(change=>{const entry=entries.find(e=>e.video===change.target);entry.visible=change.isIntersecting;sync(entry);});
 },{threshold:0.2});
 entries.forEach(entry=>{
  observer.observe(entry.video);
  entry.button.addEventListener('click',()=>{
   if(entry.video.paused){entry.paused=false;entry.manualPlay=true;entry.visible=true;}else{entry.paused=true;entry.manualPlay=false;}
   sync(entry);
  });
  entry.video.addEventListener('play',()=>label(entry));entry.video.addEventListener('pause',()=>label(entry));label(entry);
 });
 document.addEventListener('visibilitychange',()=>entries.forEach(sync));
 preference.addEventListener('change',()=>{entries.forEach(entry=>{entry.manualPlay=false;sync(entry);});});
})();
