import React, { useState } from 'react';
import './ShoppingCart.css';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentPopup = ({ amountToPay }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePayment = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the popup after 3 seconds
  };

  return (
    <div>
      <button onClick={handlePayment} className="PaymentModel payButton">Pay ${amountToPay}</button>
      {isVisible && (
        <div className="popup-message visible">
          <FaCheckCircle className="tick-icon" />
          <p>Payment successful!</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPopup;

