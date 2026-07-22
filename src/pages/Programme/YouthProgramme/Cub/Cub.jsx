import "./Cub.css";

export default function Cub() {
  return (
    <div className="cub-page">

      <div className="cub-hero">
        <h2>Cub Section</h2>
        <p>
          A fun and engaging programme for the young members of the Bharat Scouts & Guides family.
        </p>
      </div>

      <div className="cub-content">

        {/* Section 1: Cub Eligibility - With Image */}
        <div className="cub-section">
          <div className="cub-section-text">
            <h3>CUB :</h3>
            <ol>
              <li>
                A Boy who is a citizen of India and who has completed five but not more than 10 years of age is eligible to be registered as a Cub Aspirant.
              </li>
              <li>
                He will work for 3 months to the satisfaction of the Cub Master before investiture as Cub.
              </li>
            </ol>

            <h3>PRAVESH Requirements :</h3>
            <ol>
              <li>Be able to tell the first jungle story.</li>
              <li>Understand the meaning of Cub Law, Cub Motto, Cub Promise and Cub Greeting.</li>
              <li>Demonstrate correctly Cub Salute and left handshake.</li>
              <li>Offer daily prayers as told by parents.</li>
              <li>Do a daily Good-turn at home.</li>
              <li>Be able to Sing Cub Prayer</li>
              <li>He then makes Cub Promise to the Cub Master and is invested as a Cub.</li>
              <li>He is eligible to wear Cub Uniform and Membership Badge. Membership badge is a cloth badge with blue background with Fleur-de-lis in yellow superimposed by Trefoil with Ashoka Chakra also in yellow in the centre. Membership badge is worn in the centre of the pleat of the left pocket of the shirt or at the same place on the jersey. Membership badge shall be issued by the Local or District Association, as the case may be, on the recommendation of the Cub master.</li>
            </ol>
          </div>
          <div className="cub-section-image">
            <img 
              src="/Cub.jpg" 
              alt="Cub Section"
            />
          </div>
        </div>

        {/* Section 2: Note - No Image */}
        <div className="cub-section no-image">
          <div className="cub-section-text full-width">
            <div className="cub-note-box">
              <h4 className="note-title">📌 Note :</h4>

              <div className="cub-point">
                <h4 className="point-title">1. THE CUB MOTTO :</h4>
                <p className="point-text">DO YOUR BEST</p>
              </div>

              <div className="cub-point">
                <h4 className="point-title">2. The Cub Prayer Song :</h4>
                <p className="point-text">(Ham Hain Chhote Chhote Bal - Should be adopted and practised.)</p>
              </div>

              <div className="cub-point">
                <h4 className="point-title">3. THE CUB PROMISE :</h4>
                <p className="point-text">
                  "I promise to do my best<br />
                  To do my duty to God* and my country<br />
                  To keep the Cub Law and<br />
                  To do a Good-turn every day."
                </p>
                <p className="point-note">
                  * The word 'Dharma' may be substituted for the word "God" if so desired.
                </p>
              </div>

              <div className="cub-point">
                <h4 className="point-title">4. The Cub Law :</h4>
                <ol className="cub-law-list">
                  <li>A Cub is obedient.</li>
                  <li>A Cub is clean and polite.</li>
                </ol>
              </div>

              <div className="cub-point">
                <h4 className="point-title">5. The Cub Salute :</h4>
                <p className="point-text">
                  The Cub salute is given by raising the right arm smartly to the level of the shoulder, palm to the front, first two fingers stretched apart, first finger touching the forehead and the thumb pressing on the last two fingers. After the salute, the arm is smartly brought down.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}