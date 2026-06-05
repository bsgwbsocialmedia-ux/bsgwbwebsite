import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">

        <div className="navbar-logo">
          <img src="/left.jpeg" alt="WBJSC Logo" />
        </div>

        <div className="navbar-title">
          <h1>BHARAT SCOUTS &amp; GUIDES</h1>
          <p>West Bengal — Official Website</p>
        </div>

        <div className="navbar-logo">
          <img src="/right.png" alt="BSG India Logo" />
        </div>

      </div>
    </nav>
  );
}