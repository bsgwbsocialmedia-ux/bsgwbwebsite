import './Awards.css';

const awardsData = [
  {
    id: 1,
    name: 'Rashtrapati Award',
    years: [
      { year: '2024', pdf: '/awards/rastrapati-2024.pdf' },
      { year: '2025', pdf: '/awards/rastrapati-2025.pdf' },
      { year: '2026', pdf: '/awards/rastrapati-2026.pdf' },
    ]
  },
  {
    id: 2,
    name: 'Rajya Puraskar Award',
    years: [
      { year: '2024', pdf: '/awards/rajya-puraskar-2024.pdf' },
      { year: '2025', pdf: '/awards/rajya-puraskar-2025.pdf' },
      { year: '2026', pdf: '/awards/rajya-puraskar-2026.pdf' },
    ]
  },
  {
    id: 3,
    name: 'SCC Award',
    years: [
      { year: '2024', pdf: '/awards/scc-2024.pdf' },
      { year: '2025', pdf: '/awards/scc-2025.pdf' },
      { year: '2026', pdf: '/awards/scc-2026.pdf' },
    ]
  }
];

export default function Awards() {
  return (
    <div className="awards-page">

      <div className="awards-hero">
        <h2>AWARDS</h2>
        <p>
          Recognising excellence and dedication in scouting.
        </p>
      </div>

      <div className="awards-container">
        {awardsData.map((award) => (
          <div className="award-box" key={award.id}>
            <h3 className="award-box-title">{award.name}</h3>
            <div className="award-years">
              {award.years.map((item) => (
                <a 
                  key={item.year}
                  href={item.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="year-link"
                >
                  {item.year}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}