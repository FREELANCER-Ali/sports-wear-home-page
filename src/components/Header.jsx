import React from 'react';

export default function Header() {
  return (
    <header>
      <nav className="navbar" aria-label="Primary">
        <div className="container">
          <div className="navbar-header">
            <a href="#home" className="nav-logo-container">
              <img
                src="/images/logo/decaprio-logo-black.png"
                alt="Decaprio Fashion International Logo"
                className="main-logo"
                width="869"
                height="669"
                loading="eager"
              decoding="async" />
              <span className="logo-text">
                <span>DECAPRIO</span>
                <span>INTERNATIONAL</span>
              </span>
            </a>
          </div>

          <div className="header-actions">
            <a
              href="https://wa.me/923484967297"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-quote"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <i className="fab fa-whatsapp" style={{ fontSize: '1.1rem', color: '#25D366' }}></i>
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
