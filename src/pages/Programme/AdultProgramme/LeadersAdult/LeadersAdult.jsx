import "./LeadersAdult.css";

export default function LeadersAdult() {
  return (
    <div className="leadersadult-page">

      <div className="leadersadult-banner">
        <h1>Leaders Of Adult</h1>
      </div>

      <div className="leadersadult-layout">

        <div className="leadersadult-content">

          <h2>Training Of Adult Leaders</h2>

          <ul>
            <li>Basic Course For Commissioners – 5 Days</li>
            <li>Advanced Course For Commissioners – 5 Days</li>
            <li>Course For Secretaries – 5 Days</li>
            <li>Course For Organisers – 5 Days</li>
            <li>Course For Group Leaders – 5 Days</li>
          </ul>

        </div>

        <div className="commissioner-training">

          <div className="training-box">
            Basic Course For Commissioner
          </div>

          <div className="arrow">⬆</div>

          <div className="training-box green">
            Advanced Course For Commissioner
          </div>

        </div>

      </div>

    </div>
  );
}