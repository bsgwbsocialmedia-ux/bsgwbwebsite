import "./Bulbul.css";

export default function Bulbul() {
  return (
    <div className="bulbul-page">

      <div className="bulbul-hero">
        <h2>Bulbul Section</h2>
        <p>
          A fun and engaging programme for the young girls of the Bharat Scouts & Guides family.
        </p>
      </div>

      <div className="bulbul-content">

        {/* Section 1: Bulbul Eligibility - With Image */}
        <div className="bulbul-section">
          <div className="bulbul-section-text">
            <h3>BULBUL :</h3>
            <p>
              A girl who is citizen of India and has completed five years but not completed ten years of age is eligible to be registered as a Bulbul Aspirant.
            </p>
            <p>
              As a Pravesh Bulbul she will work for three months before investiture as a bulbul.
            </p>

            <h3>Pravesh Requirements :</h3>
            <ol type="a">
              <li>Be able to tell the story of Tara.</li>
              <li>Understand the meaning of Bulbul Promise, Bulbul Law, Bulbul Motto and Bulbul Greetings.</li>
              <li>Demonstrate correctly Bulbul Salute and Left Hand Shake.</li>
              <li>Offer daily prayer as told by parents.</li>
              <li>Do a daily good turn at home.</li>
              <li>Be able to sing Bulbul Prayer</li>
              <li>She then makes the Bulbul Promise to the Flock Leader and is invested as a Bulbul.</li>
              <li>She is eligible to wear the Bulbul uniform and Membership Badge. The Membership Badge is a cloth badge with blue background with Fleur-de-lis in yellow superimposed by the Trefoil with Ashoka Chakra also in yellow in the centre. Membership badge is worn in the middle of the left sleeve. The Membership Badge shall be issued by the Local or District Association, as the case may be, on the recommendation of the Flock Leader.</li>
            </ol>
          </div>
          <div className="bulbul-section-image">
            <img 
              src="/bulbul.jpg" 
              alt="Bulbul Section"
            />
          </div>
        </div>

        {/* Section 2: Promise, Law, Motto, Salute, Prayer - No Image */}
        <div className="bulbul-section no-image">
          <div className="bulbul-section-text full-width">
            <div className="bulbul-note-box">

              <div className="bulbul-point">
                <h4 className="point-title">• The Bulbul Promise is :</h4>
                <p className="point-text">
                  "I promise to do my best<br />
                  to do my duty to God* and my country<br />
                  to keep the Bulbul law and to do Good Turn every day."
                </p>
                <p className="point-note">
                  * The word "Dharma" may be substituted for the word "God" if so desired.
                </p>
              </div>

              <div className="bulbul-point">
                <h4 className="point-title">• The law for the Bulbul is :</h4>
                <ol className="bulbul-law-list" type="i">
                  <li>The Bulbul is obedient</li>
                  <li>The Bulbul is clean and polite</li>
                </ol>
              </div>

              <div className="bulbul-point">
                <h4 className="point-title">• The Motto for the Bulbul is :</h4>
                <p className="point-text">"Do Your Best"</p>
              </div>

              <div className="bulbul-point">
                <h4 className="point-title">• Bulbul Salute :</h4>
                <p className="point-text">
                  The Bulbul Salute is given by raising the right arm smartly to the level of the shoulder, palm to the front, with the first two fingers stretched together, the first just touching the forehead and thumb closing on the last two fingers. After the salute the arm is smartly brought down.
                </p>
              </div>

              <div className="bulbul-point">
                <h4 className="point-title">• Bulbul Prayer :</h4>
                <p className="point-text">
                  The Bulbul Prayer (Ham Hain Chhote Chhote Bal) should be adopted and practised.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Section 3: Advancement Scheme - With PDF Button */}
        <div className="bulbul-section no-image">
          <div className="bulbul-section-text full-width">
            <div className="bulbul-advancement">
              <h3>Advancement Scheme Of Bulbul Section</h3>
              <a 
                href="" 
                target="_blank" 
                rel="noopener noreferrer"
                className="more-details-btn"
              >
                More Details →
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}