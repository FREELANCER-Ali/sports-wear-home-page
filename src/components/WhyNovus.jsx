import React from 'react';

export default function WhyNovus() {
  return (
    <section className="env section-padding" id="why-sialkot">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/services/svc-fabric-sourcing-bg.jpg"
          alt=""
          width="900"
          height="600"
          loading="lazy"
        />
      </div>

      <div className="container">
        <p className="section-label text-center">WHY DECAPRIO</p>
        <h2 className="section-headline text-center">
          Why Manufacture <span>in Sialkot</span>
        </h2>

        <div className="spec-grid spec-grid--tight">
          <div className="spec-item">
            <h3>Cotton at source</h3>
            <p>
              Pakistan is a major cotton producer &mdash; for knitwear that removes a step other countries import.
            </p>
          </div>

          <div className="spec-item">
            <h3>Trades in one city</h3>
            <p>
              Knitting, dyeing, embroidery and printing all sit locally in Sialkot, so revisions take days.
            </p>
          </div>

          <div className="spec-item">
            <h3>Registered exporter</h3>
            <p>
              FBR registered, Sialkot Chamber of Commerce &amp; Industry member.
            </p>
          </div>

          <div className="spec-item">
            <h3>Your brand only</h3>
            <p>
              Private-label production &mdash; labels, hang tags and packaging carry your name.
            </p>
          </div>
        </div>

        <ul className="registrations">
          <li className="registration">
            <span className="registration-plate">
              <img
                src="/images/certifications/fbr-logo.png"
                alt="Federal Board of Revenue Pakistan logo"
                width="250"
                height="250"
                loading="lazy"
              />
            </span>
            <span className="registration-name">Federal Board of Revenue</span>
            <span className="registration-status">Registered business</span>
          </li>

          <li className="registration">
            <span className="registration-plate">
              <img
                src="/images/certifications/scci-logo.png"
                alt="Sialkot Chamber of Commerce and Industry logo"
                width="250"
                height="250"
                loading="lazy"
              />
            </span>
            <span className="registration-name">Sialkot Chamber of Commerce &amp; Industry</span>
            <span className="registration-status">Member</span>
          </li>
        </ul>

        <p className="swatch-note text-center">
          Business registrations and memberships &mdash; not product or compliance certifications.
        </p>
      </div>
    </section>
  );
}
