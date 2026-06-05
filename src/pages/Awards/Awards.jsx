import './Awards.css';

const awards = [
  'Rajya Puraskar',
  'Tritiya Sopan',
  'Chief Scout Award',
  'Best Troop Award',
  'Pravesh Award',
  'Eagle Scout'
];

export default function Awards() {
  return (
    <div className="awards-page">

      <div className="awards-hero">
        <h2>Scout Awards</h2>

        <p>
          Recognising excellence and dedication in scouting.
        </p>
      </div>

      <div className="awards-grid">

        {awards.map((award, index) => (
          <div className="award-card" key={index}>

            <div className="award-icon">🏆</div>

            <h3>{award}</h3>

            <p>
              Official scouting recognition award.
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}