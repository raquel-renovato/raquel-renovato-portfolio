'use client';

import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-white/90 backdrop-blur border-b border-brand-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#top" className="text-lg md:text-xl font-bold tracking-tight text-brand-dark">
            Raquel <span className="text-brand-gold">Renovato</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-brand-dark/70">
            <a href="#top" className="underline-grow pb-1 hover:text-brand-dark transition-colors">Home</a>
            <a href="#sobre" className="underline-grow pb-1 hover:text-brand-dark transition-colors">Sobre</a>
            <a href="#portfolio" className="underline-grow pb-1 hover:text-brand-dark transition-colors">Projetos</a>
            <a href="#contato" className="inline-flex items-center rounded-full bg-brand-dark text-brand-white px-5 py-2 hover:bg-brand-gold hover:text-brand-dark transition-colors">
              Contato
            </a>
          </nav>

          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex flex-col justify-center gap-1.5 w-8 h-8"
          >
            <span className="sr-only">Abrir menu</span>
            <span className="block h-0.5 w-6 bg-brand-dark" />
            <span className="block h-0.5 w-6 bg-brand-dark" />
            <span className="block h-0.5 w-4 bg-brand-dark" />
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="md:hidden border-t border-brand-line bg-brand-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 text-sm text-brand-dark">
            <a href="#top" className="py-1" onClick={() => setOpen(false)}>Home</a>
            <a href="#sobre" className="py-1" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#portfolio" className="py-1" onClick={() => setOpen(false)}>Projetos</a>
            <a href="#contato" className="py-1" onClick={() => setOpen(false)}>Contato</a>
          </div>
        </nav>
      )}
    </header>
  );
}
