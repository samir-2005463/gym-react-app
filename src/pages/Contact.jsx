function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with our fitness experts.</p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>FitZone Gym</h2>

          <p>📞 +91 9876543210</p>
          <p>📧 fitzonegym@gmail.com</p>
          <p>📍 Mumbai, India</p>

          <p>
            Join our gym and start your fitness journey today.
          </p>
        </div>

        <div className="contact-form">
          <form>
            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;