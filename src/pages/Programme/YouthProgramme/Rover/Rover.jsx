import "./Rover.css";

export default function Rover() {
  return (
    <div className="rover-page">

      <div className="rover-hero">
        <h2>Rover Section</h2>
        <p>
          A programme for young adults to develop leadership, service, and adventure skills.
        </p>
      </div>

      <div className="rover-content">

        {/* Section 1: Rover - With Image */}
        <div className="rover-section">
          <div className="rover-section-text">
            <h3>ROVER :</h3>
            <p>
              There are three stages in the career of a Rover namely;
            </p>
            <ol>
              <li>Rover Aspirant</li>
              <li>Rover</li>
              <li>Rover-in-Service.</li>
            </ol>
            <p>
              A Rover Aspirant can be invested as a Rover only after completion of fifteen years of age and should have worked for three months for Pravesh Test.
            </p>

            <h3>ROVER ASPIRANT :</h3>
            <ol>
              <li>He must have completed fifteen years of age.</li>
              <li>A Rover Aspirant who had been a Scout or who on admission as Rover Aspirant passes Pravesh Badge test as laid down for Scout shall wear uniform as a Rover.</li>
            </ol>

            <h3>PRAVESH Requirements :</h3>
            <ol>
              <li>Read and appreciate contents of "Scouting for Boys" and books on Rovering prescribed by the sponsor.</li>
              <li>If a young man has never been a Scout and wishes to join the Crew afresh, he should qualify for Pravesh requirements of Scout Section and work for at least three months as a Aspirant Rover before investiture and probation as decided by the crew after the completion of three months be decided by the Crew Council.</li>
              <li>Be able to interpret the Promise and Law as per Rover point of view.</li>
            </ol>
          </div>
          <div className="rover-section-image">
            <img 
              src="/rover.png" 
              alt="Rover Section"
            />
          </div>
        </div>

        {/* Section 2: Sea Rover & Grameen Rover - No Image */}
        <div className="rover-section no-image">
          <div className="rover-section-text full-width">
            <div className="rover-sub-section">
              <h3>SEA ROVER :</h3>
              <p>In addition to above Pravesh requirements a young man wanting to be a Sea Rover will:-</p>
              <ol>
                <li>Have knowledge of water safety rules.</li>
                <li>Know the DO's and DON'T's in a boat.</li>
                <li>Have in general, knowledge of a canoe, a boat, a sail, an oars and an anchor.</li>
                <li>Learn signaling by Semaphore method.</li>
                <li>Know about at least three navigational stars visible in the area.</li>
              </ol>
            </div>

            <div className="rover-sub-section">
              <h3>GRAMEEN ROVER :</h3>
              <ol>
                <li>Have a general knowledge of Scout Movement.</li>
                <li>Complete all the Pravesh Requirements as prescribed for Rovers at (9)</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Section 3: Note - No Image */}
        <div className="rover-section no-image">
          <div className="rover-section-text full-width">
            <div className="rover-note-box">
              <h4 className="note-title">📌 Note :</h4>

              <div className="rover-point">
                <p className="point-text">
                  On Completion of requirements to the satisfaction of the Rover Scout Leader a Rover aspirant shall be invested as a Rover on making or reaffirming the Scout Promise. He is then eligible to wear membership badge.
                </p>
              </div>

              <div className="rover-point">
                <p className="point-text">
                  Membership Badge shall be a cloth badge with red background and Fleur-de-lis in yellow superimposed by the Trefoil with Ashoka Chakra also in yellow, in the centre; it shall be worn in the centre of the pleat of the left pocket of shirt or at the same place on jersey.
                </p>
              </div>

              <div className="rover-point">
                <p className="point-text">
                  This membership badge is issued by the Local or District Association, as the case may be on the recommendation of the Rover Scout Leader.
                </p>
              </div>

              <div className="rover-point">
                <p className="point-text">
                  Rover Promise &amp; Law are same as for Scout.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}