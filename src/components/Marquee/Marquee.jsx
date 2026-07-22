// components/MarqueeBar/MarqueeBar.jsx
import './Marquee.css';

const MARQUEE_ITEMS = [
  'BHARAT SCOUTS AND GUIDES WEST BENGAL',
  'BHARAT SCOUTS AND GUIDES WEST BENGAL',
  'BHARAT SCOUTS AND GUIDES WEST BENGAL',
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