import React, { useState, useEffect, useRef } from 'react';

const steps = [
  {
    idx: '01 — BRIEF',
    title: 'Tell us your idea',
    desc: 'Send a tech pack, a sketch or a garment you want matched, with a rough quantity.',
    img: '/images/journey/job-brief.jpg',
    alt: 'A tech pack, fabric swatch cards and colour reference'
  },
  {
    idx: '02 — FABRIC',
    title: 'Fabric & development',
    desc: 'Composition, GSM and construction confirmed, then the pattern is made and cut.',
    img: '/images/journey/job-fabric-inspection.jpg',
    alt: 'A roll of navy knit fabric being inspected'
  },
  {
    idx: '03 — SAMPLE',
    title: 'Sample & approval',
    desc: 'A physical sample with your branding — typically 7–14 days. Bulk starts only once you approve it.',
    img: '/images/services/svc-sampling.jpg',
    alt: 'A printed tech pack beside a sample garment'
  },
  {
    idx: '04 — PRODUCTION',
    title: 'Production',
    desc: 'Cut and sewn against the approved sample. Timelines depend on quantity and specification.',
    img: '/images/manufacturing/operator-sewing.jpg',
    alt: 'Navy jersey fabric under an industrial sewing machine'
  },
  {
    idx: '05 — QUALITY',
    title: 'Quality control',
    desc: 'Measurements, seams, branding position and colour checked against your approved sample.',
    img: '/images/manufacturing/qc-inspection.jpg',
    alt: 'A finished polo measured flat against spec sheet'
  },
  {
    idx: '06 — SHIPPING',
    title: 'Packing & shipping',
    desc: 'Labelled, tagged, packed to your instructions and shipped worldwide with export documents.',
    img: '/images/journey/job-folding.jpg',
    alt: 'Finished polo shirts folded and stacked for packing'
  }
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const stageRefs = useRef([]);
  const journeyRef = useRef(null);

  useEffect(() => {
    let pending = false;

    const pickActiveStage = () => {
      pending = false;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;

      stageRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs((rect.top + rect.height / 2) - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActiveStep(best);
    };

    const handleScroll = () => {
      if (!pending) {
        pending = true;
        requestAnimationFrame(pickActiveStage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    pickActiveStage();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="env section-padding" id="process" ref={journeyRef}>
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/manufacturing/cutting-table-bg.jpg"
          alt=""
          width="1200"
          height="799"
          loading="lazy"
        />
      </div>

      <div className="container">
        <p className="section-label text-center">THE PROCESS</p>
        <h2 className="section-headline text-center">
          How Your Order <span>Runs</span>
        </h2>
        <p className="section-description">
          Six stages. Nothing goes to bulk until you approve a physical sample.
        </p>

        <div className="journey" data-journey>
          <div className="journey-grid">
            <div className="journey-media journey-visual" aria-hidden="true">
              {steps.map((st, i) => (
                <div
                  className={`journey-frame ${activeStep === i ? 'is-active' : ''}`}
                  key={i}
                >
                  <img
                    src={st.img}
                    alt=""
                    width="900"
                    height="600"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            <div className="journey-stages">
              {steps.map((st, i) => (
                <article
                  className={`journey-stage ${activeStep === i ? 'is-active' : ''}`}
                  key={i}
                  ref={(el) => (stageRefs.current[i] = el)}
                  onClick={() => setActiveStep(i)}
                >
                  <figure className="stage-media">
                    <img
                      src={st.img}
                      alt={st.alt}
                      width="900"
                      height="600"
                      loading="lazy"
                    />
                  </figure>
                  <span className="stage-index">{st.idx}</span>
                  <h3>{st.title}</h3>
                  <p>{st.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: '54px' }}>
          <a href="#quote" className="btn btn-primary btn-large">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
