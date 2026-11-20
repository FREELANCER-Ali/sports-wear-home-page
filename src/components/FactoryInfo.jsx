import React from 'react';

export default function FactoryInfo() {
  return (
    <section className="env env--open section-padding" id="factory">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/manufacturing/sewing-floor-bg.jpg"
          alt=""
          width="1200"
          height="799"
          loading="lazy"
        />
      </div>

      <div className="container">
        <div className="split-feature">
          <figure className="split-feature-image">
            <img
              src="/images/services/svc-cut-sew.jpg"
              alt="Fabric spreading and cutting tables in factory"
              width="900"
              height="600"
              loading="lazy"
            />
          </figure>

          <div className="split-feature-text">
            <h2 className="section-headline">
              Built Around <span>Your Specification</span>
            </h2>

            <p>
              A medium-scale cut &amp; sew factory in Sialkot, set up to handle varied order
              sizes rather than one fixed volume &mdash; which is why we take on new brands
              as well as repeat runs.
            </p>

            <ul className="capability-list capability-list--compact">
              <li>
                <strong>Low, flexible MOQs</strong> &mdash; we work with new brands and support sampling
              </li>
              <li>
                <strong>Sampling in 7&ndash;14 days</strong> &mdash; typical first-sample turnaround
              </li>
              <li>
                <strong>Varied order sizes</strong> &mdash; medium-scale setup, not a single run length
              </li>
              <li>
                <strong>Made to your pattern</strong> &mdash; cut &amp; sew, never rebranded blanks
              </li>
              <li>
                <strong>Registered exporter</strong> &mdash; FBR, Sialkot Chamber of Commerce, TDAP
              </li>
            </ul>

            <p>
              <a href="#quote" className="btn btn-ghost">
                About our Sialkot factory
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
