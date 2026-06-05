import './District.css';

const districts = [
  'Kolkata',
  'Howrah',
  'Darjeeling',
  'Murshidabad',
  'Malda',
  'Hooghly',
  'Bankura',
  'Purulia',
  'Nadia',
  'Birbhum',
  'Cooch Behar',
  'Jalpaiguri',
];

export default function District() {
  return (
    <div className="district-page">

      <div className="district-hero">
        <h2>West Bengal District Associations</h2>
        <p>
          Bharat Scouts & Guides operates through district associations
          across West Bengal.
        </p>
      </div>

      <div className="district-grid">

        {districts.map((district, index) => (
          <div className="district-card" key={index}>

            <div className="district-icon">📍</div>

            <h3>{district}</h3>

            <p>
              Local Association of {district} Bharat Scouts & Guides
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}