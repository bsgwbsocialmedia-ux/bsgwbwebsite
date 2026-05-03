// components/ProjectPartners/ProjectPartners.jsx
import { useEffect, useRef } from 'react';
import './ProjectPartners.css';

// ─── Partner Data ─────────────────────────────────────────────
// Replace logoUrl with actual logo path once available
// e.g. logoUrl: '/assets/partners/wapor.png'

const ROW_1 = [
  { id: 1,  name: 'World Scout Bureau',         type: 'Global Partner',    icon: '🌍', color: '#003580', bg: '#e8f0fb' },
  { id: 2,  name: 'UNICEF India',               type: 'Development',       icon: '🤝', color: '#00aeef', bg: '#e5f7fd' },
  { id: 3,  name: 'Ministry of Youth Affairs',  type: 'Government',        icon: '🏛️', color: '#ff6600', bg: '#fff0e5' },
  { id: 4,  name: 'WOSM',                       type: 'Global Partner',    icon: '⚜️', color: '#5c1a1a', bg: '#fbeaea' },
  { id: 5,  name: 'Nehru Yuva Kendra',          type: 'Government',        icon: '🎗️', color: '#138808', color: '#138808', bg: '#e8f5e9' },
  { id: 6,  name: 'CBSE',                       type: 'Education',         icon: '📚', color: '#c0392b', bg: '#fdecea' },
  { id: 7,  name: 'Red Cross Society',          type: 'Humanitarian',      icon: '🏥', color: '#cc0000', bg: '#fce8e8' },
  { id: 8,  name: 'National Service Scheme',    type: 'Government',        icon: '🌱', color: '#006400', bg: '#e8f5e9' },
];

const ROW_2 = [
  { id: 9,  name: 'UNDP India',                 type: 'Development',       icon: '🌐', color: '#006eb5', bg: '#e5f1fb' },
  { id: 10, name: 'Doordarshan',                type: 'Media Partner',     icon: '📺', color: '#1a237e', bg: '#e8eaf6' },
  { id: 11, name: 'Indian Oil Corporation',     type: 'Corporate',         icon: '⛽', color: '#d62b2b', bg: '#fdecea' },
  { id: 12, name: 'State Bank of India',        type: 'Banking',           icon: '🏦', color: '#2e4fa3', bg: '#eaeffc' },
  { id: 13, name: 'BSNL',                       type: 'Telecom',           icon: '📡', color: '#e65c00', bg: '#fff0e5' },
  { id: 14, name: 'WB Govt. Forest Dept.',      type: 'Environment',       icon: '🌳', color: '#2d7a3a', bg: '#e8f5e9' },
  { id: 15, name: 'Tata Trusts',               type: 'Corporate CSR',     icon: '🏢', color: '#003580', bg: '#e8f0fb' },
  { id: 16, name: 'Air India',                  type: 'Travel Partner',    icon: '✈️', color: '#c0392b', bg: '#fdecea' },
];

function PartnerCard({ partner }) {
  return (
    <a className="partner-card" href="#" title={partner.name}>
      <div
        className="partner-logo-fallback"
        style={{ background: partner.bg }}
      >
        <span style={{ fontSize: '2rem' }}>{partner.icon}</span>
      </div>
      <div className="partner-name">{partner.name}</div>
      <div className="partner-type">{partner.type}</div>
    </a>
  );
}

function TickerRow({ partners, className = '' }) {
  // Duplicate for seamless infinite loop
  const items = [...partners, ...partners];
  return (
    <div className="partners-ticker-wrapper">
      <div className={`partners-ticker ${className}`}>
        {items.map((p, i) => (
          <PartnerCard key={`${p.id}-${i}`} partner={p} />
        ))}
      </div>
    </div>
  );
}

export default function ProjectPartners() {
  const sectionRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="partners-section reveal" ref={sectionRef}>
      <div className="partners-inner">

        {/* Heading */}
        <div className="partners-heading-row">
          <span className="partners-heading-icon">🤝</span>
          <h2>Our Project Partners</h2>
        </div>
        <p className="partners-subtitle">
          Proud to collaborate with leading national &amp; international organisations
        </p>

        {/* Row 1 — Left to Right */}
        <TickerRow partners={ROW_1} />

        {/* Row 2 — Right to Left */}
        <TickerRow partners={ROW_2} className="partners-ticker-row2" />

        {/* CTA */}
        <div className="partners-cta">
          <p>Interested in partnering with Bharat Scouts &amp; Guides, West Bengal?</p>
          <button className="partners-cta-btn">
            🤝 Become a Partner
          </button>
        </div>

      </div>
    </section>
  );
}