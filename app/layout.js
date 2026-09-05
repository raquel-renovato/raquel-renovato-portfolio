import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata = {
  title: 'Raquel Renovato — Designer de Comunicação Visual & UI/UX',
  description: 'Portfólio de Raquel Renovato, Designer de Comunicação Visual e UI/UX.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={jakarta.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
