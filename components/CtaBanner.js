export default function CtaBanner() {
  return (
    <section className="bg-brand-gold">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 sm:py-20 text-center">
        <h2 className="text-brand-dark text-3xl sm:text-4xl font-extrabold tracking-tight max-w-xl mx-auto mb-4">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-brand-dark/70 max-w-md mx-auto mb-8">
          Entre em contato para conversarmos sobre novos projetos e parcerias.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          
            href="https://wa.me/5562985666229"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-brand-dark text-brand-white font-semibold px-6 py-3 text-sm hover:opacity-90 transition"
          >
            Falar no WhatsApp
          </a>
          
            href="mailto:raquel.renovato.design@gmail.com"
            className="inline-flex items-center rounded-full border border-brand-dark text-brand-dark px-6 py-3 text-sm hover:bg-brand-dark hover:text-brand-white transition-colors"
          >
            Enviar E-mail
          </a>
        </div>
      </div>
    </section>
  );
}
