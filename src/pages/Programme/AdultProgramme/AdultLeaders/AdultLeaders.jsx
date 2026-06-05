import "./AdultLeaders.css";

export default function AdultLeaders() {
  return (
    <div className="adultleaders-page">

      <div className="adultleaders-banner">
        <h1>Adult Leaders</h1>
      </div>

      <div className="adultleaders-layout">

        <div className="adultleaders-content">

          <h2>Trainers Training Course</h2>

          <ul>
            <li>Pre ALT Course – 7 Days</li>
            <li>Assistant Leader Trainer – 7 Days</li>
            <li>Leader Trainer – 7 Days</li>
          </ul>

          <h2>Scout Wing</h2>

          <div className="download-list">
            <button>List Of LT</button>
            <button>List Of ALT</button>
            <button>List Of HWB</button>
          </div>

        </div>

        <div className="adultleaders-training">

          <div className="box yellow">
            Himalaya Wood Badge
          </div>

          <div className="arrow">⬆</div>

          <div className="box blue">
            Pre Assistant Leader Trainer
          </div>

          <div className="arrow">⬆</div>

          <div className="box green">
            Assistant Leader Trainer
          </div>

          <div className="arrow">⬆</div>

          <div className="box orange">
            Leader Trainer
          </div>

        </div>

      </div>

    </div>
  );
}