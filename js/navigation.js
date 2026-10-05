/* Enhancements shared by the Home and case pages. No wireframe behavior here. */
(() => {
  'use strict';
  const themeToggle = document.getElementById('themeToggle');
  const syncTheme = () => themeToggle?.setAttribute('aria-pressed', String(document.documentElement.dataset.theme === 'dark'));
  syncTheme();
  themeToggle?.addEventListener('click', () => {
    syncTheme();
    try { sessionStorage.setItem('portfolio-theme-manual', document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'); } catch (_) {}
  });
  const loadEmbeds = (panel) => {
    panel?.querySelectorAll('iframe[data-src]').forEach(frame => {
      frame.loading = 'eager';
      frame.src = frame.dataset.src;
      delete frame.dataset.src;
    });
    requestAnimationFrame(() => window.dispatchEvent(new Event('resize')));
  };
  const setupTabs = (buttonsSelector, panelsSelector, buttonKey, panelKey) => {
    const buttons = [...document.querySelectorAll(buttonsSelector)];
    const panels = [...document.querySelectorAll(panelsSelector)];
    if (!buttons.length) return;
    buttons[0].parentElement.setAttribute('role', 'tablist');
    buttons[0].parentElement.setAttribute('aria-label', buttonKey === 'fernandoTab' ? 'Conteúdo do projeto Fernando Amaral' : 'Conteúdo do projeto Voit');
    const sync = () => buttons.forEach(button => {
      const active = button.classList.contains('active');
      button.setAttribute('aria-selected', String(active));
      button.tabIndex = active ? 0 : -1;
      const panel = panels.find(panel => panel.dataset[panelKey] === button.dataset[buttonKey]);
      if (panel) { panel.hidden = !active; if (active) loadEmbeds(panel); }
    });
    buttons.forEach((button, i) => {
      button.id = `${buttonKey}-${button.dataset[buttonKey]}`;
      button.setAttribute('role', 'tab');
      const panel = panels.find(panel => panel.dataset[panelKey] === button.dataset[buttonKey]);
      if (panel) {
        panel.id = `${panelKey}-${panel.dataset[panelKey]}`;
        panel.setAttribute('role', 'tabpanel');
        panel.setAttribute('aria-labelledby', button.id);
        panel.tabIndex = 0;
        button.setAttribute('aria-controls', panel.id);
      }
      button.addEventListener('click', sync);
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (i + 1) % buttons.length;
        else if (event.key === 'ArrowLeft') next = (i - 1 + buttons.length) % buttons.length;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = buttons.length - 1;
        if (next === undefined) return;
        event.preventDefault(); buttons[next].click(); buttons[next].focus();
      });
    });
    sync();
  };
  setupTabs('.fernando-tab', '.fernando-view', 'fernandoTab', 'fernandoView');
  setupTabs('.voit-tab', '.voit-view', 'voitTab', 'voitView');
  const prototype = document.querySelector('.fa-figma-frame iframe');
  if (prototype) {
    const status = document.querySelector('.fa-figma-status');
    prototype.addEventListener('load', () => { if (status) status.textContent = 'Protótipo interativo · Role ou arraste dentro da prévia para explorar.'; });
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        loadEmbeds(prototype.parentElement);
        observer.disconnect();
      }
    }, { rootMargin: '200px' });
    observer.observe(document.querySelector('#fernando-project'));
  }
  document.querySelectorAll('.fa-mobile-artboard-viewport').forEach(viewport => {
    const resize = () => { if (viewport.clientWidth) viewport.style.setProperty('--mobile-scale', String(viewport.clientWidth / 390)); };
    new ResizeObserver(resize).observe(viewport);
    resize();
  });
  document.querySelectorAll('.fa-nav-preview-stage').forEach(stage => {
    const preview = stage.querySelector('.fa-nav-preview');
    const resize = () => {
      if (!stage.clientWidth) return;
      const scale = Math.min(1, stage.clientWidth / 720);
      stage.style.setProperty('--nav-preview-scale', String(scale));
      stage.style.setProperty('--nav-preview-height', `${preview.offsetHeight * scale}px`);
    };
    new ResizeObserver(resize).observe(stage);
    window.addEventListener('resize', resize);
    resize();
  });
  // Scroll depth is measured from each stationary project, never from its moving cover.
  const galleryItems = [...document.querySelectorAll('.project-preview')];
  if (galleryItems.length) {
    const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const updateGallery = () => {
      frame = 0;
      const mobile = innerWidth <= 700;
      const depths = [0.065, -0.1, 0.08, -0.06];
      const limit = mobile ? 18 : 42;
      const positions = galleryItems.map((item, index) => {
        const bounds = item.getBoundingClientRect();
        const visible = bounds.bottom > -100 && bounds.top < innerHeight + 100;
        const distance = innerHeight / 2 - (bounds.top + bounds.height / 2);
        return motionPreference.matches || !visible ? 0 : Math.max(-limit, Math.min(limit, distance * depths[index % depths.length]));
      });
      galleryItems.forEach((item, index) => item.style.setProperty('--gallery-shift', `${positions[index].toFixed(2)}px`));
    };
    const queueGallery = () => { if (!frame) frame = requestAnimationFrame(updateGallery); };
    addEventListener('scroll', queueGallery, { passive: true });
    addEventListener('resize', queueGallery);
    addEventListener('load', queueGallery);
    motionPreference.addEventListener('change', queueGallery);
    galleryItems.forEach(item => item.querySelectorAll('img').forEach(image => image.addEventListener('load', queueGallery, { once: true })));
    queueGallery();
  }
  const modal = document.getElementById('imgModal');
  const close = document.getElementById('imgModalClose');
  let previousFocus;
  let wasOpen = false;
  if (modal && close) {
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Imagem ampliada');
    modal.setAttribute('aria-hidden', 'true');
    const observer = new MutationObserver(() => {
      const open = modal.classList.contains('open');
      if (open === wasOpen) return;
      wasOpen = open;
      modal.setAttribute('aria-hidden', String(!open));
      if (open) { previousFocus = document.activeElement; close.focus(); }
      else previousFocus?.focus();
    });
    observer.observe(modal, { attributes: true, attributeFilter: ['class'] });
    document.querySelectorAll('.js-lightbox-image').forEach(image => {
      image.tabIndex = 0; image.setAttribute('role', 'button');
      image.setAttribute('aria-label', `Ampliar: ${image.alt}`);
      image.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); image.click(); }
      });
    });
    modal.addEventListener('keydown', event => {
      if (event.key === 'Tab') { event.preventDefault(); close.focus(); }
    });
  }
})();
