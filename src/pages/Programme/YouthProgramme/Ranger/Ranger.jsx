import "./Ranger.css";

export default function Ranger() {
  return (
    <div className="ranger-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="ranger-hero">
        <div className="ranger-hero-inner">
          <h1>Ranger Section</h1>

          <p>
            A programme for young women to develop leadership, service, and self-development skills.
          </p>
        </div>
      </section>


      <main className="ranger-content">

        {/* ===================================================
            SECTION 1
        =================================================== */}

        <section className="ranger-section">

          <div className="ranger-section-text">

            <h3>RANGER :</h3>

            <ol type="i">

              <li>
                A girl whether previously guide or not, who is a citizen of India and who completed 15 years and not 25 years of age may be enlisted as a Ranger Aspirant. She shall than pass the Guide Pravesh test, if she is not already a Guide. She shall then take the Guide Promise and Subscribe to the Guide Law and then she will be enrolled as a Ranger. If she is already a Guide she shall reaffirm the Guide Promise.
              </li>

              <li>
                There are three stages in the career of a Ranger namely;

                <ol type="a">
                  <li>Ranger Aspirant</li>
                  <li>Ranger</li>
                  <li>Ranger-in-Service.</li>
                </ol>

              </li>

              <li>
                A Ranger Aspirant can be invested as a Ranger only after completion of fifteen years &amp; three months of age and should have worked for three months for Pravesh Test.
              </li>

            </ol>


            <h3>Ranger Aspirant :</h3>

            <ol type="A">

              <li>
                She must have completed Fifteen years of age.
              </li>

              <li>
                A Ranger Aspirant who had been a Guide or who on admission as Ranger Aspirant passes Pravesh Badge test as laid down for Guide shall wear uniform as a Ranger.
              </li>

            </ol>


            <h3>Tests for Pravesh :</h3>

            <ol type="i">

              <li>
                Read Scouting for Boys, Girl Guiding in India and books on Rangering prescribed by the sponsor.
              </li>

              <li>
                Know the principles and programme of Rangering and show preparedness to try to live the Law as interpreted for Rangers and keep the Promise.
              </li>

              <li>
                If a young girl who has never been a Guide and wishes to join the Team afresh, she should qualify for Pravesh requirements of Guide Section and work for at least three months as a Ranger Aspirant before investiture.
              </li>

              <li>
                Have a knowledge of B.P. Six and Simple Drill.
              </li>

            </ol>

          </div>


          {/* FIRST IMAGE */}

          <div className="ranger-image">

            <img
              src="/rover.png"
              alt="Ranger Section"
            />

          </div>

        </section>


        {/* ===================================================
            SECTION 2
        =================================================== */}

        <section className="ranger-section ranger-special-section">

          <div className="ranger-section-text">

            <div className="ranger-sub-section">

              <h3>SEA RANGER :</h3>

              <p>
                In addition to above tests a Sea Ranger will have to qualify for the following :
              </p>

              <ol type="i">

                <li>Have knowledge of water Safety Rules.</li>

                <li>Know the DOs and DON'Ts in boat.</li>

                <li>Have in general knowledge of a boat, a sail, an oar and an anchor.</li>

                <li>Learn Signalling, by Semaphore method.</li>

                <li>Know about atleast three navigational stars visible in the area.</li>

              </ol>

            </div>


            <div className="ranger-sub-section">

              <h3>AIR RANGER</h3>

              <p className="ranger-placeholder">
                Details to be added...
              </p>

            </div>


            <div className="ranger-sub-section">

              <h3>GRAMEEN RANGER</h3>

              <h4>Tests for Pravesh Badge :</h4>

              <ol type="i">

                <li>
                  Prescribed syllabus for all tests assigned for Rangers will be applicable for Grameen Rangers.
                </li>

                <li>
                  Know the parts of Grameen Ranger Uniform
                </li>

              </ol>


              <div className="ranger-note">

                <strong>Note for Grameen Ranger :</strong>

                <p>
                  However, subjects found difficult or not related to Grameen Ranger may be replaced by appropriate local activities/projects with the permission of State Chief Commissioner on the recommendation of District Chief Commissioner &amp; State Organising Commissioner. The area specific alternate activities may be allowed by the State Chief Commissioner and certificate to that effect should be produced in the testing camp.
                </p>

              </div>

            </div>

          </div>


          {/* SECOND IMAGE */}

          <div className="ranger-image ranger-second-image">

            <img
              src="/ranger.jpeg"
              alt="Ranger Programme"
            />

          </div>

        </section>


        {/* ===================================================
            SECTION 3 - NOTE
        =================================================== */}

        <section className="ranger-full-section">

          <div className="ranger-note-box">

            <h4 className="ranger-note-title">
              📌 Note :
            </h4>


            <div className="ranger-point">

              <p className="ranger-point-text">
                On completion of the tests to the satisfaction of the Ranger Leader, the Ranger Aspirant shall be invested as a Ranger on making or reaffirming the Guide Promise. She is eligible to wear the Pravesh Badge. The Pravesh Badge shall be a cloth badge with red background and fleur-de-lis in yellow superimposed by the Trefoil with Ashoka Chakra also in yellow in the centre. It shall be worn on uniform in the middle of the left sleeve. This membership badge is issued by the Local or District Association as the case may be, on the recommendation of the Ranger Leader.
              </p>

            </div>

          </div>

        </section>


        {/* ===================================================
            SECTION 4 - ADVANCEMENT
        =================================================== */}

        <section className="ranger-advancement">

          <h2>
            Advancement Scheme Of Ranger Section
          </h2>

          <p>
            Explore the advancement scheme and requirements for the Ranger Section.
          </p>

          <a
            href="https://issuu.com/thebharatscoutsandguides/docs/apro-iii_complete_book"
            target="_blank"
            rel="noopener noreferrer"
            className="ranger-details-btn"
          >
            <span>More Details</span>
            <span className="ranger-arrow">→</span>
          </a>

        </section>

      </main>

    </div>
  );
}