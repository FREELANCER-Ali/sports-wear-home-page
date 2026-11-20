import React from 'react';

const faqs = [
  {
    q: 'What does Decaprio International manufacture?',
    a: 'We are a cut & sew clothing manufacturer in Sialkot, Pakistan, producing hoodies and sweatshirts, tracksuits, sportswear, t-shirts and polos, jackets, streetwear and uniforms — all made to your own pattern and branding rather than rebranded blanks.'
  },
  {
    q: 'What is your minimum order quantity?',
    a: 'Our MOQs are low and flexible rather than a single fixed number — they depend on the garment, the fabric and the decoration involved. Tell us what you want to make and roughly how many, and we will confirm the MOQ for that specification.'
  },
  {
    q: 'Do you work with new clothing brands?',
    a: 'Yes. A large part of what we do is first production runs for new labels, which is why we keep MOQs flexible and always sample before bulk.'
  },
  {
    q: 'Do you provide samples before bulk production?',
    a: 'Always. A physical sample is made and sent for your approval, typically in 7–14 days, and bulk production does not start until you approve it.'
  },
  {
    q: 'How long does bulk production take?',
    a: 'Bulk timelines depend on the quantity and the specification, so we confirm a schedule with you once the sample is approved rather than quoting a fixed number of weeks up front.'
  },
  {
    q: 'Can you manufacture from a tech pack or a physical sample?',
    a: 'Both. A tech pack with measurements, fabric details and artwork is the fastest route to an accurate sample, but you can also send a garment you want matched, or a sketch with measurements.'
  },
  {
    q: 'Do you offer private-label manufacturing?',
    a: 'Yes. Neck labels, care labels, hang tags and packaging all carry your brand. Nothing that reaches your customer carries ours.'
  },
  {
    q: 'Why manufacture clothing in Sialkot rather than elsewhere in Pakistan?',
    a: 'Sialkot is an established export manufacturing city with knitting, dyeing, embroidery and printing all available locally, so sample revisions take days rather than weeks. Pakistan is also a major cotton producer, which removes an import step for knitwear.'
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, worldwide by courier — DHL, FedEx and UPS — with export documentation. We are an FBR-registered business, a Sialkot Chamber of Commerce & Industry member and TDAP registered.'
  }
];

export default function Faq() {
  return (
    <section className="env env--deep section-padding" id="faq">
      <div className="env-bg" aria-hidden="true">
        <img
          src="/images/backgrounds/bg-fabric-wall-bg.jpg"
          alt=""
          width="1200"
          height="800"
          loading="lazy"
        />
      </div>

      <div className="container">
        <p className="section-label text-center">QUESTIONS</p>
        <h2 className="section-headline text-center">
          Working With a <span>Clothing Manufacturer in Pakistan</span>
        </h2>

        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={i} open={i === 0}>
              <summary>
                <h3>{f.q}</h3>
              </summary>
              <div className="faq-answer">
                <p>{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
