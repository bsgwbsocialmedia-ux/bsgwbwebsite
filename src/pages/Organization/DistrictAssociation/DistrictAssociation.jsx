import './DistrictAssociation.css';

export default function DistrictAssociation() {

  const pdfs = [
    {
      title: 'District Council',
      file: '#'
    },
    {
      title: 'District Executive',
      file: '#'
    }
  ];

  return (
    <div className="district-page">

      <div className="district-banner">

        <img
          src="/images/district-banner.jpg"
          alt=""
        />

      </div>

      <div className="district-content">

        <div className="district-chart">

          <img
            src="/images/district-structure.png"
            alt=""
          />

        </div>

        <div className="district-pdf">

          <h2>PDF Download</h2>

          {pdfs.map((item,index)=>(
            <div
              className="pdf-row"
              key={index}
            >

              <span>{item.title}</span>

              <a href={item.file}>
                Download
              </a>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}