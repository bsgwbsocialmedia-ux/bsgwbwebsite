import './TypeOfMembership.css';

export default function TypeOfMembership() {
  return (
    <div className="membership-page">

      <div className="membership-banner">
        <h1>Type Of Membership</h1>
      </div>

      <div className="membership-content">

        <p>
          The Membership of the State Association is open to citizens of India,
          who subscribe to the Purpose and Objects and are residing within the
          territorial jurisdiction of the State Association.
        </p>

        <p>
          Provided, citizen of any other National residing for the time being
          within the territorial jurisdiction of the State Association may be
          admitted as a member on the recommendation of the State Chief
          Commissioner and the approval of the Chief National Commissioner.
        </p>

        <p>
          Provide, further that such person subscribes to the Scout or Guide
          Promise as hereunder:
        </p>

        <div className="promise-box">
          <p>On my Honour I promise that I will do my best</p>
          <p>To do my duty to God* and India</p>
          <p>To help other people and</p>
          <p>To obey the Scout / Guide Law.</p>
        </div>

        <p className="note">
          <strong>Note *</strong> The word "Dharma" may be substituted for the
          word "God" if so desired.
        </p>

        <h2>Member</h2>

        <h3>General Members</h3>

        <ul>
          <li>
            Beneficiaries i.e. Bunnies, Cubs/ Bulbuls, Scouts / Guides,
            Rovers/ Rangers, Sea Scouts/ Sea Guides, Sea Rovers/ Sea Rangers,
            Air Scouts / Air Guides, Air Rovers/ Air Rangers, Grameen Rovers/
            Rangers, Venture Scouts / Guides and Extension Branches.
          </li>

          <li>
            Adult Leaders, i.e. Scouters, Guiders Commissioners, who hold valid
            warrants and Trainers who hold Honorable Charges.
          </li>
        </ul>

        <h3>Life Members</h3>

        <p>
          Life Members are those who are admitted as such by the State
          Executive Committee and who have paid Life Membership Fee as
          prescribed.
        </p>

        <h3>Ordinary Members</h3>

        <p>
          Ordinary Members are those who are admitted as such by the State
          Executive Committee and who have paid Annual Subscription Fee as
          prescribed.
        </p>

        <ul>
          <li>Adult Leaders.</li>
          <li>Member of Divisional, District and Local Association.</li>
        </ul>

        <h3>Institutional Members</h3>

        <p>
          Institutional Members are those who are admitted as such by the State
          Executive Committee and who have paid subscription fee as prescribed.
        </p>

        <p>
          Special Members are those who are admitted as such by the State
          Executive Committee for their meritorious contribution to the
          Movement.
        </p>

        <h2>Termination Of Membership</h2>

        <ul>
          <li>
            If any member is found guilty of criminal offence involving moral
            turpitude, membership shall be terminated.
          </li>

          <li>
            Any member indulging in activities detrimental to the interests of
            the movement or bringing disrepute to the organization shall be
            liable for termination after due enquiry.
          </li>

          <li>
            If any member is found to be a member of any parallel organization
            working in the name of Scouting and Guiding, membership shall be
            terminated.
          </li>
        </ul>

      </div>

    </div>
  );
}