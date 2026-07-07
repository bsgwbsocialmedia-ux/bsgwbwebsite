import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-gold-line"></div>

      <div className="navbar-inner">

        {/* Left Logo */}
        <div className="navbar-logo">
          <img src="/left.png" alt="West Bengal Bharat Scouts & Guides" />
        </div>

        {/* Title */}
        <div className="navbar-title">
          <h1>BHARAT SCOUTS AND GUIDES</h1>
          <h2>WEST BENGAL</h2>
        </div>

        {/* Right Logo */}
        <div className="navbar-logo">
          <img src="/right.png" alt="The Bharat Scouts & Guides India" />
        </div>

      </div>
    </header>
  );
}