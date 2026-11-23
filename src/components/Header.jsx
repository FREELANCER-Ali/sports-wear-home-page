import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary">
        <div className="container">
          <div className="navbar-header">
            <a href="#home" className="nav-logo-container" aria-label="Decaprio International">
              <img
                src="/images/logo/decaprio-logo-black.png"
                alt="Decaprio International Logo"
                className="main-logo"
                width="869"
                height="669"
                loading="eager"
                decoding="async"
              />
              <span className="logo-text">
                <span className="logo-title">DECAPRIO</span>
                <span className="logo-subtitle">INTERNATIONAL</span>
              </span>
            </a>
          </div>

          <div className="header-actions">
            <a
              href="mailto:Info.decapriointl@gmail.com"
              className="header-btn header-btn-email"
              title="Email Us: Info.decapriointl@gmail.com"
              aria-label="Send Email"
            >
              <i className="fas fa-envelope"></i>
              <span className="header-btn-text">Email</span>
            </a>
            <a
              href="https://wa.me/923484967297"
              target="_blank"
              rel="noopener noreferrer"
              className="header-btn header-btn-whatsapp"
              title="Chat on WhatsApp"
              aria-label="Chat on WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
              <span className="header-btn-text-wa">WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
