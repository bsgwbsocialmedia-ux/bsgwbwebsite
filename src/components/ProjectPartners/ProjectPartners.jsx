// components/ProjectPartners/ProjectPartners.jsx

import { useEffect, useRef } from 'react';
import './ProjectPartners.css';

const partnersData = [
  {
    id: 1,
    name: 'TICKET TO LIFE',
    logo: '/projectpartners/0.jpeg',
    website: 'https://www.scout.org'
  },
  {
    id: 2,
    name: 'CLAP',
    logo: '/projectpartners/1.jpeg',
    website: 'https://www.scout.org'
  },
  {
    id: 3,
    name: 'NAI KURSEONG',
    logo: '/projectpartners/2.jpeg',
    website: 'https://www.scout.org'
  },
  {
    id: 4,
    name: 'UNICEF',
    logo: '/projectpartners/3.jpeg',
    website: 'https://www.scout.org'
  },
  {
    id: 5,
    name: 'YLACC',
    logo: '/projectpartners/4.jpeg',
    website: 'https://www.scout.org'
  },

  {
    id: 6,
    name: 'MYBHARAT',
    logo: '/projectpartners/mybharat.png',
    website: 'https://www.scout.org'
  },

  {
    id: 7,
    name: 'SKILL INDIA',
    logo: '/projectpartners/skillindia.webp',
    website: 'https://www.scout.org'
  },

  {
    id: 8,
    name: 'V-GUARD',
    logo: '/projectpartners/vguard.jpg',
    website: 'https://www.scout.org'
  },

  // ... other partners (commented)
];

function PartnerCard({ partner }) {
  return (
    <a 
      href={partner.website} 
      target="_blank" 
      rel="noopener noreferrer"
      className="partner-card"
      title={partner.name}
    >
      <div className="partner-logo-wrapper">
        {partner.logo ? (
          <img 
            src={partner.logo} 
            alt={partner.name}
            className="partner-logo"
          />
        ) : (
          <div className="partner-logo-placeholder">
            <span>🏢</span>
          </div>
        )}
      </div>
      <p className="partner-name">{partner.name}</p>
    </a>
  );
}

export default function ProjectPartners() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // FIX: Sirf ek baar duplicate karo (2 times for seamless scroll)
  // Agar 1 partner hai toh usko 2 baar karo seamless scroll ke liye
  const scrollingPartners = [...partnersData, ...partnersData];

  return (
    <section className="partners-section" ref={sectionRef}>
      <div className="partners-container">
        
        {/* Header */}
        <div className="partners-header">
          <span className="partners-icon">🤝</span>
          <h2 className="partners-title">Our Project Partners</h2>
          <p className="partners-subtitle">
            Proud to collaborate with leading national & international organizations
          </p>
        </div>

        {/* Scrolling Ticker */}
        <div className="partners-ticker-wrapper">
          <div className="partners-ticker">
            {scrollingPartners.map((partner, index) => (
              <PartnerCard key={`${partner.id}-${index}`} partner={partner} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}