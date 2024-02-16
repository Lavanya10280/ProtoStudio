import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="https://www.instagram.com/thefoodiechefff/?hl=en"><img src="/instagram.png" alt="Instagram" /></a>
        <a href="https://www.youtube.com/playlist?list=PLlS27tHjEWD-L0qNwqI_XTb16xH6MADVe"><img src="/youtube.png" alt="YouTube" /></a>
        <a href="https://twitter.com/cafecoffeeday?lang=en"><img src="/twitter.png" alt="Twitter" /></a>
      </div>
      <div className="contact-info">
        <h4>GET IN TOUCH</h4>
        <p>5/278, Saravanampatti, Coimbatore.</p>
        <p>Email: yummysite@gmail.com</p>
        <p>Phone: 9081264520</p>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Yummysite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
