import React, { useState } from 'react';
import './ShoppingCart.css';
import {amountToPay} from './Payment.js';
const PaymentPopup = ({amountToPay}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePayment = () => {
    setIsVisible(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Hide the popup after 5 seconds
  };

  return (
    <div>
      <button onClick={handlePayment} className="PaymentModel payButton">Pay ${amountToPay}</button>
      {isVisible && (
        <div className='PaymentPopup'>
          <p>Payment successful</p>
        </div>
      )}
    </div>
  );
};

export default PaymentPopup;
