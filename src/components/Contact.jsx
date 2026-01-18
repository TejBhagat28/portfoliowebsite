import { useState } from "react";
import "../styles/contact.scss";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact">
      <h1>Get In Touch</h1>

      <div className="contact-card">
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              required
            />

            <textarea
              placeholder="Your Feedback"
              rows="5"
              required
            />

            <button type="submit">Submit</button>
          </form>
        ) : (
          <div className="success-message">
            ✅ Feedback submitted successfully!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
