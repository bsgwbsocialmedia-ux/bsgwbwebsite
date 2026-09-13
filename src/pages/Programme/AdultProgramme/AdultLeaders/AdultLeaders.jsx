import "./AdultLeaders.css";

export default function AdultLeaders() {
  return (
    <div className="adultleaders-page">

      <div className="adultleaders-hero">
        <h2>Adult Leaders</h2>
        <p>
          Training and development programmes for adult leaders in scouting.
        </p>
      </div>

      <div className="adultleaders-content">

        {/* Section 1: Trainers Training Course - With Image */}
        <div className="adultleaders-section">
          <div className="adultleaders-section-text">
            <h3>TRAINERS TRAINING COURSE</h3>
            <ul>
              <li>Pre-ALT Course – 7 days</li>
              <li>Course for Assistant Leader Trainers – 7 days</li>
              <li>Course for Leader Trainers – 7 days</li>
            </ul>
          </div>
          <div className="adultleaders-section-image">
            <img 
              src="/AdultLeader.jpg" 
              alt="Adult Leaders Training"
            />
          </div>
        </div>

        {/* Section 2: LIST OF ADULT LEADERS - No Image
        <div className="adultleaders-section no-image">
          <div className="adultleaders-section-text full-width">
            <h3>LIST OF ADULT LEADERS</h3>

            <div className="leader-list-group">
              <h4>SCOUT WING</h4>
              <div className="leader-list">
                <span>List of LT</span>
                <a 
                  href="/adultleaders/scout-lt.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  Click Here
                </a>
              </div>
              <div className="leader-list">
                <span>List of ALT</span>
                <a 
                  href="/adultleaders/scout-alt.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  Click Here
                </a>
              </div>
              <div className="leader-list">
                <span>List of HWB</span>
                <a 
                  href="/adultleaders/scout-hwb.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  Click Here
                </a>
              </div>
            </div>

            <div className="leader-list-group">
              <h4>GUIDE WING</h4>
              <div className="leader-list">
                <span>List of LT</span>
                <a 
                  href="/adultleaders/guide-lt.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  Click Here
                </a>
              </div>
              <div className="leader-list">
                <span>List of ALT</span>
                <a 
                  href="/adultleaders/guide-alt.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  Click Here
                </a>
              </div>
              <div className="leader-list">
                <span>List of HWB</span>
                <a 
                  href="/adultleaders/guide-hwb.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="download-link"
                >
                  Click Here
                </a>
              </div>
            </div>

          </div>
        </div> */}

        {/* Section 3: Advancement of Trainers - No Image */}
        <div className="adultleaders-section no-image">
          <div className="adultleaders-section-text full-width">
            <h3>Advancement of Trainers</h3>
            <div className="advancement-flow">
              <div className="advancement-item top">
                <span className="advancement-label">Leader Trainer</span>
                <span className="advancement-time">24 Months</span>
              </div>
              <div className="advancement-arrow">⬆</div>
              <div className="advancement-item">
                <span className="advancement-label">Assistant Leader Trainer</span>
                <span className="advancement-time">12 Months</span>
              </div>
              <div className="advancement-arrow">⬆</div>
              <div className="advancement-item">
                <span className="advancement-label">Pre Assistant Leader Trainer</span>
                <span className="advancement-time">06 Months</span>
              </div>
              <div className="advancement-arrow">⬆</div>
              <div className="advancement-item bottom">
                <span className="advancement-label">Himalaya Wood Badge</span>
                <span className="advancement-time">Parchment Holder</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}