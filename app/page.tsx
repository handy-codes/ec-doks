// app/page.tsx
'use client';

import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import TrustedBy from './components/TrustedBy';
import BackgroundImageSection from './components/BackgroundImageSection';
import BackgroundVideoSection from './components/BackgroundVideoSection';
import Careers from './components/Careers';
import Footer from './components/Footer';

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const careersRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header scrollToSection={scrollToSection} aboutRef={aboutRef} servicesRef={servicesRef} careersRef={careersRef} />
      
      <main>
        <Hero />
        <About ref={aboutRef} />
        <Services ref={servicesRef} />
        <Products />
        <Testimonials />
        <TrustedBy />
        <BackgroundImageSection />
        <BackgroundVideoSection />
        <Careers ref={careersRef} />
      </main>

      <Footer />
    </div>
  );
}