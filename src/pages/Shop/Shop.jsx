import './Shop.css';

const shopDetails = {
  address: 'YOUR SHOP ADDRESS',
  phone: '+91 XXXXXXXXXX',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=YOUR+SHOP+ADDRESS'
};

const products = [
  {
    name: 'Scout Uniform',
    image: '/images/shop/scout-uniform.jpg'
  },
  {
    name: 'Scout Belt',
    image: '/images/shop/scout-belt.jpg'
  },
  {
    name: 'Scout Cap',
    image: '/images/shop/scout-cap.jpg'
  },
  {
    name: 'Scout Badge',
    image: '/images/shop/scout-badge.jpg'
  },
  {
    name: 'Scout Scarf',
    image: '/images/shop/scout-scarf.jpg'
  },
  {
    name: 'Camping Tent',
    image: '/images/shop/camping-tent.jpg'
  }
];

export default function Shop() {
  return (
    <div className="shop-page">

      {/* HERO */}

      <section className="shop-hero">

        <div className="shop-hero-content">

          <span className="shop-eyebrow">
            BHARAT SCOUTS & GUIDES • WEST BENGAL
          </span>

          <h1>
            Scouting Accessories Store
          </h1>

          <p>
            Official scouting materials, uniforms and accessories.
          </p>

        </div>

      </section>


      {/* INTRO */}

      <section className="shop-intro">

        <span className="shop-section-label">
          OFFICIAL STORE
        </span>

        <h2>
          Scouting Essentials
        </h2>

        <p>
          Browse our range of official scouting products.
          For prices and purchases, please visit our physical store.
        </p>

      </section>


      {/* PRODUCTS */}

      <section className="shop-grid">

        {products.map((product) => (

          <div
            className="shop-card"
            key={product.name}
          >

            <div className="shop-image-wrapper">

              <img
                src={product.image}
                alt={product.name}
                className="shop-product-image"
              />

            </div>

            <div className="shop-card-content">

              <h3>
                {product.name}
              </h3>

              <span className="shop-view-text">
                Available at physical store
              </span>

            </div>

          </div>

        ))}

      </section>


      {/* STORE INFORMATION */}

      <section className="shop-contact">

        <div className="shop-contact-content">

          <span className="shop-section-label">
            VISIT OUR STORE
          </span>

          <h2>
            Get Your Scouting Essentials
          </h2>

          <p>
            Prices and product availability are available
            at our physical store.
          </p>


          {/* STORE DETAILS */}

          <div className="shop-details">

            {/* GOOGLE MAP ADDRESS */}

            <a
              href={shopDetails.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-detail shop-address-link"
            >

              <div className="shop-detail-icon">
                📍
              </div>

              <div>

                <span>
                  Store Address
                </span>

                <strong>
                  {shopDetails.address}
                </strong>

              </div>

            </a>


            {/* PHONE */}

            <a
              href={`tel:${shopDetails.phone.replace(/\s/g, '')}`}
              className="shop-detail shop-phone-link"
            >

              <div className="shop-detail-icon">
                ☎
              </div>

              <div>

                <span>
                  Contact
                </span>

                <strong>
                  {shopDetails.phone}
                </strong>

              </div>

            </a>

          </div>


          {/* CALL BUTTON */}

          <a
            href={`tel:${shopDetails.phone.replace(/\s/g, '')}`}
            className="shop-call-btn"
          >
            Call Store
          </a>

        </div>

      </section>

    </div>
  );
}