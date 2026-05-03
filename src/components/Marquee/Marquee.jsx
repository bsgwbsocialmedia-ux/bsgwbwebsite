// components/MarqueeBar/MarqueeBar.jsx
import './Marquee.css';

const MARQUEE_ITEMS = [
  '🏕️ State Jamboree 2025 Registration Open Now',
  '📋 Annual Report 2024-25 Released',
  '🎖️ Rajya Puraskar Award Ceremony — 15 August 2025',
  '🏅 National Scout Rally — New Delhi, October 2025',
  '📢 New Circular: Training Schedule for Scout Masters',
  '🌿 Environment Conservation Drive — Join & Make a Difference',
  '🎓 Pravesh & Pratham Sopan Camp — Dates Announced',
  '🏆 Inter-District Scout Competition Results Declared',
];

export default function MarqueeBar() {
  // Duplicate for seamless loop
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="marquee-bar" aria-label="News ticker">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-dot" />
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}