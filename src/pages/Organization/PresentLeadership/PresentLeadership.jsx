import './PresentLeadership.css';

const leadershipData = [
  {
    id: 1,
    title: 'PRESIDENT',
    name: 'DR. ANIL KUMAR JAIN',
    designation: 'President',
    imageUrl: '/images/president.jpg'
  },
  {
    id: 2,
    title: 'SECRETARY GENERAL',
    name: 'SHRI P. G. R. SINDHIA',
    designation: 'Secretary General, President-in-Council',
    imageUrl: '/images/secretary-general.jpg'
  },
  {
    id: 3,
    title: 'VICE-PRESIDENT',
    name: 'SHRI KALI PRASAD MISHRA',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-1.jpg'
  },
  {
    id: 4,
    title: 'VICE-PRESIDENT',
    name: 'SHRI SATYANARAYAN SHARMA',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-2.jpg'
  },
  {
    id: 5,
    title: 'VICE-PRESIDENT',
    name: 'SMT. GEETHA NATARAJ',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-3.jpg'
  },
  {
    id: 6,
    title: 'VICE-PRESIDENT',
    name: 'SMT. VIMLA MEGHWAL',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-4.jpg'
  },
  {
    id: 7,
    title: 'VICE-PRESIDENT',
    name: 'SHRI CHANDRAJIT SAIKIA',
    designation: 'Vice-President',
    imageUrl: '/images/vice-president-5.jpg'
  },
  {
    id: 8,
    title: 'CHIEF NATIONAL COMMISSIONER',
    name: 'DR. K. K. KHANDELWAL',
    designation: 'Chief National Commissioner',
    imageUrl: '/images/chief-national-commissioner.jpg'
  },
  {
    id: 9,
    title: 'ADDL. CHIEF NATIONAL COMMISSIONER',
    name: 'M. A. KHALID',
    designation: 'Addl. Chief National Commissioner',
    imageUrl: '/images/addl-chief-national-commissioner.jpg'
  },
  {
    id: 10,
    title: 'CHIEF COMMISSIONER OF SCOUTS',
    name: 'SHRI S. K. BISWAS',
    designation: 'Chief Commissioner of Scouts',
    imageUrl: '/images/chief-commissioner-scouts.jpg'
  },
  {
    id: 11,
    title: 'CHIEF COMMISSIONER OF GUIDES',
    name: 'DR. (SMT.) PANKAJ MITTAL',
    designation: 'Chief Commissioner of Guides',
    imageUrl: '/images/chief-commissioner-guides.jpg'
  }
];

export default function PresentLeadership() {
  return (
    <div className="leadership-page">

      <div className="leadership-hero">
        <h1>Present Leadership</h1>
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