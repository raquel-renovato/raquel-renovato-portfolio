const checklist = [
  'Design de Interfaces & Systems',
  'Domínio de Figma & Pacote Adobe',
  'Workflow Otimizado com IA Generativa & LLMs',
  'Foco em Usabilidade & Handoff',
];

export default function About() {
  return (
    <section id="sobre" className="bg-brand-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-brand-gold hidden sm:block" aria-hidden="true" />
          <div className="relative rounded-2xl overflow-hidden border border-brand-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://placehold.co/600x720/F4F4F2/14213D?text=Sobre+Mim"
              alt="Retrato de estúdio de Raquel Renovato"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">Sobre Mim</h2>
          <p className="text-brand-dark/60 leading-relaxed mb-8">
            Formada em Design Gráfico pela Estácio em dezembro de 2023 e com especialização em andamento em UI/UX Design, atuo como Designer de Comunicação Visual na Voit Consultoria. As minhas competências centrais incluem o desenvolvimento de interfaces visuais, a estruturação de arquitetura de informação e a criação de sistemas de design consistentes. Na Voit Consultoria, contribuo no planejamento e execução de projetos visuais focados em usabilidade, utilizando o ecossistema Adobe e Figma. Valorizo a inovação e a adoção de novas tecnologias, como a Inteligência Artificial, para otimizar processos e entregar soluções funcionais que tragam uma perspectiva estratégica e criativa para a equipe.
          </p>

          <ul className="space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-brand-dark">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10" fill="#FCA311" />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#14213D" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
