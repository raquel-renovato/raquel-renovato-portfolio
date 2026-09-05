export default function CtaBanner() {
  return (
    <section className="bg-brand-gold">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 text-center">
        <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight max-w-xl mx-auto mb-8">
          Tem um projeto em mente? Vamos construir algo incrível juntos.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#contato" className="inline-flex items-center rounded-full bg-brand-dark text-brand-white font-semibold px-6 py-3 text-sm hover:opacity-90 transition">
            Iniciar Conversa
          </a>
          <a href="#portfolio" className="inline-flex items-center rounded-full border border-brand-dark text-brand-dark px-6 py-3 text-sm hover:bg-brand-dark hover:text-brand-white transition-colors">
            Ver Projetos
          </a>
        </div>
      </div>
    </section>
  );
}
