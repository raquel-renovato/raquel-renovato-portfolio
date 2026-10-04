/* Match the decorative icon to the hovered or keyboard-focused project. */
(() => {
 'use strict';
 const directory=document.querySelector('.project-index');
 if(!directory)return;
 const links=[...directory.querySelectorAll('.project-index-link')];
 const icons=[...directory.querySelectorAll('.project-icon-slide')];
 const select=index=>{
  icons.forEach((icon,i)=>icon.classList.toggle('is-active',i===index));
 };
 links.forEach((link,index)=>{
  link.addEventListener('pointerenter',()=>select(index));
  link.addEventListener('focus',()=>select(index));
 });
})();
