import './Footer.css';

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUsers
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">

          <div className="brand-top">
            <img
              src="/left.png"
              alt="BSG Logo"
              className="footer-logo"
            />

            <div>
              <h3>Bharat Scouts And Guides</h3>
              <p>
                West Bengal State Council<br />
                Empowering Youth. Serving Nation.<br />
                Since 1909.
              </p>
            </div>
          </div>

          <div className="social-icons">
            <a href="https://www.facebook.com/share/1Y14hSJec7/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/bsg.westbengal?igsh=N2hlMXdobGp3eHd0&utm_source=qr" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com/@bsgindia?si=QY49AXXDxM1wPXAs" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div> 

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/aboutus">About Us</Link></li>
            <li><a href="#circulars">Circulars</a></li>
            <li><Link to="/organization/presentleadership">Present Leadership</Link></li>
            <li><Link to="#partners">Partners</Link></li>
            <li><Link to="#policies">Policies</Link></li>
            <li><Link to="#vision">Vision & Mission</Link></li>
          </ul>
        </div>

        {/* Programmes */}
        <div className="footer-col">
          <h4>Programmes</h4>
          <ul>
            <li><Link to="/programme/youth-programme/cub">Cub</Link></li>
            <li><Link to="/programme/youth-programme/bulbul">Bulbul</Link></li>
            <li><Link to="/programme/youth-programme/scout">Scout</Link></li>
            <li><Link to="/programme/youth-programme/guide">Guide</Link></li>
            <li><Link to="/programme/youth-programme/rover">Rover</Link></li>
            <li><Link to="/programme/youth-programme/ranger">Ranger</Link></li>
            <li><Link to="/programme/annual-plan/youth">Youth Annual Plan</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col contact-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <FaMapMarkerAlt />
              5, Government Place,<br />
              State Headquarters,<br />
              Kolkata-700062, West Bengal
            </li>
            <li>
              <FaPhoneAlt />
              +91 9051238821
            </li>
            <li>
              <FaEnvelope />
              bsgwbsocialmedia@gmail.com
            </li>
          </ul>

          <div className="map-box">
            <iframe
              title="BSG Kolkata Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2716401447733!2d88.3473534!3d22.5689415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a1667b0d5b%3A0x176318a1bec86b62!2sBharat%20Scouts%20Guides!5e0!3m2!1sen!2sin!4v1784648025407!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Bharat Scouts And Guides, West Bengal. 
          All rights reserved.
        </span>
        <span>Developed by MAJORA DIGITAL</span>
      </div>

    </footer>
  );
}