import "./UnitLeaders.css";

export default function UnitLeaders() {
  return (
    <div className="unitleaders-page">

      <div className="unitleaders-banner">
        <h1>Unit Leaders</h1>
      </div>

      <div className="unitleaders-grid">

        <div className="unitleaders-content">
          <h2>Training Programme For Adult Leaders</h2>

          <ul>
            <li>Training Programme for Unit Leaders</li>
            <li>Training of Leaders of Adults</li>
            <li>Trainers Training Programme</li>
          </ul>

          <h3>Training Of Unit Leaders</h3>

          <ul>
            <li>Basic Course – 7 Days</li>
            <li>Advance Course – 7 Days</li>
            <li>Himalaya Wood Badge – 7 Days</li>
          </ul>
        </div>

        <div className="unitleaders-card">
          <h2>Scheme Of Training</h2>

          <div className="step">Basic Course</div>
          <div className="arrow">⬆</div>

          <div className="step green">
            Advance Course
          </div>

          <div className="arrow">⬆</div>

          <div className="step yellow">
            Himalaya Wood Badge
          </div>

        </div>

      </div>

    </div>
  );
}