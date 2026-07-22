import "./UnitLeaders.css";

export default function UnitLeaders() {
  return (
    <div className="unitleaders-page">

      <div className="unitleaders-hero">
        <h2>Unit Leaders</h2>
        <p>
          Training Programme for Adult Leaders to deliver the Youth programme effectively.
        </p>
      </div>

      <div className="unitleaders-content">

        {/* Section 1: Training Programme - With Image */}
        <div className="unitleaders-section">
          <div className="unitleaders-section-text">
            <p>
              To deliver the Youth programme effectively the Training of the Adult leaders is organized at State level and National Level. The Training programme for the adult is governed by the Scheme of Training of Scout and Guide Wings.
            </p>

            <h3>THE TRAINING PROGRAMME FOR ADULT LEADERS ARE CLASSIFIED BROADLY IN 3 CATEGORIES</h3>
            <ul>
              <li>Training Programme for Unit Leaders those who are attached to the Units.</li>
              <li>Training of Leaders of Adults – Commissioners, Secretaries, Organisers etc.</li>
              <li>Trainers Training – Leaders who conduct the Training of the Unit Leaders.</li>
            </ul>

            <h3>TRAINING OF UNIT LEADERS</h3>
            <ul>
              <li>Basic Course for Unit Leaders – 7 days</li>
              <li>Advanced Course for Unit Leaders – 7 days.</li>
              <li>Himalaya Wood Badge Course for Unit Leaders - 7 days</li>
            </ul>

            <p>
              The Unit leaders Training Courses are conducted separately for Cub, Scout and Rover Sections in Scout wing and Bulbul, Guide and Ranger Sections in Guide Wing.
            </p>

            <h3>FOR ADVANCEMENT OF SKILLS SPECIALIZED COURSES ARE ALSO ORGANIZED</h3>
            <ul className="specialized-courses">
              <li>Pioneering cum Estimation Course</li>
              <li>First Aid Course</li>
              <li>Mapping and Stargazing Course</li>
              <li>Campfire Leaders Course</li>
              <li>Quarter Masters Course</li>
              <li>Sea Scout Leaders Course</li>
              <li>Air Scout Leaders Course</li>
              <li>Grameen Scout Leaders Course</li>
              <li>Vocational Training Course</li>
              <li>Handicraft course</li>
              <li>Yoga course</li>
            </ul>
            <p className="course-note">
              The above courses are organized at the National Level as well as State level.
            </p>
          </div>
          <div className="unitleaders-section-image">
            <img 
              src="/unit.jpg" 
              alt="Unit Leaders Training"
            />
          </div>
        </div>

      </div>
    </div>
  );
}