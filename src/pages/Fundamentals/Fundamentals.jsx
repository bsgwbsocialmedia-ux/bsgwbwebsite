import React from "react";
import "./Fundamentals.css";

const principles = [
  {
    title: "Duty to God",
    description: "Adherence to spiritual principles, loyalty to the religion that expresses them and acceptance of the duties resulting there from.",
  },
  {
    title: "Duty to Others",
    description: "Loyalty to one's country in harmony of local, National and International peace, understanding, and co-operation. This amounts to participation in the development of society with recognition and respect for the dignity of one's fellowmen and for the integrity of the natural world.",
  },
  {
    title: "Duty to Self",
    description: "Responsibility for the development of one's own capacities. This is fully in harmony with the educational purpose of the Scout Movement, whose aim is to assist the young person in the full development of potentials - a process which has been called the 'unfolding' of the personality.",
  },
];

const methodPoints = [
  "Promise and Law",
  "Learning by Doing",
  "Membership of small groups under adult leadership involving progressive discovery and acceptance of responsibility and training towards self-government directed towards the development of character, and the acquisition of competence, self-reliance, dependability and capacities to co-operate and to lead.",
];

const methodPoint4 = "Progressive and stimulating programmes of various activities based on the interests of the participants including games, useful skills and services to the community taking place largely in an outdoor setting in contact with nature.";

const videos = [
  {
    title: "Bharat Scouts & Guides - Introduction",
    embed: "https://www.youtube.com/embed/SRBJcg_d7_s",
  },
  {
    title: "Scout Promise & Law Explained",
    embed: "https://www.youtube.com/embed/YuiXZ5KJL4w",
  },
];

const Fundamentals = () => {
  return (
    <div className="fundamentals-page">

      <section className="fundamentals-hero">
        <div className="fund-container">
          <h1>Fundamentals</h1>
          <p className="hero-subtitle">
            Understanding the values, purpose and principles that make
            Scouting & Guiding one of the world's largest youth movements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="fund-container">
          <h2>Definition</h2>
          <div className="section-content">
            <p>
              <strong>“The Bharat Scouts and Guides is a voluntary, non-political, educational Movement for young people, open to all without distinction of origin, race or creed, in accordance with the purpose, principles and methods conceived by the founder Lord Baden-Powell in 1907.”</strong> 
              <br /><br />
              <em>(The voluntary character of Scouting/Guiding emphasises the fact that members adhere to it by their own free will and because they accept the fundamentals of the Movement.)</em>
            </p>
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="fund-container">
          <h2>Purpose</h2>
          <div className="section-content">
            <p>
              The purpose of the Movement is to contribute to the development of young people in achieving their full physical, intellectual, emotional, social and spiritual potentials as individuals, as responsible citizens and as members of the local, National and International communities.
            </p>
            <br />
            <p>
              It is also important to point out that the concept of responsible citizenship, which is one of the fundamental goals of Scouting/Guiding, must be understood in a broad context. Thus, a person is, first and foremost, an individual. This individual is integrated into her community, which is part of a wider political structure (district, province, state, etc.,) the total expression of which is the sovereign state or country. A responsible citizen must be aware of her rights and obligations in relation to the various communities to which she belongs.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="fund-container">
          <h2>Principles</h2>
          <div className="section-content">
            <p>
              The principles are the fundamental laws and beliefs which must be observed when achieving the purpose. They represent a code of conduct which characterises all members of the Movement.
            </p>
            <br />
            <p>
              Scouting/Guiding is based upon three broad principles which represent its fundamental laws and beliefs.
            </p>
            <br />
            <p>
              They are referred to as: <strong>“Duty to God”</strong>, <strong>“Duty to others”</strong> and <strong>“Duty to self”</strong>.
            </p>
          </div>

          <div className="principles-grid">
            {principles.map((item, index) => (
              <div className="principle-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section gray">
        <div className="fund-container">
          <h2>The Method</h2>
          <div className="section-content">
            <p>The Method is a system of progressive self-education through:</p>
          </div>

          <div className="method-grid">
            {methodPoints.map((item, index) => (
              <div className="method-card" key={index}>
                <span>{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="method-point-4">
            <p>{methodPoint4}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="fund-container">
          <h2>Watch & Learn</h2>
          <p className="video-section-subtitle">
            Explore these videos to understand more about the Bharat Scouts & Guides Movement.
          </p>

          <div className="video-grid">
            {videos.map((video, index) => (
              <div className="video-card" key={index}>
                <div className="video-wrapper">
                  <iframe
                    src={video.embed}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <h4>{video.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Fundamentals;