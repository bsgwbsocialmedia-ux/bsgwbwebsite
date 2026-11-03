import './About.css';
import bsgLogo from '/left.png'; // Make sure you have this image in the same folder

export default function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        {/* Removed ⚜️ icon, added logo instead */}
        <div className="about-hero-logo">
          <img src={bsgLogo} alt="BSG Logo" className="about-logo-img" />
        </div>

        <div className="about-hero-text">
          <h2>Bharat Scouts And Guides, West Bengal</h2>
          <p>
            Empowering youth through discipline, leadership,
            community service, and national unity since 1909.
          </p>
        </div>
      </div>

      <div className="about-stats">
        <div className="about-stat-card">
          <span>👥</span>
          <h3>40k+</h3>
          <p>Members</p>
        </div>

        <div className="about-stat-card">
          <span>🏕️</span>
          <h3>11</h3>
          <p>Districts</p>
        </div>

        {/* Awards section removed */}

        <div className="about-stat-card">
          <span>📅</span>
          <h3>117+</h3>
          <p>Years</p>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>🎯 Our Mission</h3>
          <div className="about-mission-content">
            <p>
              "To contribute to the education of young people, through a value system based on the Scout Promise and Law, to help build a better India where people are self-fulfilled as individuals and play a constructive role in society."
            </p>
            <ul>
              <li>⚜️ Develop character and moral values.</li>
              <li>🤝 Promote leadership, responsibility, and teamwork.</li>
              <li>🌍 Encourage community service and active citizenship.</li>
              <li>🌱 Foster physical, intellectual, emotional, social, and spiritual development.</li>
              <li>🌿 Promote environmental awareness and sustainable living.</li>
              <li>💙 Uphold the ideals of service, discipline, and self-reliance through the Scout Promise and Law.</li>
            </ul>
          </div>
        </div>

        <div className="about-card">
          <h3>📖 Scout/Guide Law</h3>
          <ul>
            <li>A Scout/Guide is trustworthy.</li>
            <li>A Scout/Guide is loyal.</li>
            <li>A Scout/Guide is a friend to all and a brother/sister to every other Scout/Guide.</li>
            <li>A Scout/Guide is courteous.</li>
            <li>A Scout/Guide is a friend to animals and loves nature.</li>
            <li>A Scout/Guide is disciplined and helps protect public property.</li>
            <li>A Scout/Guide is courageous.</li>
            <li>A Scout/Guide is thrifty.</li>
            <li>A Scout/Guide is pure in thought, word and deed.</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>🏕️ Programmes</h3>  
          <ul>
            <li>Bunny (3-5 yrs)</li>
            <li>Cub (5-10 yrs)</li>
            <li>Bulbul (5-10 yrs)</li>
            <li>Scout (11-18 yrs)</li>
            <li>Guide (11-18 yrs)</li>
            <li>Rover (18-25 yrs)</li>
            <li>Ranger (18-25 yrs)</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>📍 State Headquarters</h3>
          <p>
           Scout Office:  5, Government Place (North), Kolkata - 700001, West Bengal. </p>
          <p> Guide Office: Guide Annex 1, Palace Court, 1,Kyd Street ,near Park Street, Kolkata - 700016.
          </p>
        </div>
      </div>
    </div>
  );
}