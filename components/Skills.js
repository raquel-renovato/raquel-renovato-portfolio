const skillGroups = [
  {
    title: 'Figma',
    items: ['Auto Layout', 'Componentes', 'Prototipagem', 'Handoff'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="#FCA311" strokeWidth="1.4" />
        <rect x="8" y="12" width="8" height="8" rx="2" stroke="#FCA311" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'Pacote Adobe',
    items: ['Photoshop', 'Illustrator', 'InDesign'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#FCA311" strokeWidth="1.4" />
        <path d="M7 15l3-5 3 3 4-6" stroke="#FCA311" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'UI/UX & Design Systems',
    items: ['Grid', 'Arquitetura de Informação', 'Acessibilidade'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" stroke="#FCA311" strokeWidth="1.4" />
        <rect x="13" y="4" width="7" height="7" stroke="#FCA311" strokeWidth="1.4" />
        <rect x="4" y="13" width="7" height="7" stroke="#FCA311" strokeWidth="1.4" />
        <rect x="13" y="13" width="7" height="7" stroke="#FCA311" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'IA & Produtividade',
    items: ['IA Generativa', 'Prompt Engineering para UI', 'Microcopy com LLMs'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3z" stroke="#FCA311" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M18 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z" stroke="#FCA311" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Skills() {
  return (
    <section className="bg-brand-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 lg:py-24">

        <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight text-center mb-12 sm:mb-16">
          Habilidades & Ferramentas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-brand-light rounded-xl p-6 border border-brand-line">
              <div className="mb-4 w-11 h-11 rounded-full bg-brand-gold/15 flex items-center justify-center">
                {group.icon}
              </div>
              <h3 className="text-brand-dark font-bold mb-3">{group.title}</h3>
              <ul className="text-sm text-brand-dark/60 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
