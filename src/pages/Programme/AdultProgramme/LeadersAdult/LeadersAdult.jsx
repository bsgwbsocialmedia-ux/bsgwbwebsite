import "./LeadersAdult.css";

export default function LeadersAdult() {
  return (
    <div className="leadersadult-page">

      <div className="leadersadult-hero">
        <h2>Leaders Of Adult</h2>
        <p>
          Training programmes for adult leaders in Scouting & Guiding.
        </p>
      </div>

      <div className="leadersadult-content">

        {/* Section 1: Training Of Adult Leaders - With Image */}
        <div className="leadersadult-section">
          <div className="leadersadult-section-text">
            <h3>TRAINING OF ADULT LEADERS</h3>
            <ul>
              <li>Basic Course for Commissioners – 5 days</li>
              <li>Advanced Course for Commissioners – 5 days</li>
              <li>Course for Secretaries – 5 days</li>
              <li>Course for Organisers – 5 days</li>
              <li>Course for Group Leaders - 5 Days</li>
            </ul>
          </div>
          <div className="leadersadult-section-image">
            <img 
              src="/leadersadult.jpg" 
              alt="Leaders of Adult Training"
            />
          </div>
        </div>

      </div>
    </div>
  );
}