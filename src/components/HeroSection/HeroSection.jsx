// components/HeroSection/HeroSection.jsx
import { useState, useEffect } from 'react';
import './HeroSection.css';
import { BANNERS_URL, CHIEF_SCOUT_URL, apiFetch } from '../../services/api';

// ── Dummy data (replace when backend is ready) ──
const DUMMY_SLIDES = [
  {
    id: 1,
    imageUrl: null,
    altText: 'State Jamboree 2025',
    caption: 'State Jamboree 2025',
    sub: 'Celebrating 100 years of Scouting in West Bengal',
    bg: 'linear-gradient(135deg, #1a3a5c 0%, #2d7a3a 100%)',
  },
  {
    id: 2,
    imageUrl: null,
    altText: 'Scouts in Action',
    caption: 'Scouts in Action',
    sub: 'Training & adventure across districts',
    bg: 'linear-gradient(135deg, #0d2440 0%, #a07008 100%)',
  },
  {
    id: 3,
    imageUrl: null,
    altText: 'Award Ceremony',
    caption: 'Rajya Puraskar 2024',
    sub: 'Honoring our best scouts & guides',
    bg: 'linear-gradient(135deg, #2d3561 0%, #1a3a5c 100%)',
  },
];

const DUMMY_CHIEF = {
  name: 'Smt. Droupadi Murmu',
  designation: 'Chief Scout for India\nPresident of India',
  imageUrl: null,
};

const ScoutFleurSVG = () => (
  <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 2C32 2 16 18 16 34C16 43 23 50 32 50C41 50 48 43 48 34C48 18 32 2 32 2Z"
      fill="currentColor" opacity="0.5"/>
    <path d="M8 38C8 38 2 44 2 52C2 58 6 62 12 62C18 62 22 58 26 52L32 50L38 52C42 58 46 62 52 62C58 62 62 58 62 52C62 44 56 38 56 38L32 50L8 38Z"
      fill="currentColor" opacity="0.4"/>
    <circle cx="32" cy="50" r="6" fill="currentColor" opacity="0.6"/>
    <path d="M32 56 L32 70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M25 70 L39 70" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
  </svg>
);

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState(DUMMY_SLIDES);
  const [chief, setChief] = useState(DUMMY_CHIEF);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Fetch from backend when ready
  useEffect(() => {
    apiFetch(BANNERS_URL).then(data => { if (data?.length) setSlides(data); });
    apiFetch(CHIEF_SCOUT_URL).then(data => { if (data) setChief(data); });
  }, []);

  return (
    <section className="hero-section">
      {/* ── Auto Slider ── */}
      <div className="slider-wrapper">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className="slide" key={slide.id ?? i}>
              {slide.imageUrl ? (
                <img className="slide-image" src={slide.imageUrl} alt={slide.altText} />
              ) : (
                <div
                  className="slide-placeholder"
                  style={{ background: slide.bg || 'var(--primary-dark)' }}
                >
                  <div className="slide-placeholder-icon" style={{ color: 'white' }}>
                    <ScoutFleurSVG />
                  </div>
                  <h3>{slide.caption}</h3>
                </div>
              )}
              <div className="slide-overlay" />
              <div className="slide-caption">
                <h2>{slide.caption}</h2>
                {slide.sub && <p>{slide.sub}</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Chief Scout Panel ── */}
      <div className="chief-scout-panel">
        <div className="chief-scout-label">Chief Scout for India</div>

        {chief.imageUrl ? (
          <img
            className="chief-scout-photo"
            src={chief.imageUrl}
            alt={chief.name}
          />
        ) : (
          <div className="chief-scout-photo-placeholder">
            <div style={{ color: 'white' }}><PersonIcon /></div>
            <span>Photo</span>
          </div>
        )}

        <div className="chief-scout-info">
          <h3>{chief.name}</h3>
          <p>{chief.designation}</p>
        </div>
      </div>
    </section>
  );
}