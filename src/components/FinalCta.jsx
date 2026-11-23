import React from 'react';

export default function FinalCta() {
  return (
    <section className="env env--open section-padding cta-close" id="quote">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/manufacturing/packed-cartons-bg.webp"
          alt=""
          width="1200"
          height="799"
          loading="lazy"
        decoding="async" />
      </div>

      <div className="container text-center">
        <div className="cta-panel">
          <h2 className="section-headline">
            Have a Clothing Project? <span>Let's Discuss It.</span>
          </h2>

          <p className="section-description">
            Send a tech pack, a sketch or a reference garment with a rough quantity. Reach us directly on WhatsApp.
          </p>

          <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/923484967297"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
              <span>WhatsApp +92 348 4967297</span>
            </a>
            <a
              href="https://wa.me/971502188322"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem', color: '#25D366' }}></i>
              <span>WhatsApp +971 50 218 8322</span>
            </a>
            <a
              href="mailto:Info.decapriointl@gmail.com"
              className="btn btn-ghost btn-large"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fas fa-envelope" style={{ fontSize: '1.1rem', color: '#4C82F7' }}></i>
              <span>Email Us</span>
            </a>
          </div>

          <div style={{ marginTop: '26px', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <a
              href="mailto:Info.decapriointl@gmail.com"
              style={{ color: '#cfe0ff', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
            >
              <i className="fas fa-envelope" style={{ color: '#4C82F7', fontSize: '1.1rem' }}></i> Info.decapriointl@gmail.com
            </a>
            <a
              href="https://www.tiktok.com/@decapriointernational?_r=1&_t=ZS-9Be7cKrV39Y"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#cfe0ff', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
            >
              <i className="fab fa-tiktok" style={{ color: '#ffffff', fontSize: '1.1rem' }}></i> TikTok
            </a>
            <a
              href="https://www.facebook.com/decaprio.internatinal?mibextid=wwXIfr&mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#cfe0ff', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
            >
              <i className="fab fa-facebook" style={{ color: '#7FA9FF', fontSize: '1.1rem' }}></i> Facebook
            </a>
            <a
              href="https://www.instagram.com/decapriointl?cplk=MWMwNmZqN2k2ZTJm"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#cfe0ff', display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}
            >
              <i className="fab fa-instagram" style={{ color: '#E1306C', fontSize: '1.1rem' }}></i> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
