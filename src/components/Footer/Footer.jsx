import './Footer.css';

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
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
              src="/footer.png"
              alt="BSG Logo"
              className="footer-logo"
            />

            <div>

              <h3>
                Bharat Scouts & Guides
              </h3>

              <p>
                West Bengal State Council
                <br />
                Empowering Youth. Serving Nation.
                <br />
                Since 1909.
              </p>

            </div>

          </div>

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

          </div>

          <div className="visitor-box">

            <FaUsers />

            <span>
              Total Visitors : 1,25,430
            </span>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h4>Quick Links</h4>

          <ul>

            <li>
              <a href="#">
                Home
              </a>
            </li>

            <li>
              <a href="#info-pages">
                About Us
              </a>
            </li>

            <li>
              <a href="#circulars">
                Circulars
              </a>
            </li>

            <li>
              <a href="#partners">
                Partners
              </a>
            </li>

            <li>
              <a href="#policies">
                Policies
              </a>
            </li>

            <li>
              <a href="#vision">
                Vision & Mission
              </a>
            </li>

          </ul>

        </div>

        {/* Programmes */}

        <div className="footer-col">

          <h4>Programmes</h4>

          <ul>

            <li>
              <a href="#">
                Cub
              </a>
            </li>

            <li>
              <a href="#">
                Bulbul
              </a>
            </li>

            <li>
              <a href="#">
                Scout
              </a>
            </li>

            <li>
              <a href="#">
                Guide
              </a>
            </li>

            <li>
              <a href="#">
                Rover
              </a>
            </li>

            <li>
              <a href="#">
                Ranger
              </a>
            </li>

            <li>
              <a href="#">
                Youth Annual Plan
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col contact-col">

          <h4>
            Contact
          </h4>

          <ul>

            <li>
              <FaMapMarkerAlt />
              State Headquarters,
              Kolkata,
              West Bengal
            </li>

            <li>
              <FaPhoneAlt />
              +91 9876543210
            </li>

            <li>
              <FaEnvelope />
              info@bsgwb.org
            </li>

          </ul>

          <div className="map-box">

            <iframe
              title="BSG Kolkata Map"
              src="https://maps.google.com/maps?q=Kolkata%20West%20Bengal&t=&z=12&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()}
          {' '}
          Bharat Scouts & Guides,
          West Bengal.
          All rights reserved.
        </span>

        <span>
          Developed by
          {' '}
          BSG WB Tech Team
        </span>

      </div>

    </footer>
  );
}