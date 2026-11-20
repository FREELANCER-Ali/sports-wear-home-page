import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Showroom from './components/Showroom';
import Capabilities from './components/Capabilities';
import Materials from './components/Materials';
import Process from './components/Process';
import FactoryInfo from './components/FactoryInfo';
import Testimonials from './components/Testimonials';
import WhyNovus from './components/WhyNovus';
import Faq from './components/Faq';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-wrapper" id="top">
      <Header />
      <main>
        <Hero />
        <Showroom />
        <Capabilities />
        <Materials />
        <Process />
        <FactoryInfo />
        <Testimonials />
        <WhyNovus />
        <Faq />
        <FinalCta />
      </main>
      <Footer />

      {/* Floating Dual WhatsApp Quick Contact Buttons */}
      <div className="floating-whatsapp-container" aria-label="WhatsApp Quick Contacts">
        <a
          href="https://wa.me/923484967297"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa-btn"
          title="Chat on WhatsApp (+92 348 4967297)"
        >
          <i className="fab fa-whatsapp"></i>
          <span>PK: +92 348 4967297</span>
        </a>
        <a
          href="https://wa.me/971502188322"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-wa-btn floating-wa-btn-alt"
          title="Chat on WhatsApp (+971 50 218 8322)"
        >
          <i className="fab fa-whatsapp"></i>
          <span>UAE: +971 50 218 8322</span>
        </a>
      </div>
    </div>
  );
}
