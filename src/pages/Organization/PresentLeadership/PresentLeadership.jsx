import './PresentLeadership.css';

const leadershipData = [
  {
    id: 1,
    title: 'CHIEF PATRON AND VICE PRESIDENT',
    name: 'SHRI R.N.RAVI',
    designation: 'GOVERNOR OF WEST BENGAL',
    imageUrl: '/images/president.jpg'
  },
  {
    id: 2,
    title: 'ACTING PRESIDENT',
    name: 'MRS. ARATI MITRA',
    designation: 'ACTING PRESIDENT',
    imageUrl: '/images/secretary-general.jpg'
  },
  {
    id: 3,
    title: 'VICE-PRESIDENT',
    name: 'DR. ARCHANA MUKHERJEE',
    designation: 'IPS(Retd.)',
    imageUrl: '/images/vice-president-1.jpg'
  },
  {
    id: 4,
    title: 'VICE-PRESIDENT',
    name: 'MR. MUKUL ROY',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-2.jpg'
  },
  {
    id: 5,
    title: 'VICE-PRESIDENT',
    name: 'MR. ATINDRA NARAYAN CHOWDHURY',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-3.jpg'
  },
  {
    id: 6,
    title: 'VICE-PRESIDENT',
    name: 'MR. JEEWAN PRAKESH GURUNG',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-4.jpg'
  },
  {
    id: 7,
    title: 'VICE-PRESIDENT',
    name: 'MR. AMAL CHATTERJEE',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-5.jpg'
  },
  {
    id: 8,
    title: 'VICE-PRESIDENT',
    name: 'MISS. GANGOTRI DUTTA',
    designation: 'Vice-President',
    imageUrl: '/images/chief-national-commissioner.jpg'
  },
  {
    id: 9,
    title: 'VICE-PRESIDENT',
    name: 'MRS. SUNITA ARORA',
    designation: 'Vice-President',
    imageUrl: '/images/addl-chief-national-commissioner.jpg'
  },
  {
    id: 10,
    title: 'VICE-PRESIDENT',
    name: 'MRS. MITRA SINGHA ROY',
    designation: 'Vice-President',
    imageUrl: '/images/chief-commissioner-scouts.jpg'
  },
  {
    id: 11,
    title: 'STATE CHIEF COMMISSIONER',
    name: 'MR. DEBADITYA CHAKRABARTI',
    designation: 'IAS(Retd.)',
    imageUrl: '/images/chief-commissioner-guides.jpg'
  },
   {
    id: 11,
    title: 'STATE COMMISSIONER(S)',
    name: 'MR. SHYAMAL KUMAR BISWAS',
    designation: 'STATE COMMISSIONER(S)',
    imageUrl: '/images/chief-commissioner-guides.jpg'
  },
  {
    id: 11,
    title: 'STATE COMMISSIONER(G)',
    name: 'DR. SIKHA BANERJEE',
    designation: 'STATE COMMISSIONER(G)',
    imageUrl: '/images/chief-commissioner-guides.jpg'
  },
];

export default function PresentLeadership() {
  return (
    <div className="leadership-page">

      <div className="leadership-hero">
        <h1>LEADERS(2021-2026)</h1>
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