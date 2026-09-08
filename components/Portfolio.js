'use client';

import { useState, useEffect } from 'react';

const projects = [
  {
    id: 'fernando-amaral',
    category: 'UI/UX & Web Design',
    title: 'Redesign de Landing Page & UI Design — Fernando Amaral',
    description:
      'Design de interface e prototipagem no Figma para a landing page do Fernando Amaral. Organização da hierarquia e ordem das informações, redefinição da paleta de cores e atualização do layout, além de pequenas revisões de texto e inclusão de seção de logos. Construção de microinterações, como variantes de hover, estados de botões e animações de scroll.',
    tags: ['Figma', 'UI/UX Design', 'Redesign', 'Prototipagem Interativa', 'Landing Page', 'Redesign Visual', 'Componentização'],
    links: [
      { label: 'Ver Site Original (Antes)', url: 'https://fernando-amaral-website-web.vercel.app/' },
      { label: 'Ver Protótipo', url: 'https://www.figma.com/proto/njp56nlWmMz3M1iEDbTPQH/FA?node-id=2026-1912&p=f&t=Lz7Rns0SJLBiFZ9N-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2026%3A1912' },
    ],
    main: { src: '/img/img-fernando/fernando-cover1.png', alt: 'Mockup da landing page de Fernando Amaral em laptop' },
    thumbs: [
      { src: '/img/img-fernando/fernando-cover2.png', alt: 'Mockup da landing page de Fernando Amaral — variação 2' },
      { src: '/img/img-fernando/fernando-cover3.png', alt: 'Mockup da landing page de Fernando Amaral — variação 3' },
      { src: '/img/img-fernando/fernando-cover4.png', alt: 'Mockup da landing page de Fernando Amaral — variação 4' },
    ],
  },
  {
    id: 'voit-consultoria',
    category: 'Design Corporativo & Workflow com IA',
    title: 'Social Media, Copywriting & Design — Voit Consultoria',
    description:
      'Atuação no gerenciamento de redes sociais, criativos ads, endomarketing, criação de conteúdo e produção gráfica/audiovisual. Concepção ponta a ponta de e-books, e-mail marketing, apresentações e edição de vídeos no CapCut, do roteiro ao layout final, utilizando IA Generativa para otimização de workflow e copywriting.',
    tags: ['Figma', 'Pacote Adobe', 'Canva', 'Leadlovers', 'Fluxo de Nutrição de Lead', 'Meta Business', 'CapCut', 'Copywriting', 'Endomarketing', 'IA Generativa'],
    main: { src: '/img/img-voit/voit-cover1.png', alt: 'Apresentação estratégica criada para a Voit Consultoria' },
    thumbs: [
      { src: '/img/img-voit/voit-cover2.png', alt: 'Mockup de redes sociais criado para a Voit Consultoria' },
      { src: '/img/img-voit/ads-cover.png', alt: 'Anúncios criados para a Voit Consultoria' },
      { src: '/img/img-voit/emailmkt-cover.png', alt: 'Peça de e-mail marketing criada para a Voit Consultoria' },
      { src: '/img/img-voit/Blog-cover.png', alt: 'Conteúdo de blog criado para a Voit Consultoria' },
    ],
  },
  {
    id: 'renata-brandao',
    category: 'Design de Apresentações',
    title: 'Apresentações & Treinamentos — Renata Brandão',
    description:
      'Criação do conteúdo e design de apresentações e materiais de treinamento no Canva. Transformação de relatórios, dados e conteúdos educativos em slides visuais, claros e fáceis de entender, do texto ao layout final, com design e diagramação completa dos slides.',
    tags: ['Canva', 'Apresentações', 'Treinamentos', 'Redação de Conteúdo', 'Copywriting'],
    links: [
      { label: 'Plano de Ação Comercial', url: 'https://canva.link/oraetd67you9twt' },
      { label: 'Plano de Ação Comercial CSM Engenharia e Mondale', url: 'https://canva.link/9xoddk5skl13bli' },
      { label: 'Excelência no Atendimento ao Cliente', url: 'https://canva.link/6nlcfzmktr1o4ha' },
      { label: 'Plano Estratégico de Aceleração Comercial', url: 'https://canva.link/w874gu7mhg7053v' },
    ],
    main: { src: '/img/img-renata/renata-cover-2.png', alt: 'Slide de capa da apresentação de Renata Brandão' },
    thumbs: [
      { src: '/img/img-renata/renata-cover-3.png', alt: 'Slide da apresentação de Renata Brandão — variação 3' },
      { src: '/img/img-renata/renata-cover-4.png', alt: 'Slide da apresentação de Renata Brandão — variação 4' },
      { src: '/img/img-renata/renata-cover-1.png', alt: 'Slide da apresentação de Renata Brandão — variação 1' },
    ],
  },
  {
    id: 'braduca',
    category: 'Design para Redes Sociais',
    title: 'Social Media & Design — Somos Braduca',
    description:
      'Criação e diagramação de posts para publicação nas redes sociais, mantendo a consistência, o padrão visual e o alinhamento com a identidade de marca da Somos Braduca.',
    tags: ['Social Media', 'Design Gráfico', 'Identidade Visual', 'Canva', 'Pacote Adobe'],
    links: [
      { label: 'Ver Mais Posts (Drive)', url: 'https://drive.google.com/drive/folders/1UGHgxQYGRF5Jm8FvuKA3PhTgJzOsztb4?usp=sharing' },
    ],
    main: { src: '/img/img-braduca/braduca-cover.png', alt: 'Mockup de posts e stories criados para a Braduca' },
    thumbs: [],
  },
  {
    id: 'aymee-ferraz',
    category: 'Design para Redes Sociais',
    title: 'Social Media & Design — Aymée',
    description:
      'Criação e diagramação de posts para publicação nas redes sociais, mantendo a consistência, o padrão visual e o alinhamento com a identidade de marca da Aymée.',
    tags: ['Social Media', 'Design Gráfico', 'Pacote Adobe'],
    main: { src: '/img/img-aymee/aymee-cover1.png', alt: 'Mockup principal de posts criados para Aymée Ferraz' },
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
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs border border-brand-line rounded-full px-3 py-1 text-brand-dark/70">{tag}</span>
        ))}
      </div>
      {project.links && project.links.length > 0 ? (
        <ul className="space-y-2">
          {project.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-dark underline-grow pb-1">
                {link.label}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

const THUMB_COLS = { 3: 'sm:grid-cols-3', 4: 'sm:grid-cols-4' };

function ProjectGallery({ project, order, onImageClick }) {
  const colsClass = THUMB_COLS[project.thumbs.length] || 'sm:grid-cols-3';
  return (
    <div className={`lg:col-span-8 ${order}`}>
      <div className={`gallery-img rounded-xl border border-brand-line cursor-zoom-in ${project.thumbs.length > 0 ? 'mb-3' : ''}`}>
        <button type="button" onClick={() => onImageClick(project.main)} className="block w-full">
          <img src={project.main.src} alt={project.main.alt} className="w-full aspect-video object-cover" />
        </button>
      </div>
      {project.thumbs.length > 0 ? (
        <div className={`grid grid-cols-2 ${colsClass} gap-3`}>
          {project.thumbs.map((thumb) => (
            <div key={thumb.src} className="gallery-img rounded-lg border border-brand-line cursor-zoom-in">
              <button type="button" onClick={() => onImageClick(thumb)} className="block w-full">
                <img src={thumb.src} alt={thumb.alt} className="w-full h-28 sm:h-32 object-cover" />
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-brand-dark/90 flex items-center justify-center p-4 sm:p-8" onClick={onClose}>
      <button type="button" onClick={onClose} aria-label="Fechar" className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-brand-white/10 hover:bg-brand-white/20 flex items-center justify-center text-brand-white transition-colors">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image.src} alt={image.alt} onClick={(e) => e.stopPropagation()} className="max-w-full max-h-full object-contain rounded-lg" />
    </div>
  );
}

export default function Portfolio() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="portfolio" className="bg-[#F5F5F5] border-t border-brand-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">Projetos em Destaque</h2>
          <p className="text-brand-dark/60 max-w-md mx-auto">Um panorama visual do processo, das telas e das aplicações de cada trabalho.</p>
        </div>
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => {
            const imageFirst = index % 2 === 1;
            return (
              <article key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                {imageFirst ? (
                  <>
                    <ProjectGallery project={project} order="lg:order-1" onImageClick={setActiveImage} />
                    <ProjectText project={project} order="lg:order-2" />
                  </>
                ) : (
                  <>
                    <ProjectText project={project} order="" />
                    <ProjectGallery project={project} order="" onImageClick={setActiveImage} />
                  </>
                )}
              </article>
            );
          })}
        </div>
        <div className="text-center mt-16 sm:mt-20">
          <a href="https://canva.link/wlgd6sqdircm6pj" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-brand-dark text-brand-dark px-7 py-3 text-sm hover:bg-brand-dark hover:text-brand-white transition-colors">
            Ver Todos os Projetos
          </a>
        </div>
      </div>

      <Lightbox image={activeImage} onClose={() => setActiveImage(null)} />
    </section>
  );
}
