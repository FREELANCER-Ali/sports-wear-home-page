import React from 'react';

const capabilities = [
  {
    title: 'Cut & Sew',
    desc: 'Made to your pattern, never blanks',
    img: '/images/services/svc-cut-sew.jpg',
    alt: 'Fabric spreading and cutting tables in a garment factory'
  },
  {
    title: 'Private Label',
    desc: 'Only your brand on the finished piece',
    img: '/images/services/svc-private-label.jpg',
    alt: 'A woven brand label positioned at the inside back neck'
  },
  {
    title: 'Embroidery',
    desc: 'Flat, 3D puff and chenille',
    img: '/images/manufacturing/embroidery-machine.jpg',
    alt: 'Multi-head industrial embroidery machine stitching a monogram'
  },
  {
    title: 'Printing',
    desc: 'Screen, DTG, DTF, sublimation',
    img: '/images/services/svc-printing.jpg',
    alt: 'Screen printing carousel with a squeegee pulling ink'
  },
  {
    title: 'Fabric Sourcing',
    desc: 'Cotton, fleece, pique, twill, technical',
    img: '/images/services/svc-fabric-sourcing.jpg',
    alt: 'Fabric store room with shelving racks holding rolls'
  },
  {
    title: 'Labels & Trims',
    desc: 'Woven, printed, tags, buttons, zips',
    img: '/images/services/svc-labels-trims.jpg',
    alt: 'Tray of garment trims including zips and branded buttons'
  },
  {
    title: 'Sampling',
    desc: 'Physical sample first — 7–14 days',
    img: '/images/services/svc-sampling.jpg',
    alt: 'A printed garment tech pack beside a folded sample polo'
  },
  {
    title: 'Packing & Export',
    desc: 'Polybagged, tagged, shipped worldwide',
    img: '/images/manufacturing/packed-cartons.jpg',
    alt: 'Folded garments in clear polybags being packed into cartons'
  }
];

export default function Capabilities() {
  return (
    <section className="env section-padding" id="capabilities">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/manufacturing/embroidery-machine-bg.jpg"
          alt=""
          width="1200"
          height="799"
          loading="lazy"
        />
      </div>

      <div className="container">
        <p className="section-label text-center">CAPABILITIES</p>
        <h2 className="section-headline text-center">
          What We Can Do <span>For Your Brand</span>
        </h2>
        <p className="section-description">From pattern to packed carton.</p>

        <div className="cap-grid">
          {capabilities.map((item, idx) => (
            <div className="cap-card" key={idx}>
              <img
                src={item.img}
                alt={item.alt}
                width="900"
                height="600"
                loading="lazy"
              />
              <span className="cap-body">
                <strong>{item.title}</strong>
                <em>{item.desc}</em>
              </span>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '40px' }}>
          <a href="#quote" className="btn btn-ghost btn-large">
            See all manufacturing services
          </a>
        </div>
      </div>
    </section>
  );
}
