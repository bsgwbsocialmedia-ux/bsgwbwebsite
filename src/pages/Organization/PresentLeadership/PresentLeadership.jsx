import './PresentLeadership.css';

export default function PresentLeadership() {
  return (
    <div className="leadership-page">

      <div className="leadership-grid">

        <div className="leader-card">

          <h2>State President</h2>

          <img
            src="/images/state-president.jpg"
            alt="State President"
          />

          <h3>Dr. Mahendra Singh</h3>

          <p>
            Former Cabinet Minister of Jal Shakti,
            Government of Uttar Pradesh
          </p>

        </div>

        <div className="leader-card">

          <h2>State Chief Commissioner</h2>

          <img
            src="/images/chief-commissioner.jpg"
            alt="Chief Commissioner"
          />

          <h3>Dr. Prabhat Kumar</h3>

          <p>
            Former President,
            Public Service Commission,
            Uttar Pradesh
          </p>

        </div>

      </div>

    </div>
  );
}