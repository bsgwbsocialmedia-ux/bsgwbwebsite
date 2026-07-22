import React from 'react';
import './CampsiteDetail.css'; // agar styling file banani ho to

export default function CampsiteDetail({ campsite }) {
  if (!campsite) {
    return <h2>Campsite data not found</h2>;
  }

  return (
    <div className="campsite-detail-page">
      {/* Hero Section */}
      <div className="campsite-hero" style={{ background: campsite.sections[0]?.imageBg || '#0d3b4f' }}>
        <div className="campsite-hero-overlay">
          <h1>{campsite.name}</h1>
          <p className="subtitle">{campsite.subtitle}</p>
        </div>
      </div>

      {/* Sections */}
      <div className="campsite-sections">
        {campsite.sections.map((section) => (
          <div key={section.id} className="campsite-section">
            <div className="section-tag">{section.tag}</div>
            
            <div className="section-content">
              <div className="section-text">
                <h2>{section.heading}</h2>
                <p>{section.desc}</p>
              </div>

              {section.imageUrl ? (
                <div className="section-image">
                  <img src={section.imageUrl} alt={section.heading} />
                </div>
              ) : (
                <div 
                  className="section-icon-bg"
                  style={{ background: section.imageBg }}
                >
                  <span className="section-icon">{section.imageIcon}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="campsite-gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          {campsite.gallery.map((item) => (
            <div 
              key={item.id} 
              className="gallery-card"
              style={{ background: item.bg }}
            >
              <div className="gallery-icon">{item.icon}</div>
              <p className="gallery-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}