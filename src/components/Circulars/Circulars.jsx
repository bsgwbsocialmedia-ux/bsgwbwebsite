// components/Circulars/Circulars.jsx
import { useState, useEffect, useRef } from 'react';
import './Circulars.css';
import { CIRCULARS_URL, VIDEOS_URL, apiFetch } from '../../services/api';

// ── Dummy data ──
const DUMMY_CIRCULARS = [
  { id: 1, title: 'Scout Master Training Camp — August 2025', date: '2025-07-28', isNew: true, pdfUrl: '#' },
  { id: 2, title: 'Rajya Puraskar Award Notification 2025', date: '2025-07-15', isNew: true, pdfUrl: '#' },
  { id: 3, title: 'Annual State Jamboree Registration Guidelines', date: '2025-07-01', isNew: false, pdfUrl: '#' },
  { id: 4, title: 'District Commissioner Meeting — Minutes', date: '2025-06-20', isNew: false, pdfUrl: '#' },
  { id: 5, title: 'Revised Syllabus for Pravesh & Pratham Sopan', date: '2025-06-05', isNew: false, pdfUrl: '#' },
  { id: 6, title: 'Environment Conservation Drive Circular', date: '2025-05-18', isNew: false, pdfUrl: '#' },
];

const DUMMY_VIDEOS = [
  { id: 1, title: 'State Jamboree Highlights 2025', link: 'https://youtube.com', platform: 'youtube' },
  { id: 2, title: 'Scout Training Workshop — June', link: 'https://youtube.com', platform: 'youtube' },
  { id: 3, title: 'Live: Award Ceremony Coverage', link: 'https://facebook.com', platform: 'facebook' },
  { id: 4, title: 'Behind the Scenes — Camp Life', link: 'https://facebook.com', platform: 'facebook' },
  { id: 5, title: 'Scouts in Nature — Reels', link: 'https://instagram.com', platform: 'instagram' },
  { id: 6, title: 'Rally Day Moments 2025', link: 'https://instagram.com', platform: 'instagram' },
];

const PLATFORM_META = {
  youtube:   { label: 'YouTube',   icon: '▶', color: '#FF0000' },
  facebook:  { label: 'Facebook',  icon: '⬡', color: '#1877F2' },
  instagram: { label: 'Instagram', icon: '◈', color: '#E1306C' },
};

function formatDate(str) {
  return new Date(str).toLocaleDateString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
  });
}

export default function Circulars() {
  const [circulars, setCirculars]  = useState(null);
  const [videos, setVideos]        = useState(null);
  const sectionRef                 = useRef(null);

  // Reveal on scroll
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

  // Fetch from backend — falls back to dummy
  useEffect(() => {
    apiFetch(CIRCULARS_URL).then(data => setCirculars(data ?? DUMMY_CIRCULARS));
    apiFetch(VIDEOS_URL).then(data => setVideos(data ?? DUMMY_VIDEOS));

    // Immediate dummy load if no backend
    const t = setTimeout(() => {
      setCirculars(prev => prev ?? DUMMY_CIRCULARS);
      setVideos(prev => prev ?? DUMMY_VIDEOS);
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  // Group videos by platform
  const groupedVideos = (videos ?? []).reduce((acc, v) => {
    if (!acc[v.platform]) acc[v.platform] = [];
    acc[v.platform].push(v);
    return acc;
  }, {});

  return (
    <section className="circulars-section reveal" ref={sectionRef}>
      <h2 className="section-heading">Latest Updates</h2>
      <div className="section-divider" />

      <div className="circulars-grid">
        {/* ── Circulars Panel ── */}
        <div className="circulars-panel">
          <div className="panel-header">
            <div className="panel-header-accent" />
            <span className="panel-header-icon">📋</span>
            <h2>Circulars & Notifications</h2>
          </div>

          <div className="circular-list">
            {!circulars ? (
              <div className="panel-loading">
                <div className="spinner" />
                <span>Loading circulars…</span>
              </div>
            ) : circulars.length === 0 ? (
              <div className="panel-empty">No circulars available.</div>
            ) : (
              circulars.map(c => (
                <a
                  key={c.id}
                  className="circular-item"
                  href={c.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="circular-pdf-icon">📄</div>
                  <div className="circular-content">
                    <div className="circular-title-row">
                      <span className="circular-title">{c.title}</span>
                      {c.isNew && <span className="new-badge">NEW</span>}
                    </div>
                    <div className="circular-date">{formatDate(c.date)}</div>
                  </div>
                </a>
              ))
            )}
          </div>
        </div>

        {/* ── Videos Panel ── */}
        <div className="videos-panel">
          <div className="panel-header">
            <div className="panel-header-accent" />
            <span className="panel-header-icon">🎬</span>
            <h2>Latest Videos</h2>
          </div>

          <div className="video-list">
            {!videos ? (
              <div className="panel-loading">
                <div className="spinner" />
                <span>Loading videos…</span>
              </div>
            ) : videos.length === 0 ? (
              <div className="panel-empty">No videos available.</div>
            ) : (
              ['youtube', 'facebook', 'instagram'].map(platform => {
                const group = groupedVideos[platform];
                if (!group?.length) return null;
                const meta = PLATFORM_META[platform];
                return (
                  <div className="video-platform-group" key={platform}>
                    <div className="platform-label">
                      <span className="platform-icon">{meta.icon}</span>
                      {meta.label}
                    </div>
                    {group.map(v => (
                      <a
                        key={v.id}
                        className="video-item"
                        href={v.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          className={`video-platform-dot ${platform}`}
                        />
                        <span className="video-title">{v.title}</span>
                        <span className="video-arrow">›</span>
                      </a>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}