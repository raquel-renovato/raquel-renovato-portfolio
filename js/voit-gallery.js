/* Identity filters, carousel viewer and videos loaded on request. */
(() => {
 'use strict';
 const filters=[...document.querySelectorAll('[data-identity]')];
 const selectIdentity=button=>{
  filters.forEach(filter=>{
   const selected=filter===button;
   filter.setAttribute('aria-selected',String(selected));filter.tabIndex=selected?0:-1;
   document.getElementById(filter.getAttribute('aria-controls')).hidden=!selected;
  });
  requestAnimationFrame(()=>rows.forEach(updatePosition));
 };
 filters.forEach((button,index)=>{
  button.addEventListener('click',()=>selectIdentity(button));
  button.addEventListener('keydown',event=>{
   let next;
   if(event.key==='ArrowRight')next=(index+1)%filters.length;
   if(event.key==='ArrowLeft')next=(index-1+filters.length)%filters.length;
   if(event.key==='Home')next=0;
   if(event.key==='End')next=filters.length-1;
   if(next===undefined)return;
   event.preventDefault();selectIdentity(filters[next]);filters[next].focus();
  });
 });
 const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)');
 const rows=[...document.querySelectorAll('.voit-horizontal-row')];
 const updatePosition=row=>{
  const track=row.querySelector('.voit-horizontal-track');
  if(!track.clientWidth)return;
  const items=[...track.children];
  const origin=items[0].offsetLeft;
  const current=items.reduce((nearest,item,index)=>Math.abs(item.offsetLeft-origin-track.scrollLeft)<Math.abs(items[nearest].offsetLeft-origin-track.scrollLeft)?index:nearest,0);
  row.querySelector('.voit-row-position').textContent=`${String(current+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`;
 };
 const moveRow=(row,direction)=>{
  const track=row.querySelector('.voit-horizontal-track');
  const max=track.scrollWidth-track.clientWidth;
  const item=track.firstElementChild;
  const step=item.getBoundingClientRect().width+parseFloat(getComputedStyle(track).columnGap||0);
  const end=direction>0&&track.scrollLeft>=max-3;
  const start=direction<0&&track.scrollLeft<=3;
  track.scrollTo({left:end?0:start?max:track.scrollLeft+direction*step,behavior:reducedMotion.matches?'instant':'smooth'});
 };
 rows.forEach(row=>{
  const track=row.querySelector('.voit-horizontal-track');
  row.querySelectorAll('[data-row-step]').forEach(button=>button.addEventListener('click',()=>moveRow(row,Number(button.dataset.rowStep))));
  track.addEventListener('scroll',()=>updatePosition(row),{passive:true});
  track.addEventListener('keydown',event=>{
   if(event.target!==track)return;
   if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();moveRow(row,event.key==='ArrowRight'?1:-1);}
   if(event.key==='Home'||event.key==='End'){event.preventDefault();track.scrollTo({left:event.key==='Home'?0:track.scrollWidth,behavior:reducedMotion.matches?'instant':'smooth'});}
  });
  updatePosition(row);
 });
 const updateRows=()=>requestAnimationFrame(()=>rows.forEach(updatePosition));
 filters.forEach(button=>button.addEventListener('click',updateRows));
 document.querySelectorAll('.voit-tab').forEach(button=>button.addEventListener('click',updateRows));
 addEventListener('resize',updateRows);
 const dialog=document.getElementById('voitCarouselDialog');
 const image=document.getElementById('voitCarouselImage');
 const title=document.getElementById('voitCarouselTitle');
 const counter=dialog.querySelector('.voit-dialog-counter');
 let slides=[],slideIndex=0,trigger;
 const showSlide=()=>{
  image.src=slides[slideIndex];image.alt=`${title.textContent} — slide ${slideIndex+1} de ${slides.length}`;
  counter.textContent=`${String(slideIndex+1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
 };
 const step=delta=>{slideIndex=(slideIndex+delta+slides.length)%slides.length;showSlide();};
 document.querySelectorAll('.voit-carousel-cover').forEach(button=>button.addEventListener('click',()=>{
  trigger=button;slides=JSON.parse(button.dataset.slides);slideIndex=0;title.textContent=button.dataset.title;showSlide();
  dialog.showModal();document.body.classList.add('locked');dialog.querySelector('.voit-dialog-close').focus();
 }));
 dialog.querySelector('.voit-dialog-close').addEventListener('click',()=>dialog.close());
 dialog.querySelector('.voit-dialog-prev').addEventListener('click',()=>step(-1));
 dialog.querySelector('.voit-dialog-next').addEventListener('click',()=>step(1));
 dialog.addEventListener('keydown',event=>{
  if(event.key==='ArrowRight'){event.preventDefault();step(1);}
  if(event.key==='ArrowLeft'){event.preventDefault();step(-1);}
 });
 dialog.addEventListener('click',event=>{if(event.target===dialog){const b=dialog.getBoundingClientRect();if(event.clientX<b.left||event.clientX>b.right||event.clientY<b.top||event.clientY>b.bottom)dialog.close();}});
 dialog.addEventListener('close',()=>{document.body.classList.remove('locked');image.removeAttribute('src');trigger?.focus();});
 const videos=[...document.querySelectorAll('.voit-video-card video')];
 document.querySelectorAll('.voit-video-play').forEach(button=>button.addEventListener('click',()=>{
  const video=button.parentElement.querySelector('video');
  videos.forEach(other=>{if(other!==video)other.pause();});
  if(!video.getAttribute('src'))video.src=video.dataset.src;
  button.hidden=true;video.focus();video.play().catch(()=>{});
 }));
 document.querySelectorAll('.voit-tab').forEach(button=>button.addEventListener('click',()=>{
  if(button.dataset.voitTab!=='social')videos.forEach(video=>video.pause());
 }));
})();
