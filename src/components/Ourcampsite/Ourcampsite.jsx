import { useState, useEffect, useRef } from 'react';
import './OurCampsite.css';

// ─── Campsite data (same, but with placeholder gradients) ───
const GANGANAGAR = {
  name: 'Ganganagar Campsite',
  subtitle: 'Premier Scouting Ground of West Bengal',
  sections: [
    {
      id: 1,
      tag: 'Welcome',
      heading: 'A Place of Adventure & Learning',
      desc: 'Nestled in the heart of West Bengal, Ganganagar Campsite is the premier scouting ground for Bharat Scouts & Guides. Spread across lush green acres, the campsite provides an ideal environment for scout training, nature walks, and team-building activities.',
      imageUrl: null,
      imageBg: 'linear-gradient(135deg,#1a3a5c,#2d7a3a)',
      imageIcon: '🏕️',
    },
    {
      id: 2,
      tag: 'Facilities',
      heading: 'World-Class Camping Facilities',
      desc: 'The campsite features well-equipped tents, dining areas, first-aid stations, and a dedicated training ground. All facilities meet BSG national standards and are maintained to ensure comfort and safety for scouts of all age groups.',
      imageUrl: null,
      imageBg: 'linear-gradient(135deg,#0d3a1a,#1a5c2e)',
      imageIcon: '⛺',
    },
    {
      id: 3,
      tag: 'Activities',
      heading: 'Activities & Training Programmes',
      desc: 'From rope-making and fire-lighting to map-reading and environmental conservation, Ganganagar offers a full spectrum of scouting activities. Regular camps, jamborees, and leadership workshops are conducted throughout the year.',
      imageUrl: null,
      imageBg: 'linear-gradient(135deg,#2d3561,#1a3a5c)',
      imageIcon: '🧭',
    },
    {
      id: 4,
      tag: 'Nature',
      heading: 'Rich Natural Surroundings',
      desc: 'Surrounded by natural greenery, Ganganagar Campsite offers scouts a unique opportunity to connect with nature. Bird watching, nature trails, and conservation activities form an integral part of the camping experience here.',
      imageUrl: null,
      imageBg: 'linear-gradient(135deg,#1a4a1a,#2d6a2d)',
      imageIcon: '🌿',
    },
  ],
  gallery: [
    { id: 1, imageUrl: null, bg: 'linear-gradient(135deg,#1a3a5c,#2d7a3a)', icon: '🏕️', label: 'Main Ground' },
    { id: 2, imageUrl: null, bg: 'linear-gradient(135deg,#0d2440,#a07008)', icon: '🔥', label: 'Campfire Area' },
    { id: 3, imageUrl: null, bg: 'linear-gradient(135deg,#2d3561,#1a3a5c)', icon: '⛺', label: 'Tent Zone' },
    { id: 4, imageUrl: null, bg: 'linear-gradient(135deg,#1a4a2e,#2d7a3a)', icon: '🌿', label: 'Nature Trail' },
    { id: 5, imageUrl: null, bg: 'linear-gradient(135deg,#3a1a5c,#1a3a5c)', icon: '🏃', label: 'Activity Area' },
    { id: 6, imageUrl: null, bg: 'linear-gradient(135deg,#5c3a1a,#8c6010)', icon: '🍽️', label: 'Dining Hall' },
    { id: 7, imageUrl: null, bg: 'linear-gradient(135deg,#1a5c3a,#0d4020)', icon: '🧭', label: 'Training Ground' },
    { id: 8, imageUrl: null, bg: 'linear-gradient(135deg,#1a2a5c,#0d2040)', icon: '🌙', label: 'Night Camp' },
  ],
};

// ─── Lightbox (improved with better UX) ──────────────────────
function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="campsite-lightbox" onClick={handleBackdropClick}>
      <button className="campsite-lightbox-close" onClick={onClose}>✕</button>
      {item.imageUrl ? (
        <img
          className="campsite-lightbox-img"
          src={item.imageUrl}
          alt={item.label || item.heading}
        />
      ) : (
        <div
          className="campsite-lightbox-placeholder"
          style={{ background: item.imageBg || item.bg }}
        >
          <span>{item.imageIcon || item.icon}</span>
          <p>{item.label || item.heading}</p>
        </div>
      )}
    </div>
  );
}

// ─── Drag-to-scroll scroller (enhanced for touch) ────────────
function useScrollDrag(ref) {
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e) => {
    if (!ref.current) return;
    isDown.current = true;
    startX.current = e.pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
    ref.current.style.cursor = 'grabbing';
  };
  const onMouseLeave = () => {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = 'grab';
  };
  const onMouseUp = () => {
    isDown.current = false;
    if (ref.current) ref.current.style.cursor = 'grab';
  };
  const onMouseMove = (e) => {
    if (!isDown.current || !ref.current) return;
    e.preventDefault();
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };

  // Touch events for mobile
  const onTouchStart = (e) => {
    if (!ref.current) return;
    isDown.current = true;
    startX.current = e.touches[0].pageX - ref.current.offsetLeft;
    scrollLeft.current = ref.current.scrollLeft;
  };
  const onTouchMove = (e) => {
    if (!isDown.current || !ref.current) return;
    const x = e.touches[0].pageX - ref.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    ref.current.scrollLeft = scrollLeft.current - walk;
  };
  const onTouchEnd = () => {
    isDown.current = false;
  };

  return {
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onMouseMove,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}

// ─── Main Component ────────────────────────────────────────────
export default function OurCampsite() {
  const [showDetail, setShowDetail] = useState(false);
  const [lightboxItem, setLightboxItem] = useState(null);
  const scrollRef = useRef(null);
  const dragHandlers = useScrollDrag(scrollRef);

  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  // Landing page
  if (!showDetail) {
    return (
      <div className="campsite-landing">
        <div className="campsite-hero-banner">
          <div className="campsite-hero-content">
            <span className="campsite-hero-icon">🏕️</span>
            <h2>Our Campsite</h2>
            <p>
              Bharat Scouts &amp; Guides, West Bengal proudly maintains premier camping
              facilities for scouts across the state. Explore our campsites and experience
              the spirit of scouting in nature.
            </p>
            <button
              className="campsite-click-btn"
              onClick={() => setShowDetail(true)}
            >
              Click Here to Explore
              <span className="campsite-click-btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Detail page
  return (
    <div className="campsite-detail">
      <button className="campsite-back-btn" onClick={() => setShowDetail(false)}>
        ← Back to Campsites
      </button>

      <div className="campsite-detail-header">
        <h2 className="campsite-detail-heading">{GANGANAGAR.name}</h2>
        <p className="campsite-detail-subtitle">{GANGANAGAR.subtitle}</p>
        <div className="section-divider" />
      </div>

      {/* Alternating rows */}
      <div className="campsite-rows">
        {GANGANAGAR.sections.map((sec, i) => (
          <div
            key={sec.id}
            className={`campsite-row ${i % 2 !== 0 ? 'reverse' : ''}`}
          >
            <div className="campsite-img-wrap" onClick={() => openLightbox(sec)}>
              {sec.imageUrl ? (
                <img src={sec.imageUrl} alt={sec.heading} />
              ) : (
                <div className="campsite-img-placeholder" style={{ background: sec.imageBg }}>
                  <span>{sec.imageIcon}</span>
                  <p>{sec.heading}</p>
                </div>
              )}
              <div className="campsite-img-zoom-icon">🔍</div>
            </div>
            <div className="campsite-text-wrap">
              <span className="campsite-text-tag">{sec.tag}</span>
              <div className="campsite-text-divider" />
              <h3>{sec.heading}</h3>
              <p>{sec.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery scroller */}
      <div className="campsite-scroller-section">
        <h3 className="campsite-scroller-heading">
          📸 Gallery — {GANGANAGAR.name}
        </h3>
        <div
          className="campsite-scroller-wrap"
          ref={scrollRef}
          {...dragHandlers}
        >
          <div className="campsite-scroller-track">
            {GANGANAGAR.gallery.map((img) => (
              <div
                key={img.id}
                className="campsite-scroller-item"
                onClick={() => openLightbox(img)}
              >
                {img.imageUrl ? (
                  <img src={img.imageUrl} alt={img.label} />
                ) : (
                  <div className="campsite-scroller-placeholder" style={{ background: img.bg }}>
                    <span>{img.icon}</span>
                    <p>{img.label}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightboxItem && <Lightbox item={lightboxItem} onClose={closeLightbox} />}
    </div>
  );
}