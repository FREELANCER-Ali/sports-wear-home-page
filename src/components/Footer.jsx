import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* Section 1: About */}
          <div className="footer-section footer-about">
            <div className="footer-logo-container" style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <img
                src="/images/logo/decaprio-logo-white.png"
                alt="Decaprio Fashion International Logo"
                className="footer-logo"
                width="869"
                height="669"
                loading="lazy"
              />
              <span className="footer-logo-text" style={{ fontSize: '1rem', fontWeight: '700', color: '#fff', lineHeight: '1.2' }}>
                <span>DECAPRIO</span>
                <br />
                <span style={{ fontSize: '0.72em', color: '#aaa', fontWeight: '400', letterSpacing: '0.05em' }}>FASHION INTERNATIONAL</span>
              </span>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Premium custom apparel manufacturing for global brands. Quality craftsmanship from Sialkot, Pakistan.
            </p>

            <div className="socials" style={{ display: 'flex', gap: '14px', marginTop: '16px' }}>
              <a
                href="https://www.facebook.com/decaprio.internatinal?mibextid=wwXIfr&mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/decapriointl?cplk=MWMwNmZqN2k2ZTJm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/923484967297"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Pakistan"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Section 2: Shipping Partners */}
          <div className="footer-section footer-partners">
            <h3>We Ship Via</h3>
            <div className="partner-logos">
              <img src="/images/partners/dhl-logo.png" alt="DHL Logo" width="278" height="52" loading="lazy" />
              <img src="/images/partners/fedex-logo.png" alt="FedEx Logo" width="271" height="87" loading="lazy" />
              <img src="/images/partners/ups-logo.png" alt="UPS Logo" width="204" height="112" loading="lazy" />
            </div>
          </div>

          {/* Section 3: Quick Links */}
          <div className="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home"><i className="fas fa-chevron-right"></i> Home</a></li>
              <li><a href="#factory"><i className="fas fa-chevron-right"></i> About Us</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> All Products</a></li>
              <li><a href="#process"><i className="fas fa-chevron-right"></i> How It Works</a></li>
              <li><a href="#capabilities"><i className="fas fa-chevron-right"></i> Our Services</a></li>
              <li><a href="#why-sialkot"><i className="fas fa-chevron-right"></i> Sialkot Factory</a></li>
              <li><a href="#quote"><i className="fas fa-chevron-right"></i> Contact Us</a></li>
            </ul>
          </div>

          {/* Section 4: Our Products */}
          <div className="footer-section footer-products">
            <h3>Our Products</h3>
            <ul>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> Hoodies</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> Tracksuits</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> Varsity Jackets</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> T-shirts</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> Custom Uniforms</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> Sportswear</a></li>
              <li><a href="#what-we-make"><i className="fas fa-chevron-right"></i> Streetwear</a></li>
            </ul>
          </div>

          {/* Section 5: Get In Touch */}
          <div className="footer-section footer-contact-info">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Street no.2 Eimanabad Rd, Rehman Pura,<br />Sialkot, 51310, Pakistan</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
              <p>
                <a href="https://wa.me/923484967297" target="_blank" rel="noopener noreferrer">
                  +92 348 4967297 (PK)
                </a>
              </p>
            </div>
            <div className="contact-item">
              <i className="fab fa-whatsapp" style={{ color: '#25D366' }}></i>
              <p>
                <a href="https://wa.me/971502188322" target="_blank" rel="noopener noreferrer">
                  +971 50 218 8322 (UAE)
                </a>
              </p>
            </div>
            <div className="contact-item">
              <i className="fas fa-clock"></i>
              <p>Mon - Sat: 9:00 AM - 6:00 PM PKT</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Decaprio Fashion International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
