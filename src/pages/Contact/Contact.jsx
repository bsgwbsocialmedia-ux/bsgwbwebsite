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
          Bharat Scouts And Guides — West Bengal 
        </p>
      </div>

      <div className="contact-grid">

        {/* Contact Details */}
        <div className="contact-card">

          <h3>Contact Information</h3>

          <div className="contact-info">

            <div className="contact-item">
              <span>📍</span>
              <p>Scout Office: 5, Government Place, North Kolkata - 700001,(Near Lok Bhawan North Gate), West Bengal, India</p>
               <p>Guide Office: Guide Annex 1, Palace Court, 1,Kyd Street ,near Park Street, Kolkata - 700016.</p>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <p>+91 03322621599/ +91 8100161817 (For Equipment Department)</p>
            </div>

            <div className="contact-item">
              <span>✉️</span>
              <p>bsgwbshq@gmail.com / bsgwb.equipment@gmail.com</p>
            </div>

            <div className="contact-item">
              <span>🌐</span>
              <p>www.bsgwb.org</p>
            </div>

          </div>

          {/* Become a Partner Text - Added Here */}
          <div className="partner-text">
            <p className="partner-text-title">🤝 Become a Partner</p>
            <p className="partner-text-desc">
              Interested in partnering with us? Reach out to us at{' '}
              <a href="mailto:bsgwbshq@gmail.com">bsgwbshq@gmail.com</a> or call{' '}
              <a href="tel:+919051238821">+91 9330321982</a>
            </p>
          </div>

          <div className="contact-map">

            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2716401447733!2d88.3473534!3d22.5689415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a1667b0d5b%3A0x176318a1bec86b62!2sBharat%20Scouts%20Guides!5e0!3m2!1sen!2sin!4v1784648025407!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
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