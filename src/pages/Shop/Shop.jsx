import './Shop.css';

const shopDetails = {
  address:
    '5,GOVERNMENT PLACE, NORTH KOLKATA - 700001 (NEAR LOK BHAVAN NORTH GATE)',

  phone:
    '+91 8100161817, PH: 03322621599',

  mapLink:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2716401447733!2d88.3473534!3d22.5689415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a1667b0d5b%3A0x176318a1bec86b62!2sBharat%20Scouts%20Guides!5e0!3m2!1sen!2sin!4v1784648025407!5m2!1sen!2sin',

  googleMapsLink:
    'https://www.google.com/maps/search/?api=1&query=Bharat+Scouts+Guides+5+Government+Place+Kolkata+700001'
};


const products = [
  {
    name: 'Beret Cap',
    image: '/SHOP/beretcap.jpg'
  },
  {
    name: 'Cap Badge',
    image: '/SHOP/capbadge.webp'
  },
  {
    name: 'Uniform Belt Cub / Scout',
    image: '/SHOP/unifrombelt.webp'
  },
  {
    name: 'Cub Uniform Cap',
    image: '/SHOP/cubcap.jpg'
  },
  {
    name: 'Sash - Guide Uniform',
    image: '/SHOP/sashguideuniform.jpg'
  },
  {
    name: 'Guide Uniform Saree',
    image: '/SHOP/guideuniformsaree.jpg'
  },
  {
    name: 'Dupatta',
    image: '/SHOP/dupattaranger.jpg'
  },{
    name: 'Bulbul Uniform Stitched Overall',
    image: '/SHOP/bulbuluniform.jpg'
  },{
    name: 'Pravesh Badge S/G New Round Embroidery',
    image: '/SHOP/pravesh badge.webp'
  },{
    name: 'Right Shoulder Badge Bharat / India',
    image: '/SHOP/rightshoulderbadge.webp'
  },{
    name: 'World Scout Badge New Round Embroidery',
    image: '/SHOP/worldscoutbadge.webp'
  },{
    name: 'World Guide Badge New Round Embroidery',
    image: '/SHOP/worldguidebadge.webp'
  },{
    name: 'Pravesh Badge R/R New Round Embroidery',
    image: '/SHOP/roverpraveshbadge.webp'
  },{
    name: 'Sopan Badge Tritiya Emb',
    image: '/SHOP/tritiyasopanbadge.webp'
  },{
    name: 'Pratham Sopan Badges',
    image: '/SHOP/prathansopanbadge.jpg'
  },{
    name: 'Pravesh Badge C/B New Round Embroidery',
    image: '/SHOP/praveshcubbadge.webp'
  },{
    name: 'Rank Badge S.M. (Emb)',
    image: '/SHOP/smrankbadge.jpg'
  },{
    name: 'Rank Badge Commisioners',
    image: '/SHOP/commsionerrankbadge.jpg'
  },{
    name: 'Rank Badge R.S.L.',
    image: '/SHOP/rslrankbadge.jpg'
  },{
    name: 'Rank Badge C.M.',
    image: '/SHOP/cubrankbadge.webp'
  },{
    name: 'Assistant Troop Leader Badge',
    image: '/SHOP/atlbadge.webp'
  },{
    name: 'Troop Leader Badge',
    image: '/SHOP/troopleaderbadge.jpg'
  },{
    name: 'Rank Badge A.C.M.',
    image: '/SHOP/acmrankbadge.webp'
  },{
    name: 'Rank Badge A.R.S.L.',
    image: '/SHOP/arslrankbadge.webp'
  },{
    name: 'Rank Badge A.S.M.',
    image: '/SHOP/asmrankbadge.webp'
  },{
    name: 'Knotting Rope',
    image: '/SHOP/knotting rope.webp'
  },{
    name: 'Unit Flag',
    image: '/SHOP/unitflag.webp'
  },{
    name: 'Association Flag',
    image: '/SHOP/associationflag.webp'
  },{
    name: 'Scout Shirt',
    image: '/SHOP/scoutshirt.jpg'
  },{
    name: 'Woggle Plastic Round',
    image: '/SHOP/woogle.webp'
  },{
    name: 'Scout Pant',
    image: '/SHOP/scoutpant.webp'
  },{
    name: 'National Scarf',
    image: '/SHOP/scarfs.jpg'
  },{
    name: 'Guide/Ranger Belt',
    image: '/SHOP/guide belt.webp'
  },
];


export default function Shop() {
  return (
    <div className="shop-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="shop-hero">

        <div className="shop-hero-content">

          <span className="shop-eyebrow">
            BHARAT SCOUTS &amp; GUIDES • WEST BENGAL
          </span>

          <h1>
            Scouting Accessories Store
          </h1>

          <p>
            Official scouting materials, uniforms and accessories.
          </p>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

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


      {/* =====================================================
          PRODUCTS
      ===================================================== */}

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


      {/* =====================================================
          STORE CONTACT
      ===================================================== */}

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


          {/* =================================================
              STORE DETAILS
          ================================================= */}

          <div className="shop-details">

            {/* ADDRESS */}

            <div className="shop-detail">

              <div className="shop-detail-icon">
                📍
              </div>

              <div className="shop-detail-info">

                <span>
                  Store Address
                </span>

                <strong>
                  {shopDetails.address}
                </strong>

              </div>

            </div>


            {/* PHONE */}

            <a
              href={`tel:${shopDetails.phone.replace(/\s/g, '')}`}
              className="shop-detail shop-phone-link"
            >

              <div className="shop-detail-icon">
                ☎
              </div>

              <div className="shop-detail-info">

                <span>
                  Contact
                </span>

                <strong>
                  {shopDetails.phone}
                </strong>

              </div>

            </a>

          </div>


          {/* =================================================
              MAP
          ================================================= */}

          <div className="shop-location">

            <div className="shop-location-heading">

              <span>
                STORE LOCATION
              </span>

              <h3>
                Find Us
              </h3>

            </div>


            <div className="shop-map">

              <iframe
                src={shopDetails.mapLink}
                title="Bharat Scouts & Guides West Bengal Store Location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>


            <a
              href={shopDetails.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-map-btn"
            >
              Open in Google Maps
              <span>→</span>
            </a>

          </div>


          {/* =================================================
              CALL BUTTON
          ================================================= */}

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