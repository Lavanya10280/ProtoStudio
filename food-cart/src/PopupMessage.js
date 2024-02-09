// PopupMessage.js

import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Import specific icon
import './PopupMessage.css'; // Import your stylesheet

const PopupMessage = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 5000); // Close the message after 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`popup-message ${visible ? 'visible' : ''}`}>
      <FaCheckCircle className="tick-icon" />
      <p>{message}</p>
    </div>
  );
};

export default PopupMessage;
