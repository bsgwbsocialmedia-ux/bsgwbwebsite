import './About.css';

export default function About() {
  return (
    <div className="about-page">

      <div className="about-hero">

        <div className="about-hero-icon">⚜️</div>

        <div className="about-hero-text">
          <h2>Bharat Scouts & Guides — West Bengal</h2>

          <p>
            Empowering youth through discipline, leadership,
            community service, and national unity since 1909.
          </p>
        </div>

      </div>

      <div className="about-stats">

        <div className="about-stat-card">
          <span>👥</span>
          <h3>5L+</h3>
          <p>Members</p>
        </div>

        <div className="about-stat-card">
          <span>🏕️</span>
          <h3>23</h3>
          <p>Districts</p>
        </div>

        <div className="about-stat-card">
          <span>🏆</span>
          <h3>1200+</h3>
          <p>Awards</p>
        </div>

        <div className="about-stat-card">
          <span>📅</span>
          <h3>115+</h3>
          <p>Years</p>
        </div>

      </div>

      <div className="about-grid">

        <div className="about-card">
          <h3>🎯 Our Mission</h3>

          <p>
            To develop youth into responsible citizens
            through scouting values and leadership.
          </p>
        </div>

        <div className="about-card">
          <h3>📖 Scout Law</h3>

          <ul>
            <li>A Scout is loyal</li>
            <li>A Scout is disciplined</li>
            <li>A Scout serves others</li>
            <li>A Scout respects nature</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>🏕️ Programmes</h3>

          <ul>
            <li>Cub Scout</li>
            <li>Scout</li>
            <li>Rover Scout</li>
            <li>Guide</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>📍 Headquarters</h3>

          <p>
            Kolkata, West Bengal
          </p>
        </div>

      </div>

    </div>
  );
}