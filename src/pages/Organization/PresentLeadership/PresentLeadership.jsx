import './PresentLeadership.css';

const leadershipData = [
  {
    id: 1,
    title: 'PRESIDENT AND CHIEF PATRON',
    name: 'DR. R.N.RAVI',
    designation: 'GOVERNOR OF WEST BENGAL',
    imageUrl: '/images/president.jpg'
  },
  {
    id: 2,
    title: 'VICE-PRESIDENT',
    name: 'MRS. ARATI MITRA',
    designation: 'VICE-PRESIDENT',
    imageUrl: '/images/secretary-general.jpg'
  },
  {
    id: 3,
    title: 'VICE-PRESIDENT',
    name: 'MISS KHORSHED PESI AVARI',
    designation: 'VICE-PRESIDENT',
    imageUrl: '/images/vice-president-1.jpg'
  },
  {
   id: 4,
    title: 'VICE-PRESIDENT',
    name: 'DR. ARCHANA MAJUMDAR',
    designation: 'VICE-PRESIDENT',
    imageUrl: '/images/vice-president-1.jpg'
  },
  {
    id: 5,
    title: 'VICE-PRESIDENT',
    name: 'MRS. PRIYANKA MUKHERJEE',
    designation: 'VICE-PRESIDENT',
    imageUrl: '/images/vice-president-3.jpg'
  },
  {
    id: 6,
    title: 'VICE-PRESIDENT',
    name: 'MR. AMAL CHATTERJEE',
    designation: 'VICE-PRESIDENT',
    imageUrl: '/images/vice-president-4.jpg'
  },
  {
    id: 7,
    title: 'VICE-PRESIDENT',
    name: 'MR. KUNDAN LAL TAMTA',
    designation: 'I.P.S(Retd)',
    imageUrl: '/images/vice-president-5.jpg'
  },
  {
    id: 8,
    title: 'VICE-PRESIDENT',
    name: 'MR. SANDHI MUKHERJEE',
    designation: 'I.P.S(Retd)',
    imageUrl: '/images/chief-national-commissioner.jpg'
  },
  {
    id: 9,
    title: 'VICE-PRESIDENT',
    name: 'MR. HARSH VARDHAN SHRINGLA',
    designation: 'M.P(RAJYA SHABA',
    imageUrl: '/images/addl-chief-national-commissioner.jpg'
  },
  {
    id: 10,
    title: 'VICE-PRESIDENT',
    name: 'MR. DEBADITYA CHAKRABARTI',
    designation: 'IAS (Retd.)',
    imageUrl: '/images/chief-commissioner-scouts.jpg'
  },
  {
    id: 11,
    title: 'VICE-PRESIDENT',
    name: 'MR. KRISHNENDU MUKHERJEE',
    designation: 'M.L.A',
    imageUrl: '/images/chief-commissioner-scouts.jpg'
  },
  {
    id: 12,
    title: 'VICE-PRESIDENT',
    name: 'MR. RATHIN GHOSH',
    designation: 'M.L.A',
    imageUrl: '/images/chief-commissioner-scouts.jpg'
  },
  {
    id: 12,
    title: 'VICE-PRESIDENT',
    name: 'MR. RAJ (SUPRATIM) BASU',
    designation: 'VICE-PRESIDENT',
    imageUrl: '/images/chief-commissioner-scouts.jpg'
  },
  {
    id: 13,
    title: 'STATE CHIEF COMMISSIONER',
    name: 'MR. SHYAMAL KUMAR BISWAS',
    designation: 'STATE CHIEF COMMISSIONER',
    imageUrl:  '/images/State-chief-commisioner.jpg'
  },
   
];

export default function PresentLeadership() {
  return (
    <div className="leadership-page">

      <div className="leadership-hero">
        <h1>LEADERS(2026-2031)</h1>
        <p>
          Meet the dedicated leaders guiding the Bharat Scouts and Guides, West Bengal.
        </p>
      </div>

      <div className="leadership-grid">
        {leadershipData.map((leader) => (
          <div className="leader-card" key={leader.id}>
            <div className="leader-image-wrapper">
              <img
                src={leader.imageUrl}
                alt={leader.name}
                className="leader-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const placeholder = document.createElement('div');
                  placeholder.className = 'leader-placeholder';
                  placeholder.innerHTML = `
                    <span class="placeholder-icon">👤</span>
                    <span class="placeholder-text">${leader.name.charAt(0)}</span>
                  `;
                  e.target.parentElement.appendChild(placeholder);
                }}
              />
            </div>
            <div className="leader-details">
              <span className="leader-title">{leader.title}</span>
              <h3 className="leader-name">{leader.name}</h3>
              <p className="leader-designation">{leader.designation}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}