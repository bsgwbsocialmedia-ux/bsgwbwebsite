import './Bunny.css';

export default function Bunny() {
  return (
    <div className="bunny-page">

      <div className="bunny-hero">
        <h2>Bunny Scheme</h2>
        <p>
          A fun and engaging programme for the youngest members of the Bharat Scouts & Guides family.
        </p>
      </div>

      <div className="bunny-content">

        {/* Section 1: Background - With Image */}
        <div className="bunny-section">
          <div className="bunny-section-text">
            <h3>Back Ground :</h3>
            <p>
              Mrs. Lakshmi Mazumdar Former National Commissioner thought of introducing a programme for the children between the age group of 3 to 5 years during the International Year of Child. A Committee was formed and the Bunny Programme was introduced. International Year of Child was the ideal period to launch this project &amp; hence received a great response but later got neglected on account of various reasons. The objective of this scheme was to introduce an attractive programme for sub juniors and also to work it as the feeder to Cub/ Bulbul section. With same objectives this programme is being reintroduced in the present Boy/Girl programme.
            </p>
          </div>
          <div className="bunny-section-image">
            <img 
              src="/bunny.jpg" 
              alt="Bunny Scheme"
            />
          </div>
        </div>

        {/* Section 2: Suggested Age Group & Name - No Image */}
        <div className="bunny-section no-image">
          <div className="bunny-section-text full-width">
            <h3>Suggested Age Group:</h3>
            <p>3 to 6 years both for boys &amp; girls.</p>

            <h3>Name of the Group:</h3>
            <p>
              Tamtola (Common for both Boys &amp; Girls consisting of not more than 20 members ratio Bunny to Bunny Leader 10:1 advisable.
            </p>
          </div>
        </div>

        {/* Section 3: Bunny Law & Motto & Salute - No Image */}
        <div className="bunny-section no-image">
          <div className="bunny-section-text full-width">
            <h3>Bunny Law :</h3>
            <p>I shall try to be good boy/girl</p>

            <h3>Motto :</h3>
            <p>“Keep Smiling”</p>

            <h3>Bunny Salute :</h3>
            <p>
              The Two fingers (middle &amp; fore finger) of both hand raised along the side of the two ears depicting the ears of Bunny.
            </p>
          </div>
        </div>

        {/* Section 4: Uniform - No Image */}
        <div className="bunny-section no-image">
          <div className="bunny-section-text full-width">
            <h3>Uniform:</h3>
            <p>
              An apron with Bunny symbol against bright background to be worn over the school uniform or any other dress. The emblem be prepared by the National Headquarters in the form of a sticker badge. A Bunny holding up a carrot in right hand with BSG emblem in the centre of Bunny patch.
            </p>

            <h3>Uniform for Bunny Leader :</h3>
            <p>
              The Leader will be known as- Bunny Aunty (Bunny Uncle only in exceptional cases). It is suggested that Bunny Leaders can be the privilege of females' only. The uniform for the Bunny Leaders with the same as those of the adult Leaders of the regular Group.
            </p>
          </div>
        </div>

        {/* Section 5: Formation & Programme - No Image */}
        <div className="bunny-section no-image">
          <div className="bunny-section-text full-width">
            <h3>Formation:</h3>
            <p>All activities will be done in free formation</p>

            <h3>Programme:</h3>
            <p>
              Bunny programme is based on four sign posts namely:
            </p>
            <ul>
              <li><strong>Love for God</strong></li>
              <li><strong>Love for Nature</strong></li>
              <li><strong>Creative Activities</strong> &amp;</li>
              <li><strong>Learning to play together</strong> - This is achieved through the following activities:</li>
            </ul>
            <ul className="bunny-activity-list">
              <li>Develop habits of personal cleanliness &amp; social manners cutting parts and assembling simple figure, jig saw puzzle etc.</li>
              <li>To receive and convey a simple verbal/ telephone message.</li>
              <li>To receive a visitor and to talk to elders in a courteous way.</li>
              <li>To Cultivate Social virtues such as standing in a queue, taking one's turn, keeping the place clean, not spoiling the floor, use of the litter bin</li>
              <li>Tell one's own full name, address (telephone number if any) and also full name of his / her father / mother and the name of the Office / School where he/ she is working.</li>
            </ul>
          </div>
        </div>

        {/* Section 6: Bunny Leaders Training Scheme - With Image */}
        <div className="bunny-section reverse">
          <div className="bunny-section-text">
            <h3>Bunny Leaders Training Scheme</h3>
            <p>
              Duration of camp- 3 full days or 2 weekends Minimum Number-8 The Training of Bunny Leaders is organised by Guide Wing.
            </p>
          </div>
          <div className="bunny-section-image">
            <img 
              src="/bunny2.jpg" 
              alt="Bunny Training"
            />
          </div>
        </div>

      </div>
    </div>
  );
}