const projects = [
  {
    id: 'fernando-amaral',
    category: 'UI/UX & Prototipagem Responsiva',
    title: 'Landing Page — Fernando Amaral',
    description:
      'Concepção de interface web e mobile com foco em usabilidade, componentes interativos e estrutura responsiva no Figma.',
    tags: ['Figma', 'UI Design', 'Responsivo'],
    main: {
      src: '/img/img-fernando/fernando-cover1.png',
      alt: 'Mockup da landing page de Fernando Amaral em laptop',
    },
    thumbs: [
      { src: '/img/img-fernando/fernando-cover2.png', alt: 'Mockup da landing page de Fernando Amaral — variação 2' },
      { src: '/img/img-fernando/fernando-cover3.png', alt: 'Mockup da landing page de Fernando Amaral — variação 3' },
      { src: '/img/img-fernando/fernando-cover4.png', alt: 'Mockup da landing page de Fernando Amaral — variação 4' },
    ],
  },
  {
    id: 'voit-consultoria',
    category: 'Design Corporativo & Workflow com IA',
    title: 'Comunicação Visual & Design Corporativo — Voit Consultoria',
    description:
      'Planejamento de ecossistemas visuais para comunicação interna, e-books, apresentações e e-mail marketing. Aplicação de IA Generativa e LLMs para otimização de workflow e microcopy.',
    tags: ['Branding', 'Editorial', 'IA Generativa'],
    bento: [
      {
        label: 'Apresentação Estratégica',
        src: 'https://placehold.co/700x700/E5E5E5/14213D?text=Apresentação',
        alt: 'Apresentação estratégica criada para a Voit Consultoria',
        large: true,
      },
      {
        label: 'E-book',
        src: 'https://placehold.co/400x400/E5E5E5/14213D?text=E-book',
        alt: 'E-book criado para a Voit Consultoria',
      },
      {
        label: 'E-mail Marketing',
        src: 'https://placehold.co/400x400/E5E5E5/14213D?text=E-mail',
        alt: 'Peça de e-mail marketing criada para a Voit Consultoria',
      },
      {
        label: 'Redes Sociais',
        src: 'https://placehold.co/400x400/E5E5E5/14213D?text=Redes+Sociais',
        alt: 'Conteúdo de redes sociais criado para a Voit Consultoria',
      },
      {
        label: 'Vídeo',
        src: 'https://placehold.co/400x400/E5E5E5/14213D?text=Vídeo',
        alt: 'Vídeo institucional criado para a Voit Consultoria',
        video: true,
        href: '#',
      },
    ],
  },
  {
    id: 'renata-brandao',
    category: 'Data Visualization & Design de Informação',
    title: 'Apresentações Visuais — Renata Brandão',
    description:
      'Desenvolvimento de apresentações visuais focadas em transformar dados e conceitos complexos em interfaces simples, intuitivas e de fácil absorção.',
    tags: ['Data Viz', 'Apresentações', 'Infográficos'],
    main: {
      src: '/img/img-renata/renata-cover-2.png',
      alt: 'Slide de capa da apresentação de Renata Brandão',
    },
    thumbs: [
      { src: '/img/img-renata/renata-cover-3.png', alt: 'Slide da apresentação de Renata Brandão — variação 3' },
      { src: '/img/img-renata/renata-cover-4.png', alt: 'Slide da apresentação de Renata Brandão — variação 4' },
      { src: '/img/img-renata/renata-cover-1.png', alt: 'Slide da apresentação de Renata Brandão — variação 1' },
    ],
  },
  {
    id: 'braduca',
    category: 'Branding & Mídias Digitais',
    title: 'Conteúdo Visual & Redes Sociais — Braduca',
    description:
      'Criação de conteúdo visual para redes sociais garantindo consistência de identidade de marca com rigor técnico em composição, tipografia e cores.',
    tags: ['Social Media', 'Identidade', 'Tipografia'],
    main: {
      src: '/img/img-braduca/braduca-cover.png',
      alt: 'Mockup de posts e stories criados para a Braduca',
    },
    thumbs: [],
  },
  {
    id: 'aymee-ferraz',
    category: 'Branding & Mídias Digitais',
    title: 'Conteúdo Visual & Redes Sociais — Aymée Ferraz',
    description:
      'Criação de conteúdo visual para redes sociais garantindo consistência de identidade de marca com rigor técnico em composição, tipografia e cores.',
    tags: ['Social Media', 'Identidade', 'Tipografia'],
    main: {
      src: '/img/img-aymee/aymee-cover1.png',
      alt: 'Mockup principal de posts criados para Aymée Ferraz',
    },
    thumbs: [
      { src: '/img/img-aymee/aymee-cover2.png', alt: 'Mockup de posts criados para Aymée Ferraz — variação 2' },
      { src: '/img/img-aymee/aymee-cover3.png', alt: 'Mockup de posts criados para Aymée Ferraz — variação 3' },
      { src: '/img/img-aymee/aymee-cover4.png', alt: 'Mockup de posts criados para Aymée Ferraz — variação 4' },
    ],
  },
];

function ProjectText({ project, order }) {
  return (
    <div className={`lg:col-span-4 lg:sticky lg:top-24 ${order}`}>
      <span className="inline-block text-xs font-semibold text-brand-gold mb-3">{project.category}</span>
      <h3 className="text-brand-dark text-2xl font-extrabold tracking-tight mb-4">{project.title}</h3>
      <p className="text-brand-dark/60 text-sm leading-relaxed mb-5">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs border border-brand-line rounded-full px-3 py-1 text-brand-dark/70">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectGallery({ project, order }) {
  return (
    <div className={`lg:col-span-8 ${order}`}>
      <div className={`gallery-img rounded-xl border border-brand-line ${project.thumbs.length > 0 ? 'mb-3' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.main.src} alt={project.main.alt} className="w-full aspect-video object-cover" />
      </div>
      {project.thumbs.length > 0 && (
        <div className="grid grid-cols-3 gap-3">
          {project.thumbs.map((thumb) => (
            <div key={thumb.src} className="gallery-img rounded-lg border border-brand-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={thumb.src} alt={thumb.alt} className="w-full h-28 sm:h-32 object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BentoCard({ item, spanClass = '' }) {
  const inner = (
    <div className={`relative gallery-img rounded-xl border border-brand-line overflow-hidden h-40 sm:h-full ${spanClass}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />

      {item.video && (
        <div className="absolute inset-0 flex items-center justify-center bg-brand-dark/25">
          <span className="w-11 h-11 rounded-full bg-brand-white/90 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#14213D"><path d="M8 5v14l11-7z"/></svg>
          </span>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent p-3">
        <span className="text-brand-white text-xs font-semibold">{item.label}</span>
      </div>
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" className={spanClass}>
        {inner}
      </a>
    );
  }
  return inner;
}

function BentoGallery({ project, order }) {
  const large = project.bento.find((i) => i.large);
  const small = project.bento.filter((i) => !i.large);

  return (
    <div className={`lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-2 gap-3 ${order}`}>
      <BentoCard item={large} spanClass="sm:col-span-1 sm:row-span-2" />
      {small.map((item) => (
        <BentoCard key={item.label} item={item} />
      ))}
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-[#EBEBEB] border-t border-brand-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 lg:py-24">

        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Projetos em Destaque</h2>
          <p className="text-brand-dark/60 max-w-md mx-auto">Um panorama visual do processo, das telas e das aplicações de cada trabalho.</p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 1;
            const Gallery = project.bento ? BentoGallery : ProjectGallery;
            return (
              <article key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {imageFirst ? (
                  <>
                    <Gallery project={project} order="lg:order-1" />
                    <ProjectText project={project} order="lg:order-2" />
                  </>
                ) : (
                  <>
                    <ProjectText project={project} order="" />
                    <Gallery project={project} order="" />
                  </>
                )}
              </article>
            );
          })}
        </div>

        <div className="text-center mt-16 sm:mt-20">
          <a href="#" className="inline-flex items-center rounded-full border border-brand-dark text-brand-dark px-7 py-3 text-sm hover:bg-brand-dark hover:text-brand-white transition-colors">
            Ver Todos os Projetos
          </a>
        </div>
      </div>
    </section>
  );
}
