import React, { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  return (
    <div className="contact-page-wrapper" data-aos="fade-up">
      <h1 className="primary-heading">Have Question To Ask Us</h1>
      <h1 className="primary-heading">Let Us Help You</h1>

      {/* Row with Address + Form */}
      <div className="contact-row">
        {/* Address */}
        <div className="contact-address">
          <h2>Our Address</h2>
          <p>123 Main Street</p>
          <p>Kampala, Uganda</p>
          <p>Email: support@example.com</p>
          <p>Phone: +256 700 123 456</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form" action="" method="post">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Enter subject"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
