import React, { useRef, useState } from 'react';

export default function Hero() {
  const stageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  const jacketTransform = isHovered
    ? `translate3d(${(mousePos.x * 22).toFixed(1)}px, ${(mousePos.y * 16).toFixed(1)}px, 0) scale(1.02)`
    : 'translate3d(0, 0, 0)';

  const embroideryTransform = isHovered
    ? `translate3d(${(mousePos.x * 38).toFixed(1)}px, ${(mousePos.y * 26).toFixed(1)}px, 0)`
    : 'translate3d(0, 0, 0)';

  const fabricTransform = isHovered
    ? `translate3d(${(mousePos.x * 50).toFixed(1)}px, ${(mousePos.y * 34).toFixed(1)}px, 0)`
    : 'translate3d(0, 0, 0)';

  const tagTransform = isHovered
    ? `translate3d(${(mousePos.x * 28).toFixed(1)}px, ${(mousePos.y * 18).toFixed(1)}px, 0)`
    : 'translate3d(0, 0, 0)';

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/images/manufacturing/sewing-floor-bg.webp"
          alt=""
          width="1200"
          height="799"
          loading="eager"
          fetchPriority="high"
        decoding="async" />
      </div>

      <div className="hero-veil" aria-hidden="true"></div>

      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              <span className="dot" aria-hidden="true"></span>
              CUT &amp; SEW MANUFACTURER &middot; SIALKOT, PAKISTAN
            </p>

            <h1>
              Clothing Manufacturer <span>in Pakistan</span>
            </h1>

            <p className="lead">
              Custom apparel for clothing brands worldwide &mdash; made from your tech pack,
              sketch or sample. Low, flexible MOQs for new brands.
            </p>

            <div className="cta-buttons">
              <a href="#quote" className="btn btn-primary btn-large">
                Request a Quote
              </a>
              <a href="#what-we-make" className="btn btn-ghost btn-large">
                See What We Make
              </a>
            </div>

            <ul className="hero-facts">
              <li>
                <strong>Low MOQs</strong>
                <span>Flexible for new brands</span>
              </li>
              <li>
                <strong>7&ndash;14 days</strong>
                <span>Typical sampling</span>
              </li>
              <li>
                <strong>Worldwide</strong>
                <span>DHL / FedEx / UPS</span>
              </li>
            </ul>
          </div>

          <div
            className="hero-stage"
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="hero-glow" aria-hidden="true"></div>

            <figure
              className="hero-product"
              style={{ transform: jacketTransform }}
            >
              <div className="hero-product-inner">
                <img
                  src="/images/products/jackets/varsity-jacket-cutout.webp"
                  alt="Navy varsity jacket with cream leather-look sleeves and raised chenille chest patch"
                  width="885"
                  height="979"
                  loading="eager"
                  fetchPriority="high"
                decoding="async" />
              </div>
            </figure>

            <figure
              className="hero-chip hero-chip--embroidery"
              style={{ transform: embroideryTransform }}
            >
              <div className="hero-chip-inner">
                <img
                  src="/images/products/jackets/details/jacket-chenille-patch.webp"
                  alt="Close-up of a raised chenille chest patch"
                  width="640"
                  height="640"
                  loading="eager"
                decoding="async" />
                <figcaption>Your logo, applied</figcaption>
              </div>
            </figure>

            <figure
              className="hero-chip hero-chip--fabric"
              style={{ transform: fabricTransform }}
            >
              <div className="hero-chip-inner">
                <img
                  src="/images/products/jackets/details/jacket-rib-collar.webp"
                  alt="Close-up of the striped knitted rib collar"
                  width="640"
                  height="640"
                  loading="lazy"
                decoding="async" />
                <figcaption>Knitted rib trims</figcaption>
              </div>
            </figure>

            <div
              className="hero-tag"
              style={{ transform: tagTransform }}
            >
              <strong>Private label</strong>
              <span>Your brand only</span>
            </div>
          </div>
        </div>
      </div>

      <a className="hero-scroll" href="#what-we-make" aria-label="Scroll to what we manufacture">
        <span aria-hidden="true"></span>
      </a>
    </section>
  );
}
