import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatIDo />
      <About />
      <Portfolio />
      <Skills />
      <CtaBanner />
      <Footer />
    </>
  );
}
