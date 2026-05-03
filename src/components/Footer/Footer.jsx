// components/Footer/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>Bharat Scouts &amp; Guides</h3>
          <p>West Bengal State Council<br />Empowering Youth. Serving Nation.<br />Since 1909.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About BSG</a></li>
            <li><a href="#">Circulars</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Programmes</h4>
          <ul>
            <li><a href="#">Cub Scout</a></li>
            <li><a href="#">Scout</a></li>
            <li><a href="#">Rover Scout</a></li>
            <li><a href="#">Bulbul Guide</a></li>
            <li><a href="#">Ranger Guide</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">State HQ, Kolkata</a></li>
            <li><a href="mailto:info@bsgwb.org">info@bsgwb.org</a></li>
            <li><a href="#">District Offices</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Bharat Scouts &amp; Guides, West Bengal. All rights reserved.</span>
        <span>Developed by BSG WB Tech Team</span>
      </div>
    </footer>
  );
}