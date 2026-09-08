export default function Footer() {
  return (
    <footer id="contato" className="bg-brand-white border-t border-brand-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div>
          <p className="text-brand-dark text-lg font-bold mb-1">Raquel Renovato</p>
          <p className="text-brand-dark/60 text-sm mb-4">
            UI Design<br />
            Design Gráfico<br />
            Criação de Conteúdo<br />
            Redes Sociais
          </p>
          <p className="text-brand-dark/40 text-xs">© 2026 Raquel Renovato. Todos os direitos reservados.</p>
        </div>

        <div className="sm:text-right">
          <ul className="space-y-2 text-sm text-brand-dark/80">
            <li>
              <a href="mailto:raquel.renovato.design@gmail.com" className="underline-grow pb-1 hover:text-brand-gold transition-colors">
                raquel.renovato.design@gmail.com
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/raquel-renovato-b1269b14b/" target="_blank" rel="noopener noreferrer" className="underline-grow pb-1 hover:text-brand-gold transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/5562985666229" target="_blank" rel="noopener noreferrer" className="underline-grow pb-1 hover:text-brand-gold transition-colors">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
