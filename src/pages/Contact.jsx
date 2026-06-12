function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Get in touch with our fitness experts.</p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>FitZone Gym</h2>

          <p>📞 Contact Available on Request</p>
          <p>📧 samirk20990@gmail.com</p>
          <p>📍 India</p>

          <p>
            Join our gym and start your fitness journey today.
          </p>
        </div>

        <div className="contact-form">
          <form
            action="https://formsubmit.co/samirk20990@gmail.com"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
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