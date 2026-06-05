import './Shop.css';

const products = [
  {
    name: 'Scout Uniform',
    price: '₹1200',
    icon: '🥋'
  },
  {
    name: 'Scout Belt',
    price: '₹350',
    icon: '🪢'
  },
  {
    name: 'Scout Cap',
    price: '₹450',
    icon: '🧢'
  },
  {
    name: 'Scout Badge',
    price: '₹120',
    icon: '🏅'
  },
  {
    name: 'Scout Scarf',
    price: '₹250',
    icon: '🧣'
  },
  {
    name: 'Camping Tent',
    price: '₹3200',
    icon: '⛺'
  },
];

export default function Shop({ setActiveTab }) {
  return (
    <div className="shop-page">

      <div className="shop-hero">
        <h2>Scout Accessories Store</h2>
        <p>
          Official scouting materials and uniforms.
        </p>
      </div>

      <div className="shop-grid">

        {products.map((product, index) => (
          <div className="shop-card" key={index}>

            <div className="shop-icon">
              {product.icon}
            </div>

            <h3>{product.name}</h3>

            <div className="shop-price">
              {product.price}
            </div>

            <button
              className="buy-btn"
              onClick={() => setActiveTab('contact')}
            >
              Buy Now
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}