// components/VisionMission/VisionMission.jsx
import { useEffect, useRef } from 'react';
import './VisionMission.css';

const CORE_VALUES = [
  { icon: '🤝', name: 'Integrity',    desc: 'Honesty and strong moral principles in all actions' },
  { icon: '🌍', name: 'Service',      desc: 'Selfless contribution to community and nation' },
  { icon: '🦁', name: 'Courage',      desc: 'Facing challenges with confidence and resolve' },
  { icon: '🌱', name: 'Respect',      desc: 'Dignity for all people and the environment' },
  { icon: '🔦', name: 'Leadership',   desc: 'Inspiring others through example and vision' },
  { icon: '⚖️', name: 'Equity',       desc: 'Equal opportunity for every scout and guide' },
  { icon: '🌐', name: 'Brotherhood',  desc: 'Unity across communities, cultures and nations' },
  { icon: '📖', name: 'Learning',     desc: 'Lifelong growth through experience and training' },
];

const STRATEGIC_GOALS = [
  'Increase youth membership by 25% across all districts of West Bengal by 2027.',
  'Establish a BSG training centre in every district to improve leader quality.',
  'Launch digital platforms for member registration, badges and circulars.',
  'Strengthen community service programmes in rural and tribal areas.',
  'Partner with schools and colleges for Scout integration in curriculum.',
  'Promote gender equality — achieve 50% Guide enrolment in all districts.',
];

export default function VisionMission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="visionmission-section reveal" ref={sectionRef}>
      <div className="visionmission-inner">

        {/* ── Hero Banner ── */}
        <div className="vm-hero">
          <span className="vm-hero-emblem">⚜️</span>
          <h2>Vision &amp; Mission</h2>
          <p>
            Guiding the youth of West Bengal towards a life of honour,
            service, and leadership — rooted in the Scout Promise and Law.
          </p>
          <span className="vm-hero-motto">Be Prepared · Do a Good Turn Daily</span>
        </div>

        {/* ── Vision & Mission Cards ── */}
        <div className="vm-cards-row">

          {/* Vision */}
          <div className="vm-card vision">
            <div className="vm-card-header">
              <span className="vm-card-header-icon">🔭</span>
              <div>
                <h3>Our Vision</h3>
                <p>Where we aim to be</p>
              </div>
            </div>
            <div className="vm-card-body">
              <p>
                To be the most impactful youth movement in West Bengal — nurturing
                responsible, skilled, and compassionate citizens who lead their
                communities with honour and serve the nation with dedication.
              </p>
              <p>
                We envision a West Bengal where every young person has the opportunity
                to grow through Scouting — regardless of gender, background, or
                district — and carries the Scout values throughout their life.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="vm-card mission">
            <div className="vm-card-header">
              <span className="vm-card-header-icon">🎯</span>
              <div>
                <h3>Our Mission</h3>
                <p>What we do every day</p>
              </div>
            </div>
            <div className="vm-card-body">
              <p>
                To contribute to the development of young people by achieving their
                full physical, intellectual, social, and spiritual potential as
                individuals, as responsible citizens, and as members of their local,
                national, and international communities.
              </p>
              <p>
                We fulfil this mission through the Scout Method — learning by doing,
                working in small groups, and living by the Scout Law and Promise under
                the guidance of trained adult leaders.
              </p>
            </div>
          </div>

        </div>

        {/* ── Core Values ── */}
        <div className="vm-values-section">
          <h2 className="section-heading">Our Core Values</h2>
          <div className="section-divider" />

          <div className="vm-values-grid">
            {CORE_VALUES.map((v, i) => (
              <div className="vm-value-card" key={i}>
                <span className="vm-value-icon">{v.icon}</span>
                <div className="vm-value-name">{v.name}</div>
                <div className="vm-value-desc">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Strategic Goals ── */}
        <div className="vm-goals-section">
          <h3>Strategic Goals 2025 – 2027</h3>
          <div className="vm-goals-list">
            {STRATEGIC_GOALS.map((goal, i) => (
              <div className="vm-goal-item" key={i}>
                <span className="vm-goal-number">0{i + 1}</span>
                <p className="vm-goal-text">{goal}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}