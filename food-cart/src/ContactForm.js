import React, { useState } from 'react';
import './ContactForm.css'; // Import your CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    // Here you can perform validation or send the data to your backend
    console.log("Name: " + formData.name);
    console.log("Email: " + formData.email);
    console.log("Phone: " + formData.phone);
    console.log("Message: " + formData.message);

    // Show pop-up message
    alert("Message Sent");
  };

  return (
    <div className="contact-text">
      <div>
      <h2>We would love to receive your valuable feedback!</h2>
      </div>
    <div className="contact-form">
      <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <input type="email" id="email" placeholder="Your Mail" value={formData.email} onChange={handleChange} />
      <input type="tel" id="phone" placeholder="Your Phone Number" value={formData.phone} onChange={handleChange} />
      <textarea id="message" placeholder="Your Message" value={formData.message} onChange={handleChange} />
      <button id="send-button" onClick={handleSubmit}>Send</button>
    </div>
    </div>
  );
};

export default ContactForm;
