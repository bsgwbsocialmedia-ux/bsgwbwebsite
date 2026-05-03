// components/InfoPages/InfoPages.jsx
import { useState, useRef, useEffect } from 'react';
import './InfoPages.css';

// ─── Dummy Data ───────────────────────────────────────────────

const DUMMY_NEWS = [
  {
    id: 1, day: '28', month: 'Jul',
    tag: 'Event',
    title: 'State Jamboree 2025 Registration Now Open',
    excerpt: 'All district commissioners are requested to submit troop registrations before 15 August 2025. Limited seats available.',
    link: '#',
  },
  {
    id: 2, day: '15', month: 'Jul',
    tag: 'Award',
    title: 'Rajya Puraskar Ceremony Scheduled for Independence Day',
    excerpt: 'The prestigious Rajya Puraskar award ceremony will be held on 15 August 2025 at State HQ, Kolkata.',
    link: '#',
  },
  {
    id: 3, day: '01', month: 'Jul',
    tag: 'Training',
    title: 'Advanced Scout Master Training Camp — August Batch',
    excerpt: 'Applications invited for the 5-day residential training camp at BSG Training Centre, Bankura.',
    link: '#',
  },
  {
    id: 4, day: '20', month: 'Jun',
    tag: 'Notice',
    title: 'District Commissioner Annual Meeting — Minutes Released',
    excerpt: 'Key decisions from the June DC meeting regarding district-level camp schedules are now available for download.',
    link: '#',
  },
  {
    id: 5, day: '05', month: 'Jun',
    tag: 'Environment',
    title: 'Green Scout Initiative — State-wide Tree Plantation Drive',
    excerpt: 'Over 50,000 saplings planted across 23 districts in partnership with the West Bengal Forest Department.',
    link: '#',
  },
];

const DUMMY_GALLERY = [
  { id: 1, label: 'State Jamboree 2024', bg: 'linear-gradient(135deg,#1a3a5c,#2d7a3a)', icon: '🏕️', category: 'Events' },
  { id: 2, label: 'Rajya Puraskar 2024', bg: 'linear-gradient(135deg,#0d2440,#a07008)', icon: '🏅', category: 'Awards' },
  { id: 3, label: 'Training Camp 2024', bg: 'linear-gradient(135deg,#2d3561,#1a3a5c)', icon: '🎓', category: 'Training' },
  { id: 4, label: 'Environment Drive', bg: 'linear-gradient(135deg,#1a4a2e,#2d7a3a)', icon: '🌿', category: 'Events' },
  { id: 5, label: 'Scout Rally 2024', bg: 'linear-gradient(135deg,#3a1a5c,#1a3a5c)', icon: '🚩', category: 'Events' },
  { id: 6, label: "Founder's Day 2024", bg: 'linear-gradient(135deg,#5c3a1a,#8c6010)', icon: '⭐', category: 'Events' },
  { id: 7, label: 'Cub Scout Day', bg: 'linear-gradient(135deg,#1a5c3a,#0d4020)', icon: '🐯', category: 'Training' },
  { id: 8, label: 'Rover Scout Meet', bg: 'linear-gradient(135deg,#1a2a5c,#0d2040)', icon: '⛺', category: 'Events' },
];

const DUMMY_AWARDS = [
  {
    id: 1, medal: '🥇',
    name: 'Rajya Puraskar',
    desc: 'The highest state-level Scout award in West Bengal, recognising exceptional service, character, and leadership.',
    eligibility: 'Eligibility: Scouts above Dwitiya Sopan with at least 2 years of service',
  },
  {
    id: 2, medal: '🏅',
    name: 'Tritiya Sopan',
    desc: 'Awarded upon successful completion of the third stage of the Scout training programme with all required proficiency badges.',
    eligibility: 'Eligibility: Scouts who completed Dwitiya Sopan',
  },
  {
    id: 3, medal: '🎖️',
    name: 'Chief Scout Award',
    desc: 'Presented by the Chief Scout for India to individuals for distinguished and outstanding service to Scouting at national level.',
    eligibility: 'Eligibility: District-level nomination required',
  },
  {
    id: 4, medal: '🏆',
    name: 'Best Troop Award',
    desc: 'Awarded to the best-performing Scout troop in the state based on activities, attendance, and community service.',
    eligibility: 'Eligibility: All registered troops with minimum 2 years standing',
  },
  {
    id: 5, medal: '🌟',
    name: 'Pravesh Award',
    desc: 'First milestone award in the Scout journey, recognising successful completion of basic Scout training and Promise.',
    eligibility: 'Eligibility: All newly enrolled Scouts',
  },
  {
    id: 6, medal: '🦅',
    name: 'Eagle Scout Certificate',
    desc: 'Awarded to Rovers who demonstrate exceptional leadership, community service, and commitment over 3+ years.',
    eligibility: 'Eligibility: Rover Scouts with 3+ years of active service',
  },
];

const GALLERY_CATEGORIES = ['All', 'Events', 'Training', 'Awards'];

const TABS = [
  { id: 'about',   label: 'About Us', icon: '🏛️' },
  { id: 'gallery', label: 'Gallery',  icon: '🖼️' },
  { id: 'news',    label: 'News',     icon: '📰' },
  { id: 'awards',  label: 'Awards',   icon: '🏆' },
];

// ─── Sub-components ────────────────────────────────────────────

function AboutPanel() {
  return (
    <div className="infopages-panel">
      {/* Hero Banner */}
      <div className="about-hero">
        <div className="about-hero-icon">⚜️</div>
        <div className="about-hero-text">
          <h2>Bharat Scouts &amp; Guides — West Bengal</h2>
          <p>
            West Bengal State Council of Bharat Scouts &amp; Guides is one of the largest
            and most active state councils in India, empowering youth since 1909 through
            values of duty, integrity, and community service.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="about-stats-row">
        {[
          { icon: '👥', number: '5', suffix: 'L+', label: 'Registered Members' },
          { icon: '🏕️', number: '23', suffix: '', label: 'Districts Covered' },
          { icon: '📅', number: '115', suffix: '+', label: 'Years of Service' },
          { icon: '🎖️', number: '1200', suffix: '+', label: 'Awards Conferred' },
        ].map((s, i) => (
          <div className="stat-card" key={i}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.number}<span>{s.suffix}</span></div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Content Cards */}
      <div className="about-content-grid">
        <div className="about-card">
          <div className="about-card-header">
            <span className="about-card-header-icon">🎯</span>
            <h3>Our Mission</h3>
          </div>
          <p>
            To contribute to the development of young people in achieving their full
            physical, intellectual, social and spiritual potentials as individuals,
            as responsible citizens and as members of their local, national and
            international communities.
          </p>
          <p>
            We follow the Scout Method — learning by doing, working in small groups,
            and living by the Scout Law and Promise.
          </p>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <span className="about-card-header-icon">📖</span>
            <h3>Scout Law &amp; Promise</h3>
          </div>
          <ul>
            <li>A Scout's honour is to be trusted</li>
            <li>A Scout is loyal to the nation and serves others</li>
            <li>A Scout is friendly and courteous</li>
            <li>A Scout is kind to animals and the environment</li>
            <li>A Scout obeys orders and never gives up</li>
            <li>A Scout is thrifty and takes care of belongings</li>
          </ul>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <span className="about-card-header-icon">🏗️</span>
            <h3>Programme Sections</h3>
          </div>
          <ul>
            <li>Cub Scout — Age 6 to 10 years</li>
            <li>Scout — Age 10 to 17 years</li>
            <li>Rover Scout — Age 17 to 25 years</li>
            <li>Bulbul Guide — Age 6 to 10 years</li>
            <li>Guide — Age 10 to 17 years</li>
            <li>Ranger Guide — Age 17 to 25 years</li>
          </ul>
        </div>

        <div className="about-card">
          <div className="about-card-header">
            <span className="about-card-header-icon">📍</span>
            <h3>State Headquarters</h3>
          </div>
          <p>
            BSG West Bengal State Council is headquartered in Kolkata and operates
            through 23 district associations spread across the state.
          </p>
          <p>
            Our training centres regularly conduct programmes for Scout Masters,
            District Commissioners, and youth members at all levels.
          </p>
        </div>
      </div>
    </div>
  );
}

function GalleryPanel() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? DUMMY_GALLERY
    : DUMMY_GALLERY.filter(g => g.category === activeFilter);

  return (
    <div className="infopages-panel">
      <h2 className="section-heading">Photo Gallery</h2>
      <div className="section-divider" />

      {/* Filter Buttons */}
      <div className="gallery-filter-row">
        {GALLERY_CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="gallery-grid">
        {filtered.map(item => (
          <div className="gallery-card" key={item.id}>
            <div
              className="gallery-placeholder"
              style={{ background: item.bg }}
            >
              <span className="gallery-placeholder-icon">{item.icon}</span>
              <span>{item.label}</span>
            </div>
            <div className="gallery-overlay">
              <span className="gallery-overlay-label">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsPanel() {
  return (
    <div className="infopages-panel">
      <h2 className="section-heading">News &amp; Announcements</h2>
      <div className="section-divider" />

      <div className="news-list">
        {DUMMY_NEWS.map(n => (
          <a key={n.id} className="news-card" href={n.link}>
            <div className="news-date-block">
              <div className="news-date-day">{n.day}</div>
              <div className="news-date-month">{n.month}</div>
            </div>
            <div className="news-body">
              <span className="news-tag">{n.tag}</span>
              <div className="news-title">{n.title}</div>
              <div className="news-excerpt">{n.excerpt}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function AwardsPanel() {
  return (
    <div className="infopages-panel">
      <div className="awards-hero">
        <h2>Scout Awards &amp; Recognitions</h2>
        <p>Honoring dedication, service, and excellence in Scouting</p>
      </div>

      <div className="awards-grid">
        {DUMMY_AWARDS.map(a => (
          <div className="award-card" key={a.id}>
            <div className="award-card-top">
              <div className="award-medal">{a.medal}</div>
              <div className="award-name">{a.name}</div>
            </div>
            <div className="award-card-body">
              <p className="award-desc">{a.desc}</p>
              <p className="award-eligibility">📌 {a.eligibility}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────

export default function InfoPages() {
  const [activeTab, setActiveTab] = useState('about');
  const sectionRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible'); },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const renderPanel = () => {
    switch (activeTab) {
      case 'about':   return <AboutPanel />;
      case 'gallery': return <GalleryPanel />;
      case 'news':    return <NewsPanel />;
      case 'awards':  return <AwardsPanel />;
      default:        return null;
    }
  };

  return (
    <section className="infopages-section reveal" ref={sectionRef}>
      {/* ── Tab Navbar ── */}
      <nav className="infopages-nav">
        <div className="infopages-nav-inner">
          {TABS.map(tab => (
            <button
              key={tab.id}
              className={`infopages-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Page Content ── */}
      <div className="infopages-content" key={activeTab}>
        {renderPanel()}
      </div>
    </section>
  );
}