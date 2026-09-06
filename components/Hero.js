export default function Hero() {
  return (
    <section id="top" className="bg-brand-white">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          <div>
            <h1 className="text-left text-brand-dark text-3xl sm:text-4xl lg:text-5xl leading-[1.15] font-extrabold tracking-tight max-w-xl mb-8">
              UI Design
              <br />
              Design Gráfico
              <br />
              Criação de Conteúdo
              <br />
              Redes Sociais
            </h1>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#portfolio" className="inline-flex items-center rounded-full bg-brand-gold text-brand-dark font-semibold px-6 py-3 text-sm hover:brightness-95 transition">
                Ver Projetos
              </a>
              <a href="#contato" className="inline-flex items-center rounded-full border border-brand-dark text-brand-dark px-6 py-3 text-sm hover:bg-brand-dark hover:text-brand-white transition-colors">
                Entre em Contato
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl border-4 border-brand-gold overflow-hidden bg-brand-light">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/img-perfil/foto-perfil.jpeg"
                alt="Foto de perfil de Raquel Renovato"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
