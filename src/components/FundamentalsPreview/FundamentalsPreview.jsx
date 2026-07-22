import React from "react";
import { Link } from "react-router-dom";
import "./FundamentalsPreview.css";

const cards = [
  {
    id: 1,
    title: "Fundamentals",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800",
    description: "Learn the fundamentals of Scouting & Guiding including its purpose, principles, method, promise and law that shape responsible citizens.",
    path: "/fundamentals",
  },
  {
    id: 2,
    title: "The Beginning",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800",
    description: "Discover the inspiring journey of the Scout & Guide Movement from its origin to the establishment of Bharat Scouts & Guides in India.",
    path: "/beginning",
  },
];

const FundamentalsPreview = () => {
  return (
    <section className="fundamentals-preview">
      <div className="fp-container">

        <div className="section-heading">
          <span className="sub-title">Know About BSG</span>

          <h2>
            The Bharat Scouts & Guides is a Voluntary, Non-Political,
            Educational Movement for Young People.
          </h2>

          <p>
            Bharat Scouts & Guides aims to develop character, leadership,
            discipline, self-reliance and a spirit of service through
            adventurous activities and community participation.
          </p>
        </div>

        <div className="cards-grid">
          {cards.map((card) => (
            <div className="info-card" key={card.id}>

              <div className="card-image">
                <img src={card.image} alt={card.title} />
              </div>

              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>

                <Link to={card.path} className="read-more-btn">
                  Read More <span>→</span>
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FundamentalsPreview;