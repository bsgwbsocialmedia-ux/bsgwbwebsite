import './DistrictAssociation.css';

export default function DistrictAssociation() {

  const pdfs = [
    {
      title: 'District Council',
      file: '/district-association/district-council.pdf'
    },
    {
      title: 'District Executive',
      file: '/district-association/district-executive.pdf'
    }
  ];

  return (
    <div className="district-page">

      <div className="district-hero">
        <h1>District Association</h1>
        <p>
          Understanding the structure and governance of District Association.
        </p>
      </div>

      <div className="district-content">

        {/* Left Side - Chart Image */}
        <div className="district-chart">
          <img
            src="/images/district-structure.png"
            alt="District Structure Chart"
          />
        </div>

        {/* Right Side - PDF Downloads */}
        <div className="district-pdf">

          <h2>📄 Download PDFs</h2>

          {pdfs.map((item, index) => (
            <div className="pdf-row" key={index}>
              <span className="pdf-title">{item.title}</span>
              <a 
                href={item.file} 
                target="_blank" 
                rel="noopener noreferrer"
                className="pdf-download-btn"
              >
                ⬇️ Download
              </a>
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}