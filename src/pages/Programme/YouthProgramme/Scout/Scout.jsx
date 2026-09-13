import "./Scout.css";

export default function Scout() {
  return (
    <div className="scout-page">

      {/* HERO */}
      <div className="scout-hero">
        <h2>Scout Section</h2>
        <p>
          A programme for young boys to develop leadership, character, and
          service to the nation.
        </p>
      </div>


      <div className="scout-content">

        {/* ==========================================
            SECTION 1
        ========================================== */}

        <div className="scout-section">

          <div className="scout-section-text">

            <h3>SCOUT :</h3>

            <p>
              A boy who is a citizen of India and who has completed 10 years
              but not completed 17 years of age is eligible to become a Scout
              Aspirant.
            </p>

            <p>
              A Scout Aspirant shall complete Pravesh requirement and will
              work for three months to the satisfaction of the Scout Master
              before being invested as a Scout.
            </p>

            <h3>Pravesh Requirements :</h3>

            <ol type="i">

              <li>
                Have brief information of the origin of Scouting along with
                definition, purpose principles and method of the Bharat Scouts
                and Guides.
              </li>

              <li>
                A Scout Aspirant must have holistic knowledge of the movement.

                <ul>
                  <li>
                    Know the Scout Promise, Law &amp; Motto.
                  </li>

                  <li>
                    Have knowledge about the Scout, Sign, Salute and left hand
                    shake and be able to demonstrate.
                  </li>

                  <li>
                    Render daily good turn at home and maintain a diary at
                    least for a month.
                  </li>

                  <li>
                    Know the parts of Scout Uniform and how to wear it
                    correctly.
                  </li>

                  <li>
                    Know the composition and significance of the National
                    Flag, the Bharat Scouts &amp; Guides Flag and the World
                    Scout Flag and Flag Etiquette.
                  </li>

                  <li>
                    Sing correctly National Anthem, BSG Prayer and BSG Flag
                    Song. Know about the composer, duration and meaning of the
                    song.
                  </li>

                  <li>
                    Attend at least four Troop Meetings.
                  </li>

                  <li>
                    Undertake a 4 hour purposeful outing with his Patrol.
                  </li>
                </ul>
              </li>

            </ol>

            <p>
              He then makes the Scout Promise to the Scout Master and is
              invested as a Scout. He is eligible to wear Scout uniform and
              Membership Badge. The Membership Badge is a cloth badge with
              green background and Fleur-de-lis in yellow superimposed by the
              Trefoil with Ashoka Chakra also in yellow in the centre. The
              badge is worn in the centre of the pleat of the left pocket of
              shirt or at the same place on jersey. Membership badge shall be
              issued by the Local or the District Association as the case may
              be, on the recommendation of the Scout Master.
            </p>

            <p>
              Scouts should be given opportunity so that they acquire the habit
              of doing at least one Good Turn every day.
            </p>

          </div>


          {/* FIRST IMAGE */}

          <div className="scout-section-image">
            <img
              src="/scout-logo.png"
              alt="Scout Section"
            />
          </div>

        </div>


        {/* ==========================================
            SECTION 2
        ========================================== */}

        <div className="scout-section scout-note-section">

          {/* CONTENT */}

          <div className="scout-section-text">

            <div className="scout-note-box">

              <div className="scout-point">

                <h4 className="point-title">
                  • THE SCOUT PROMISE :
                </h4>

                <p className="point-text">
                  "On my honour, I promise that<br />
                  I will do my best To do my duty to God and my country,<br />
                  To help other people and To obey the Scout Law"
                </p>

              </div>


              <div className="scout-point">

                <h4 className="point-title">
                  • THE SCOUT LAW :
                </h4>

                <ol
                  className="scout-law-list"
                  type="i"
                >
                  <li>A Scout is Trustworthy.</li>
                  <li>A Scout is loyal.</li>
                  <li>
                    A Scout is a friend to all and a brother to every other
                    Scout.
                  </li>
                  <li>A Scout is courteous.</li>
                  <li>
                    A Scout is a friend to animals and loves nature.
                  </li>
                  <li>
                    A Scout is disciplined and helps protect public property.
                  </li>
                  <li>A Scout is courageous.</li>
                  <li>A Scout is thrifty.</li>
                  <li>
                    A Scout is pure in thought, word and deed.
                  </li>
                </ol>

              </div>


              <div className="scout-point">

                <h4 className="point-title">
                  • MOTTO :
                </h4>

                <p className="point-text">
                  The Scout motto is "Be Prepared". This has to be achieved by
                  being physically strong, mentally awake and morally straight.
                </p>

              </div>


              <div className="scout-point">

                <h4 className="point-title">
                  • SIGN :
                </h4>

                <p className="point-text">
                  The Scout sign is given by raising the right hand in level
                  with the shoulder, palm to the front with three fingers
                  stretched together and the thumb closing on the little
                  finger.
                </p>

              </div>


              <div className="scout-point">

                <h4 className="point-title">
                  • SALUTE :
                </h4>

                <p className="point-text">
                  The Scout Salute is given by raising the right arm smartly
                  to the level of the shoulder, palm to the front with three
                  fingers stretched together, the first touching the forehead
                  above the centre of right eye brow and thumb closing on the
                  little finger. After salute the arm is smartly brought down.
                  If a stick or thumb stick is carried, it must be passed to
                  left hand or kept under left arm pit. When a staff is carried
                  the salute is given with left forearm bent at right angle at
                  elbow with three fingers open, thumb closing on the little
                  finger palm downwards, the first finger touching the staff.
                  When hands are occupied, the salute is given by eyes left or
                  right as the case may be.
                </p>

              </div>

            </div>

          </div>


          {/* SECOND IMAGE */}

          <div className="scout-note-image">
            <img
              src="/scout2.jpg"
              alt="Scout Programme"
            />
          </div>

        </div>


        {/* ==========================================
            SECTION 3 - ADVANCEMENT
        ========================================== */}

        <div className="scout-advancement-section">

          <div className="scout-advancement">

            <h3>
              Advancement Scheme Of Scout Section
            </h3>

            <p>
              Explore the complete advancement scheme and requirements for
              the Scout Section.
            </p>

            <a
              href="https://issuu.com/thebharatscoutsandguides/docs/apro-ii_page_complete_book"
              target="_blank"
              rel="noopener noreferrer"
              className="more-details-btn"
            >
              More Details
              <span>→</span>
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}