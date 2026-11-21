import React, { useState } from 'react';

const swatches = [
  {
    title: 'Cotton pique',
    spec: 'Polos · 220 GSM',
    img: "/images/materials/fabric-cotton-pique.webp",
    alt: 'Close-up of navy cotton pique knit showing waffle texture'
  },
  {
    title: 'Brushed fleece',
    spec: 'Hoodies · 320–400 GSM',
    img: "/images/materials/mat-fleece.webp",
    alt: 'Close-up of heavyweight brushed cotton fleece in heather grey'
  },
  {
    title: 'Performance knit',
    spec: 'Sportswear · moisture moving',
    img: "/images/materials/mat-performance.webp",
    alt: 'Close-up of matte navy technical performance polyester knit'
  },
  {
    title: 'Knitted rib',
    spec: 'Collars, cuffs, hems',
    img: "/images/materials/mat-rib.webp",
    alt: 'Close-up of navy and cream striped knitted rib trim'
  },
  {
    title: 'Embroidery',
    spec: 'Flat, 3D puff, chenille',
    img: "/images/materials/mat-embroidery.webp",
    alt: 'Extreme macro of dense satin-stitch embroidery'
  },
  {
    title: 'Printing',
    spec: 'Screen, DTG, DTF, sublimation',
    img: "/images/materials/mat-print-detail.webp",
    alt: 'Extreme macro of a screen-printed graphic edge on jersey'
  },
  {
    title: 'Labels',
    spec: 'Woven, printed, hem tabs',
    img: "/images/materials/mat-woven-label.webp",
    alt: 'Extreme macro of a folded woven care label in seam'
  },
  {
    title: 'Trims',
    spec: 'Zips, buttons, drawcords',
    img: "/images/materials/mat-zip-trim.webp",
    alt: 'Extreme macro of a metal zipper closed on navy garment'
  }
];

function SwatchCard({ sw }) {
  const [zoom, setZoom] = useState({ active: false, x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    setZoom({ active: true, x, y });
  };

  const handleMouseEnter = () => setZoom((prev) => ({ ...prev, active: true }));
  const handleMouseLeave = () => setZoom({ active: false, x: 50, y: 50 });

  return (
    <figure className="swatch">
      <div
        className={`swatch-zoom-frame ${zoom.active ? 'zoom-active' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={sw.img}
          alt={sw.alt}
          width="700"
          height="700"
          loading="lazy"
          style={{
            transformOrigin: `${zoom.x}% ${zoom.y}%`,
            transform: zoom.active ? 'scale(1.75)' : 'scale(1)'
          }}
        decoding="async" />
        <div className="swatch-zoom-badge" aria-hidden="true" title="Zoom to inspect">
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="11" y1="8" x2="11" y2="14"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
        </div>
      </div>
      <figcaption>
        <strong>{sw.title}</strong>
        <span>{sw.spec}</span>
      </figcaption>
    </figure>
  );
}

export default function Materials() {
  return (
    <section className="env env--deep section-padding" id="materials">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/backgrounds/bg-fabric-wall-bg.webp"
          alt=""
          width="1200"
          height="800"
          loading="lazy"
        decoding="async" />
      </div>

      <div className="container">
        <p className="section-label text-center">MATERIALS &amp; FINISHING</p>
        <h2 className="section-headline text-center">
          Fabric &amp; <span>Customisation</span>
        </h2>
        <p className="section-description">
          You choose the material, the weight and how your brand appears on it.
        </p>

        <div className="swatch-grid">
          {swatches.map((sw, idx) => (
            <SwatchCard sw={sw} key={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
