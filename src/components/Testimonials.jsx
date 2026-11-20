import React from 'react';

export default function Testimonials() {
  return (
    <section className="env env--deep section-padding" id="testimonials">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/manufacturing/qc-inspection-bg.jpg"
          alt=""
          width="1200"
          height="799"
          loading="lazy"
        />
      </div>

      <div className="container">
        <p className="section-label text-center">CLIENT FEEDBACK</p>
        <h2 className="section-headline text-center">
          What Brands <span>Tell Us</span>
        </h2>

        <div className="testimonial-grid">
          <blockquote className="testimonial">
            <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
            <header className="testimonial-head">
              <span className="testimonial-brand">AETHON Activewear</span>
              <span className="testimonial-role">Activewear brand &middot; verified client</span>
            </header>
            <p className="testimonial-lead">
              Reviewed their production run with us and highlighted:
            </p>
            <ul className="testimonial-points">
              <li>Overall construction quality</li>
              <li>Clean stitching and finishing</li>
              <li>Pattern accuracy and general fit</li>
              <li>Quality of the zips</li>
              <li>Garment assembly</li>
              <li>Overall workmanship</li>
            </ul>
          </blockquote>

          <blockquote className="testimonial">
            <span className="testimonial-mark" aria-hidden="true">&ldquo;</span>
            <header className="testimonial-head">
              <span className="testimonial-brand">Mike Jhones</span>
              <span className="testimonial-role">USA &middot; verified client</span>
            </header>
            <p className="testimonial-quote">
              Amazing ways to customize so you don&rsquo;t end up with Brand Stuff&nbsp;:) . Unique work &amp; quality are much better than others, as they keep the customers interest and the prices &amp; turn around awesome. Great Job A++++++
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
