// components/PoliciesSection/PoliciesSection.jsx
import { useEffect, useRef } from 'react';
import './PoliciesSection.css';

// ── Child Protection Icon (shield with hands) ──
function ChildProtectionIcon() {
  return (
    <svg className="policy-icon-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield */}
      <path
        d="M40 6L12 18V38C12 54 24 67 40 72C56 67 68 54 68 38V18L40 6Z"
        fill="rgba(255,255,255,0.15)"
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
      />
      {/* Hands */}
      <ellipse cx="28" cy="46" rx="8" ry="5" fill="rgba(255,255,255,0.5)" transform="rotate(-20 28 46)" />
      <ellipse cx="52" cy="46" rx="8" ry="5" fill="rgba(255,255,255,0.5)" transform="rotate(20 52 46)" />
      {/* Child figure */}
      <circle cx="40" cy="32" r="7" fill="white" opacity="0.9" />
      <path d="M33 48 Q40 56 47 48" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.9" />
      {/* Star */}
      <circle cx="56" cy="20" r="4" fill="var(--accent-light)" opacity="0.8" />
    </svg>
  );
}

// ── Safe From Harm colorful grid logo ──
function SafeFromHarmLogo() {
  const cells = [
    { text: 'SAFE',  bg: '#e63946' },
    { text: 'FROM',  bg: '#2ec4b6' },
    { text: 'HARM',  bg: '#8338ec' },
    { text: '⚜',    bg: '#1d3557' },
  ];
  return (
    <div className="sfh-logo">
      {cells.map((c, i) => (
        <div key={i} className="sfh-cell" style={{ background: c.bg }}>
          {c.text}
        </div>
      ))}
    </div>
  );
}

export default function PoliciesSection() {
  const sectionRef = useRef(null);

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
    <section className="policies-section reveal" ref={sectionRef}>
      <div className="policies-inner">

        <div className="policies-top-label">
          <span>🛡️</span>
          <h2 className="section-heading">Our Policies</h2>
        </div>
        <div className="section-divider" />

        <div className="policies-grid">

          {/* ── Panel 1: Child Protection Policy ── */}
          <div className="policy-panel">
            <div className="policy-icon-box">
              <ChildProtectionIcon />
            </div>

            <h2 className="policy-title">Child Protection Policy</h2>

            <p className="policy-desc">
              Bharat Scouts &amp; Guides is committed to the safety and well-being of
              every child in our movement. Our Child Protection Policy works towards
              the empowerment of adolescents, enabling them to negotiate improved
              outcomes of gender equality, health, and personal dignity.
              We work with youth to create a supportive environment in which they
              are able to exercise and access their rights and achieve their full
              potential. Every Scout leader is trained and bound by this policy.
            </p>

            <a href="#" className="policy-readmore">
              Read More !
              <span className="policy-readmore-arrow">›</span>
            </a>
          </div>

          {/* ── Panel 2: Safe From Harm Policy ── */}
          <div className="policy-panel">
            <div className="policy-icon-box">
              <SafeFromHarmLogo />
            </div>

            <h2 className="policy-title">Safe From Harm Policy</h2>

            <p className="policy-desc">
              Safe from Harm is a set of actions designed to make sure that every
              person involved in Scouting is responsible and committed to protect
              children and young people inside or outside the Movement, so everyone
              can feel safe, at any time.
              <br /><br />
              If you want to learn more about online safety, join our Being Safe
              Online awareness programme, available to all registered members and
              their families across West Bengal.
            </p>

            <a href="#" className="policy-readmore">
              Read More !
              <span className="policy-readmore-arrow">›</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}