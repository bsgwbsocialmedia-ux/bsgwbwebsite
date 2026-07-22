import './ByeLaws.css';

export default function ByeLaws() {

  const pdfs = [
    {
      title: 'BHARAT SCOUT AND GUIDE WESTBENGAL-STATE BYE LAWS',
      link: '/bye-laws/state-bye-laws.pdf'
    },
    {
      title: 'BHARAT SCOUT AND GUIDE WESTBENGAL-DISTRICT BYE LAWS',
      link: '/bye-laws/district-bye-laws.pdf'
    }
  ];

  return (
    <div className="bye-page">

      <div className="bye-hero">
        <h1>Bye Laws</h1>
        <p>
          Download the official Bye Laws of Bharat Scouts and Guides.
        </p>
      </div>

      <div className="bye-container">
        {pdfs.map((item, index) => (
          <div className="bye-row" key={index}>
            <div className="bye-title">
              <span className="bye-icon">📄</span>
              <h2>{item.title}</h2>
            </div>
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bye-download-btn"
            >
              <span className="download-icon">⬇️</span>
              Download PDF
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}