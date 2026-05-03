// components/Navbar/Navbar.jsx
import './Navbar.css';

const ScoutFleurIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4C32 4 20 16 20 28C20 35 25.5 40 32 40C38.5 40 44 35 44 28C44 16 32 4 32 4Z"
      fill="#c8960c" opacity="0.9"/>
    <path d="M12 32C12 32 4 36 4 44C4 50 8 54 14 54C20 54 24 50 26 44L32 40L38 44C40 50 44 54 50 54C56 54 60 50 60 44C60 36 52 32 52 32L32 40L12 32Z"
      fill="#c8960c" opacity="0.75"/>
    <circle cx="32" cy="40" r="5" fill="#f0b429"/>
    <path d="M32 45 L32 58" stroke="#c8960c" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M26 58 L38 58" stroke="#c8960c" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const BSGIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,4 60,52 4,52" fill="none" stroke="#c8960c" strokeWidth="3"/>
    <circle cx="32" cy="32" r="10" fill="#c8960c" opacity="0.85"/>
    <text x="32" y="36" textAnchor="middle" fill="white"
      style={{ fontSize: '9px', fontFamily: 'serif', fontWeight: 'bold' }}>BSG</text>
  </svg>
);

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Left Logo */}
        <div className="navbar-logo">
          <div className="logo-placeholder">
            <ScoutFleurIcon />
            <span>WBJSC</span>
          </div>
        </div>

        {/* Center Title */}
        <div className="navbar-title">
          <h1>BHARAT SCOUTS &amp; GUIDES</h1>
          <p>West Bengal — Official Website</p>
        </div>

        {/* Right Logo */}
        <div className="navbar-logo">
          <div className="logo-placeholder">
            <BSGIcon />
            <span>BSG INDIA</span>
          </div>
        </div>
      </div>
    </nav>
  );
}