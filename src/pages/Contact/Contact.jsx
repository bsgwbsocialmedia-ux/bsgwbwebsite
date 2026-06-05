import './Contact.css';

export default function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been submitted successfully!');
  };

  return (
    <div className="contact-page">

      <div className="contact-hero">
        <h2>Contact Us</h2>

        <p>
          Bharat Scouts & Guides — West Bengal State Council
        </p>
      </div>

      <div className="contact-grid">

        {/* Contact Details */}
        <div className="contact-card">

          <h3>Contact Information</h3>

          <div className="contact-info">

            <div className="contact-item">
              <span>📍</span>
              <p>Kolkata, West Bengal, India</p>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <p>+91 9876543210</p>
            </div>

            <div className="contact-item">
              <span>✉️</span>
              <p>info@bsgwb.org</p>
            </div>

            <div className="contact-item">
              <span>🌐</span>
              <p>www.bsgwb.org</p>
            </div>

          </div>

          <div className="contact-map">

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.6201884793495!2d88.363895!3d22.572646"
              loading="lazy"
            ></iframe>

          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-card">

          <h3>Send Message</h3>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>

              <input
                type="tel"
                placeholder="Enter your number"
              />
            </div>

            <div className="form-group">
              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}