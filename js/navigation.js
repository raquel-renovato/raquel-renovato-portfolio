/* Enhancements shared by the Home and case pages. No wireframe behavior here. */
(() => {
  'use strict';
  const MOBILE_PREVIEW_WIDTH = 480;
  const MOBILE_PREVIEW_HEIGHT = 960;

  const finishingStyles = document.createElement('style');
  finishingStyles.textContent = `
    .case-page #fernando-project .fa-responsive-showcase,
    #projects-container #fernando-project .fa-responsive-showcase {
      padding:0 !important; border:0 !important; border-radius:0 !important; background:transparent !important;
      box-shadow:none !important; grid-template-columns:minmax(0,1fr) 440px; gap:24px; align-items:stretch;
    }
    .case-page #fernando-project .fa-device-desktop,
    .case-page #fernando-project .fa-device-mobile-artboard,
    #projects-container #fernando-project .fa-device-desktop,
    #projects-container #fernando-project .fa-device-mobile-artboard {
      height:824px !important; border:0 !important; border-radius:12px !important; box-shadow:none !important;
      background:transparent !important; overflow:hidden;
    }
    .case-page #fernando-project .fa-browser,
    #projects-container #fernando-project .fa-browser {
      border:0 !important; border-radius:12px !important; box-shadow:none !important; overflow:hidden;
    }
    .case-page #fernando-project .fa-desktop-viewport,
    #projects-container #fernando-project .fa-desktop-viewport { height:780px !important; overflow:hidden; }
    .case-page #fernando-project .fa-mobile-artboard-stage,
    #projects-container #fernando-project .fa-mobile-artboard-stage { padding:0 !important; min-height:0; background:transparent !important; }
    .case-page #fernando-project .fa-mobile-artboard-viewport,
    #projects-container #fernando-project .fa-mobile-artboard-viewport {
      width:100%; max-width:440px; height:780px; aspect-ratio:auto; overflow:hidden;
      border:0 !important; border-radius:0 0 12px 12px !important; box-shadow:none !important;
    }
    .case-page #fernando-project .fa-mobile-artboard-viewport iframe,
    #projects-container #fernando-project .fa-mobile-artboard-viewport iframe {
      width:${MOBILE_PREVIEW_WIDTH}px; height:${MOBILE_PREVIEW_HEIGHT}px; max-width:none !important; border:0 !important;
      transform:scale(var(--mobile-scale,.916667)); transform-origin:top left;
    }
    .case-page #fernando-project .fa-mobile-artboard-bar,
    #projects-container #fernando-project .fa-mobile-artboard-bar { border-radius:12px 12px 0 0 !important; }

    .case-page #fernando-project .fernando-compare-browsers .fa-browser,
    #projects-container #fernando-project .fernando-compare-browsers .fa-browser { flex:0 0 auto !important; height:auto !important; min-height:0 !important; }
    .case-page #fernando-project .fernando-compare-browsers .fa-desktop-viewport,
    #projects-container #fernando-project .fernando-compare-browsers .fa-desktop-viewport {
      height:auto !important; min-height:0 !important; aspect-ratio:16 / 9; background:transparent !important;
    }

    @media(max-width:1000px){
      .case-page #fernando-project .fa-responsive-showcase,
      #projects-container #fernando-project .fa-responsive-showcase { grid-template-columns:minmax(0,1fr); }
      .case-page #fernando-project .fa-device-mobile-artboard,
      #projects-container #fernando-project .fa-device-mobile-artboard { width:min(100%,440px); }
    }
    @media(max-width:620px){
      .case-page #fernando-project .fa-responsive-showcase,
      #projects-container #fernando-project .fa-responsive-showcase { padding:0; gap:18px; }
      .case-page #fernando-project .fa-device-desktop,
      .case-page #fernando-project .fa-device-mobile-artboard,
      #projects-container #fernando-project .fa-device-desktop,
      #projects-container #fernando-project .fa-device-mobile-artboard { height:824px !important; }
      .case-page #fernando-project .fa-mobile-artboard-viewport,
      #projects-container #fernando-project .fa-mobile-artboard-viewport { max-width:440px; height:780px; }
      .case-page #fernando-project .fa-desktop-viewport,
      #projects-container #fernando-project .fa-desktop-viewport { height:780px !important; }
    }

    .mobile-nav-toggle { display:none; }
    @media(max-width:700px){
      #top { position:relative; z-index:300; }
      #top > .cta { display:none; }
      #top > ul { display:none !important; position:fixed !important; top:var(--mobile-nav-top,0px) !important; left:0 !important; right:0 !important; width:100vw !important; max-width:none !important; height:calc(100dvh - var(--mobile-nav-top,0px)) !important; margin:0 !important; padding:42px var(--page-pad) !important; box-sizing:border-box !important; background:var(--bg) !important; border:0 !important; flex-direction:column !important; align-items:stretch !important; justify-content:flex-start !important; gap:0 !important; z-index:299 !important; overflow:auto; }
      #top.mobile-nav-open > ul { display:flex !important; }
      #top > ul li { width:100% !important; border-bottom:1px solid var(--line); }
      #top > ul a { display:flex !important; align-items:center; justify-content:space-between; width:100%; padding:22px 0 !important; font-size:1.2rem; text-decoration:none; }
      #top > ul a::after { content:'↗'; font-family:'IBM Plex Mono',monospace; font-size:.85rem; color:var(--accent); }
      .mobile-nav-toggle { display:inline-flex; align-items:center; justify-content:center; width:56px; height:48px; border:1px solid var(--ink); border-radius:12px; background:var(--bg); color:var(--ink); cursor:pointer; z-index:301; }
      .mobile-nav-toggle svg { width:23px; height:23px; stroke:currentColor; stroke-width:1.8; fill:none; stroke-linecap:round; }
      body.mobile-menu-active { overflow:hidden; }
    }
  `;
  document.head.appendChild(finishingStyles);

  const toolsTrack=document.querySelector('.tools-strip-track');
  if(toolsTrack&&!toolsTrack.querySelector('[data-tool-github]')){const github=document.createElement('a');github.className='tool-logo';github.href='https://github.com/raquel-renovato';github.target='_blank';github.rel='noopener noreferrer';github.dataset.toolGithub='';github.setAttribute('aria-label','GitHub');github.innerHTML='<img src="/img/img-logo-ferramentas/github-icon.svg" alt=""><span>GitHub</span>';toolsTrack.appendChild(github);}
  document.querySelectorAll('.fa-mobile-artboard-bar strong').forEach(label=>{label.textContent=`${MOBILE_PREVIEW_WIDTH}px`;});
  document.querySelectorAll('.fa-responsive-device-caption span').forEach(label=>{if(/\d+px/.test(label.textContent))label.textContent=label.textContent.replace(/\d+px/,`${MOBILE_PREVIEW_WIDTH}px`);});
  document.querySelectorAll('.fa-mobile-artboard-viewport').forEach(viewport=>{const resize=()=>{if(!viewport.clientWidth)return;viewport.style.setProperty('--mobile-scale',String(viewport.clientWidth/MOBILE_PREVIEW_WIDTH));};new ResizeObserver(resize).observe(viewport);resize();});

  const topNav=document.getElementById('top');const navList=topNav?.querySelector(':scope > ul');
  if(topNav&&navList&&!topNav.querySelector('.mobile-nav-toggle')){const toggle=document.createElement('button');toggle.type='button';toggle.className='mobile-nav-toggle';toggle.setAttribute('aria-label','Abrir navegação');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';topNav.appendChild(toggle);const setMenuTop=()=>document.documentElement.style.setProperty('--mobile-nav-top',`${topNav.getBoundingClientRect().bottom}px`);const closeMenu=()=>{topNav.classList.remove('mobile-nav-open');document.body.classList.remove('mobile-menu-active');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Abrir navegação');toggle.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';};toggle.addEventListener('click',()=>{setMenuTop();const open=topNav.classList.toggle('mobile-nav-open');document.body.classList.toggle('mobile-menu-active',open);toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar navegação':'Abrir navegação');toggle.innerHTML=open?'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>':'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';});navList.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));window.addEventListener('resize',()=>{setMenuTop();if(innerWidth>700)closeMenu();});setMenuTop();}

  const themeToggle=document.getElementById('themeToggle');const syncTheme=()=>themeToggle?.setAttribute('aria-pressed',String(document.documentElement.dataset.theme==='dark'));syncTheme();themeToggle?.addEventListener('click',()=>{syncTheme();try{sessionStorage.setItem('portfolio-theme-manual',document.documentElement.dataset.theme==='dark'?'dark':'light');}catch(_){}});
  const loadEmbeds=panel=>{panel?.querySelectorAll('iframe[data-src]').forEach(frame=>{frame.loading='eager';frame.src=frame.dataset.src;delete frame.dataset.src;});requestAnimationFrame(()=>window.dispatchEvent(new Event('resize')));};
  const setupTabs=(buttonsSelector,panelsSelector,buttonKey,panelKey)=>{const buttons=[...document.querySelectorAll(buttonsSelector)];const panels=[...document.querySelectorAll(panelsSelector)];if(!buttons.length)return;buttons[0].parentElement.setAttribute('role','tablist');buttons[0].parentElement.setAttribute('aria-label',buttonKey==='fernandoTab'?'Conteúdo do projeto Fernando Amaral':'Conteúdo do projeto Voit');const sync=()=>buttons.forEach(button=>{const active=button.classList.contains('active');button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;const panel=panels.find(panel=>panel.dataset[panelKey]===button.dataset[buttonKey]);if(panel){panel.hidden=!active;if(active)loadEmbeds(panel);}});buttons.forEach((button,i)=>{button.id=`${buttonKey}-${button.dataset[buttonKey]}`;button.setAttribute('role','tab');const panel=panels.find(panel=>panel.dataset[panelKey]===button.dataset[buttonKey]);if(panel){panel.id=`${panelKey}-${panel.dataset[panelKey]}`;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby',button.id);panel.tabIndex=0;button.setAttribute('aria-controls',panel.id);}button.addEventListener('click',sync);button.addEventListener('keydown',event=>{let next;if(event.key==='ArrowRight')next=(i+1)%buttons.length;else if(event.key==='ArrowLeft')next=(i-1+buttons.length)%buttons.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;if(next===undefined)return;event.preventDefault();buttons[next].click();buttons[next].focus();});});sync();};
  setupTabs('.fernando-tab','.fernando-view','fernandoTab','fernandoView');setupTabs('.voit-tab','.voit-view','voitTab','voitView');
  const prototype=document.querySelector('.fa-figma-frame iframe');if(prototype){const status=document.querySelector('.fa-figma-status');prototype.addEventListener('load',()=>{if(status)status.textContent='Protótipo interativo · Role ou arraste dentro da prévia para explorar.';});const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){loadEmbeds(prototype.parentElement);observer.disconnect();}},{rootMargin:'200px'});const project=document.querySelector('#fernando-project');if(project)observer.observe(project);}
  document.querySelectorAll('.fa-nav-preview-stage').forEach(stage=>{const preview=stage.querySelector('.fa-nav-preview');if(!preview)return;const resize=()=>{if(!stage.clientWidth)return;const scale=Math.min(1,stage.clientWidth/720);stage.style.setProperty('--nav-preview-scale',String(scale));stage.style.setProperty('--nav-preview-height',`${preview.offsetHeight*scale}px`);};new ResizeObserver(resize).observe(stage);window.addEventListener('resize',resize);resize();});
  const galleryItems=[...document.querySelectorAll('.project-preview')];if(galleryItems.length){const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');let frame=0;const updateGallery=()=>{frame=0;const mobile=innerWidth<=700;const depths=[.065,-.1,.08,-.06];const limit=mobile?18:42;const positions=galleryItems.map((item,index)=>{const bounds=item.getBoundingClientRect();const visible=bounds.bottom>-100&&bounds.top<innerHeight+100;const distance=innerHeight/2-(bounds.top+bounds.height/2);return motionPreference.matches||!visible?0:Math.max(-limit,Math.min(limit,distance*depths[index%depths.length]));});galleryItems.forEach((item,index)=>item.style.setProperty('--gallery-shift',`${positions[index].toFixed(2)}px`));};const queueGallery=()=>{if(!frame)frame=requestAnimationFrame(updateGallery);};addEventListener('scroll',queueGallery,{passive:true});addEventListener('resize',queueGallery);addEventListener('load',queueGallery);motionPreference.addEventListener('change',queueGallery);galleryItems.forEach(item=>item.querySelectorAll('img').forEach(image=>image.addEventListener('load',queueGallery,{once:true})));queueGallery();}
  const modal=document.getElementById('imgModal');const close=document.getElementById('imgModalClose');let previousFocus;let wasOpen=false;if(modal&&close){modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Imagem ampliada');modal.setAttribute('aria-hidden','true');const observer=new MutationObserver(()=>{const open=modal.classList.contains('open');if(open===wasOpen)return;wasOpen=open;modal.setAttribute('aria-hidden',String(!open));if(open){previousFocus=document.activeElement;close.focus();}else previousFocus?.focus();});observer.observe(modal,{attributes:true,attributeFilter:['class']});document.querySelectorAll('.js-lightbox-image').forEach(image=>{image.tabIndex=0;image.setAttribute('role','button');image.setAttribute('aria-label',`Ampliar: ${image.alt}`);image.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();image.click();}});});modal.addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();close.focus();}});}
})();
