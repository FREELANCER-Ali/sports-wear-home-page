import React from 'react';

const categories = [
  {
    name: 'Hoodies & Sweatshirts',
    note: 'Fleece and French terry, 320–400 GSM',
    image: "/images/products/hoodies/Novus-hoodies%20(2).webp",
    alt: 'Custom contrast panel hoodie in mid-weight performance fleece',
    isFeature: true
  },
  {
    name: 'Jackets',
    note: 'Varsity, bomber and coach jackets',
    image: "/images/products/jackets/Novus-jackets%20(1).webp",
    alt: 'Custom varsity jacket with contrast sleeves and chenille chest patch',
    isFeature: true
  },
  {
    name: 'T-Shirts & Polos',
    note: 'Pique polos, combed cotton tees',
    image: "/images/products/t-shirts-polos/Novus-tshirts%20(1).webp",
    alt: 'Navy pique polo shirt with contrast tipped collar and embroidered chest logo'
  },
  {
    name: 'Tracksuits',
    note: 'Tech fleece, velour, polyester',
    image: "/images/products/tracksuits/Novus-tracksuits%20(1).webp",
    alt: 'Custom performance tech fleece tracksuit jacket and jogger set'
  },
  {
    name: 'Sportswear',
    note: 'Sublimated jerseys and team kits',
    image: "/images/products/sportswear/Novus-sportswear%20(1).webp",
    alt: 'Custom sublimated cycling jersey manufactured for a sports brand'
  },
  {
    name: 'Streetwear',
    note: 'Cut & sew for fashion labels',
    image: "/images/products/streetwear/Novus-streetwear%20(1).webp",
    alt: 'Custom streetwear piece with cut and sew panelling for a fashion label'
  },
  {
    name: 'Uniforms & Workwear',
    note: 'Chef, hospitality and hi-vis',
    image: "/images/products/custom-uniforms/Novus-uniforms%20(1).webp",
    alt: 'White double-breasted chef jacket with embroidered chest logo'
  }
];

export default function Showroom() {
  return (
    <section className="env env--open section-padding" id="what-we-make">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/backgrounds/bg-showroom-bg.webp"
          alt=""
          width="1200"
          height="800"
          loading="lazy"
        decoding="async" />
      </div>

      <div className="container">
        <p className="section-label text-center">THE SHOWROOM</p>
        <h2 className="section-headline text-center">
          What We <span>Manufacture</span>
        </h2>
        <p className="section-description">
          Seven categories, every one cut &amp; sew to your own design.
        </p>

        <div className="showroom">
          {categories.map((cat, idx) => (
            <a
              key={idx}
              className={`shelf ${cat.isFeature ? 'shelf--feature' : ''}`}
              href="#quote"
            >
              <img
                src={cat.image}
                alt={cat.alt}
                width="1000"
                height="900"
                loading="lazy"
              decoding="async" />
              <span className="shelf-body">
                <span className="shelf-name">{cat.name}</span>
                <span className="shelf-note">{cat.note}</span>
                <span className="shelf-cta">Explore</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
