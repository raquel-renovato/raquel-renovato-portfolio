const checklist = [
  'Design de Interfaces',
  'Domínio de Figma & Pacote Adobe',
  'Workflow Otimizado com IA Generativa & LLMs',
  'Canva',
];

export default function About() {
  return (
    <section id="sobre" className="bg-brand-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 lg:py-24">

        <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight mb-6 text-center">Sobre Mim</h2>
        <p className="text-brand-dark/60 leading-relaxed mb-8 max-w-3xl mx-auto text-justify">
          Designer Gráfica formada pela Estácio, especialização em andamento na área de UI/UX Design e com 3 anos de atuação no mercado. Atuo de forma completa no desenvolvimento de interfaces visuais, arquitetura de informação, design on e off-line e gestão de redes sociais. Tenho experiência na criação de conteúdo, e-mail marketing, fluxos de nutrição no Leadlovers, e-books e ações de endomarketing, além da produção de apresentações e treinamentos. Domínio do Figma, Pacote Adobe e uso prático de IA Generativa para otimização de workflow.
        </p>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {checklist.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-brand-dark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <circle cx="12" cy="12" r="10" fill="#FCA311" />
                <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#14213D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
