import React from 'react';
import { Link } from 'react-router-dom';
import './Ourcampsite.css';

export default function OurCampsite() {
  return (
    <div className="campsite-landing">
      <div className="campsite-hero-banner">
        <div className="campsite-hero-content">
          <h2>Our Campsites</h2>
          <p>
            Bharat Scouts & Guides, West Bengal proudly maintains premier camping
            facilities for scouts across the state. Explore our campsites and experience
            the spirit of scouting in nature.
          </p>

          <div className="campsite-buttons-grid">
            <Link to="/campsites/ganganagar" className="campsite-select-btn">
              Ganganagar Campsite
            </Link>
            <Link to="/campsites/kurseong" className="campsite-select-btn">
              Kurseong Campsite
            </Link>
            <Link to="/campsites/jhargram" className="campsite-select-btn">
              Jhargram Campsite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}