export default function WhatIDo() {
  return (
    <section className="bg-brand-light">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 lg:py-24">

        <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-12 sm:mb-16">
          O que eu faço
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-brand-white rounded-xl border border-brand-line p-7 sm:p-8">
            <div className="mb-5 w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="4" width="18" height="13" rx="1.5" stroke="#FCA311" strokeWidth="1.4" />
                <path d="M9 20h6M12 17v3" stroke="#FCA311" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-brand-dark text-lg font-bold mb-3">UI/UX & Prototipagem</h3>
            <p className="text-brand-dark/60 text-sm leading-relaxed">Figma, Design Systems, Layouts Responsivos e Mobile-First.</p>
          </div>

          <div className="bg-brand-white rounded-xl border border-brand-line p-7 sm:p-8">
            <div className="mb-5 w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="#FCA311" strokeWidth="1.4" />
                <path d="M8 8h8M8 12h8M8 16h5" stroke="#FCA311" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-brand-dark text-lg font-bold mb-3">Comunicação Visual Corporativa</h3>
            <p className="text-brand-dark/60 text-sm leading-relaxed">Ecossistemas visuais internos, e-books, e-mail marketing.</p>
          </div>

          <div className="bg-brand-white rounded-xl border border-brand-line p-7 sm:p-8 sm:col-span-2 lg:col-span-1">
            <div className="mb-5 w-12 h-12 rounded-full bg-brand-gold/15 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path d="M4 20V10M11 20V4M18 20v-7" stroke="#FCA311" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-brand-dark text-lg font-bold mb-3">Data Visualization & Conteúdo</h3>
            <p className="text-brand-dark/60 text-sm leading-relaxed">Apresentações estratégicas e mídias sociais.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
