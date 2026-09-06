
const skillGroups = [
  {
    title: 'UI/UX Design',
    items: ['Figma (Auto Layout e Componentes)', 'Prototipagem Interativa', 'Arquitetura de Informação', 'Layout Responsivo'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 20h9" stroke="#FCA311" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" stroke="#FCA311" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Design Gráfico & Editorial',
    items: ['Photoshop, Illustrator e InDesign', 'After Effects e Canva', 'Design On e Off-line', 'Diagramação de E-books e Apresentações'],
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#FCA311" strokeWidth="1.4" />
        <path d="M7 15l3-5 3 3 4-6" stroke="#FCA311" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Social Media & Growth',
    items: ['Gestão de Redes e Meta Business', 'Edição de Vídeo no CapCut', 'Copywriting e Redação de Conteúdo', 'Leadlovers, E-mail Mkt e Endomarketing'],
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
    items: ['IA Generativa no Workflow', 'Otimização de Processos Criativos', 'Refinamento de Microcopy', 'Automação e Eficiência'],
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
              <ul className="text-sm text-brand-dark/60 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-gold shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
