import React from 'react';
import './Footer.css';
//hello

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="social-links">
        <h3>Follow Us</h3>
        <a href="https://youtube.com/@yummy2555?si=-rY04kHimF_ke6w0" className="social-link" target="_blank">
          <img src="utube.jpeg" alt="YouTube" />
        </a>
        <a href="https://x.com/NobuRestaurants?s=20" className="social-link" target="_blank">
          <img src="twitter.png" alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/yummyfried?igsh=MWV6aXZya2ZhcDJodw==" className="social-link" target="_blank">
          <img src="instagram.jpeg" alt="Instagram" />
        </a>
      </div>
      <div className="contact-us">
        <h3>Contact Us</h3>
        <p>Email: yummycafe@gmail.com</p>
        <p>Phone: 9338239010</p>
        <p>Address: Saravanampatti, Coimbatore</p>
      </div>
      <div className="copyrights">
        <p>&copy; 2024 Yummy site. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
