/* Enhancements shared by the Home and case pages. No wireframe behavior here. */
(() => {
  'use strict';

  const MOBILE_PREVIEW_WIDTH = 412;
  const MOBILE_PREVIEW_HEIGHT = 915;

  const finishingStyles = document.createElement('style');
  finishingStyles.textContent = `
    .case-page #fernando-project .fa-responsive-showcase,
    #projects-container #fernando-project .fa-responsive-showcase {
      padding:0; border:0; border-radius:0; background:transparent;
      grid-template-columns:minmax(0,1fr) 400px; gap:24px; align-items:stretch;
    }
    .case-page #fernando-project .fa-mobile-artboard-stage,
    #projects-container #fernando-project .fa-mobile-artboard-stage { padding:18px; }
    .case-page #fernando-project .fa-mobile-artboard-viewport,
    #projects-container #fernando-project .fa-mobile-artboard-viewport {
      width:100%; max-width:360px; height:auto; aspect-ratio:360 / 800; overflow:hidden;
    }
    .case-page #fernando-project .fa-mobile-artboard-viewport iframe,
    #projects-container #fernando-project .fa-mobile-artboard-viewport iframe {
      width:${MOBILE_PREVIEW_WIDTH}px; height:${MOBILE_PREVIEW_HEIGHT}px;
      transform:scale(var(--mobile-scale,.873786)); transform-origin:top left;
    }
    @media(max-width:1000px){
      .case-page #fernando-project .fa-responsive-showcase,
      #projects-container #fernando-project .fa-responsive-showcase { grid-template-columns:minmax(0,1fr); }
    }
    @media(max-width:620px){
      .case-page #fernando-project .fa-responsive-showcase,
      #projects-container #fernando-project .fa-responsive-showcase { padding:0; gap:18px; }
      .case-page #fernando-project .fa-mobile-artboard-stage,
      #projects-container #fernando-project .fa-mobile-artboard-stage { padding:10px 0; }
      .case-page #fernando-project .fa-mobile-artboard-viewport,
      #projects-container #fernando-project .fa-mobile-artboard-viewport { max-width:360px; border-radius:0; }
    }

    .mobile-nav-toggle { display:none; }
    @media(max-width:700px){
      #top { position:relative; }
      #top > .cta { display:none; }
      #top > ul { display:none; position:absolute; top:calc(100% + 1px); left:0; right:0; z-index:100;
        margin:0; padding:14px var(--page-pad) 18px; background:var(--bg); border-bottom:1px solid var(--line);
        flex-direction:column; align-items:stretch; gap:0; }
      #top.mobile-nav-open > ul { display:flex; }
      #top > ul li { width:100%; }
      #top > ul a { display:block; padding:12px 0; }
      .mobile-nav-toggle { display:inline-flex; align-items:center; justify-content:center; width:56px; height:48px;
        border:1px solid var(--ink); border-radius:12px; background:transparent; color:var(--ink); cursor:pointer; }
      .mobile-nav-toggle svg { width:23px; height:23px; stroke:currentColor; stroke-width:1.8; fill:none; stroke-linecap:round; }
    }
  `;
  document.head.appendChild(finishingStyles);

  const toolsTrack = document.querySelector('.tools-strip-track');
  if (toolsTrack && !toolsTrack.querySelector('[data-tool-github]')) {
    const github = document.createElement('a');
    github.className = 'tool-logo';
    github.href = 'https://github.com/raquel-renovato';
    github.target = '_blank';
    github.rel = 'noopener noreferrer';
    github.dataset.toolGithub = '';
    github.setAttribute('aria-label', 'GitHub');
    github.innerHTML = '<img src="/img/img-logo-ferramentas/github-icon.svg" alt=""><span>GitHub</span>';
    toolsTrack.appendChild(github);
  }

  document.querySelectorAll('.fa-mobile-artboard-bar strong').forEach(label => { label.textContent = `${MOBILE_PREVIEW_WIDTH}px`; });
  document.querySelectorAll('.fa-responsive-device-caption span').forEach(label => {
    if (/\d+px/.test(label.textContent)) label.textContent = label.textContent.replace(/\d+px/, `${MOBILE_PREVIEW_WIDTH}px`);
  });

  document.querySelectorAll('.fa-mobile-artboard-viewport').forEach(viewport => {
    const resize = () => {
      if (!viewport.clientWidth) return;
      viewport.style.setProperty('--mobile-scale', String(viewport.clientWidth / MOBILE_PREVIEW_WIDTH));
    };
    new ResizeObserver(resize).observe(viewport);
    resize();
  });

  const topNav = document.getElementById('top');
  const navList = topNav?.querySelector(':scope > ul');
  if (topNav && navList && !topNav.querySelector('.mobile-nav-toggle')) {
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'mobile-nav-toggle';
    toggle.setAttribute('aria-label','Abrir navegação');
    toggle.setAttribute('aria-expanded','false');
    toggle.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    topNav.appendChild(toggle);
    const closeMenu = () => {
      topNav.classList.remove('mobile-nav-open');
      toggle.setAttribute('aria-expanded','false');
      toggle.setAttribute('aria-label','Abrir navegação');
    };
    toggle.addEventListener('click', () => {
      const open = topNav.classList.toggle('mobile-nav-open');
      toggle.setAttribute('aria-expanded',String(open));
      toggle.setAttribute('aria-label',open ? 'Fechar navegação' : 'Abrir navegação');
    });
    navList.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', event => { if (!topNav.contains(event.target)) closeMenu(); });
  }

  const themeToggle = document.getElementById('themeToggle');
  const syncTheme = () => themeToggle?.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  syncTheme();
  themeToggle?.addEventListener('click', () => {
    syncTheme();
    try { sessionStorage.setItem('portfolio-theme-manual', document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'); } catch (_) {}
  });

  const loadEmbeds = panel => {
    panel?.querySelectorAll('iframe[data-src]').forEach(frame => { frame.loading='eager'; frame.src=frame.dataset.src; delete frame.dataset.src; });
    requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  };

  const setupTabs = (buttonsSelector, panelsSelector, buttonKey, panelKey) => {
    const buttons=[...document.querySelectorAll(buttonsSelector)];
    const panels=[...document.querySelectorAll(panelsSelector)];
    if(!buttons.length) return;
    buttons[0].parentElement.setAttribute('role','tablist');
    buttons[0].parentElement.setAttribute('aria-label',buttonKey==='fernandoTab'?'Conteúdo do projeto Fernando Amaral':'Conteúdo do projeto Voit');
    const sync=()=>buttons.forEach(button=>{
      const active=button.classList.contains('active');
      button.setAttribute('aria-selected',String(active)); button.tabIndex=active?0:-1;
      const panel=panels.find(panel=>panel.dataset[panelKey]===button.dataset[buttonKey]);
      if(panel){ panel.hidden=!active; if(active) loadEmbeds(panel); }
    });
    buttons.forEach((button,i)=>{
      button.id=`${buttonKey}-${button.dataset[buttonKey]}`; button.setAttribute('role','tab');
      const panel=panels.find(panel=>panel.dataset[panelKey]===button.dataset[buttonKey]);
      if(panel){ panel.id=`${panelKey}-${panel.dataset[panelKey]}`; panel.setAttribute('role','tabpanel'); panel.setAttribute('aria-labelledby',button.id); panel.tabIndex=0; button.setAttribute('aria-controls',panel.id); }
      button.addEventListener('click',sync);
      button.addEventListener('keydown',event=>{
        let next;
        if(event.key==='ArrowRight') next=(i+1)%buttons.length;
        else if(event.key==='ArrowLeft') next=(i-1+buttons.length)%buttons.length;
        else if(event.key==='Home') next=0; else if(event.key==='End') next=buttons.length-1;
        if(next===undefined) return; event.preventDefault(); buttons[next].click(); buttons[next].focus();
      });
    });
    sync();
  };
  setupTabs('.fernando-tab','.fernando-view','fernandoTab','fernandoView');
  setupTabs('.voit-tab','.voit-view','voitTab','voitView');

  const prototype=document.querySelector('.fa-figma-frame iframe');
  if(prototype){
    const status=document.querySelector('.fa-figma-status');
    prototype.addEventListener('load',()=>{if(status) status.textContent='Protótipo interativo · Role ou arraste dentro da prévia para explorar.';});
    const observer=new IntersectionObserver(entries=>{if(entries.some(entry=>entry.isIntersecting)){loadEmbeds(prototype.parentElement);observer.disconnect();}},{rootMargin:'200px'});
    const project=document.querySelector('#fernando-project'); if(project) observer.observe(project);
  }

  document.querySelectorAll('.fa-nav-preview-stage').forEach(stage=>{
    const preview=stage.querySelector('.fa-nav-preview'); if(!preview) return;
    const resize=()=>{if(!stage.clientWidth)return;const scale=Math.min(1,stage.clientWidth/720);stage.style.setProperty('--nav-preview-scale',String(scale));stage.style.setProperty('--nav-preview-height',`${preview.offsetHeight*scale}px`);};
    new ResizeObserver(resize).observe(stage); window.addEventListener('resize',resize); resize();
  });

  const galleryItems=[...document.querySelectorAll('.project-preview')];
  if(galleryItems.length){
    const motionPreference=matchMedia('(prefers-reduced-motion: reduce)'); let frame=0;
    const updateGallery=()=>{frame=0;const mobile=innerWidth<=700;const depths=[.065,-.1,.08,-.06];const limit=mobile?18:42;const positions=galleryItems.map((item,index)=>{const bounds=item.getBoundingClientRect();const visible=bounds.bottom>-100&&bounds.top<innerHeight+100;const distance=innerHeight/2-(bounds.top+bounds.height/2);return motionPreference.matches||!visible?0:Math.max(-limit,Math.min(limit,distance*depths[index%depths.length]));});galleryItems.forEach((item,index)=>item.style.setProperty('--gallery-shift',`${positions[index].toFixed(2)}px`));};
    const queueGallery=()=>{if(!frame)frame=requestAnimationFrame(updateGallery);};
    addEventListener('scroll',queueGallery,{passive:true});addEventListener('resize',queueGallery);addEventListener('load',queueGallery);motionPreference.addEventListener('change',queueGallery);galleryItems.forEach(item=>item.querySelectorAll('img').forEach(image=>image.addEventListener('load',queueGallery,{once:true})));queueGallery();
  }

  const modal=document.getElementById('imgModal'); const close=document.getElementById('imgModalClose'); let previousFocus; let wasOpen=false;
  if(modal&&close){
    modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');modal.setAttribute('aria-label','Imagem ampliada');modal.setAttribute('aria-hidden','true');
    const observer=new MutationObserver(()=>{const open=modal.classList.contains('open');if(open===wasOpen)return;wasOpen=open;modal.setAttribute('aria-hidden',String(!open));if(open){previousFocus=document.activeElement;close.focus();}else previousFocus?.focus();});
    observer.observe(modal,{attributes:true,attributeFilter:['class']});
    document.querySelectorAll('.js-lightbox-image').forEach(image=>{image.tabIndex=0;image.setAttribute('role','button');image.setAttribute('aria-label',`Ampliar: ${image.alt}`);image.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();image.click();}});});
    modal.addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();close.focus();}});
  }
})();
