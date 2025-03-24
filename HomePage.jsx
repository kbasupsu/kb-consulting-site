import React, { useState } from "react";

export default function HomePage() {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Thanks for subscribing! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>K&B Toxicological Consulting</h1>
      <p>Expert Toxicology Solutions for a Safer World</p>

      <section>
        <h2>About Us</h2>
        <p>
          K&B Toxicological Consulting is a scientific consulting firm based in
          Silver Spring, Maryland. We specialize in toxicological risk assessments,
          chemical safety evaluations, and regulatory support services.
        </p>
      </section>

      <section>
        <h2>Services</h2>
        <ul>
          <li>Occupational Exposure Limit (OEL) Derivations</li>
          <li>Toxicological Risk Assessments (TRAs)</li>
          <li>Medical Device Biocompatibility Evaluations (ISO 10993 series)</li>
          <li>Regulatory Strategy and Safety Documentation</li>
          <li>Data Review and Hazard Communication</li>
        </ul>
      </section>

      <section>
        <h2>Newsletter Signup</h2>
        <form onSubmit={handleNewsletterSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {formStatus && <p>{formStatus}</p>}
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>Silver Spring, MD 20902, USA</p>
        <p>Email: contact@kbtoxicology.com</p>
        <p>Phone: (123) 456-7890</p>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}
