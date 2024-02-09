import React, { useState } from 'react';
import Modal from 'react-modal';
import './ShoppingCart.css';
import PaymentPopup from './PaymentPopup';

const PaymentModal = ({ isOpen, onClose, amountToPay }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  

  const handlePay = () => {
    // Perform payment logic (e.g., send data to a payment gateway)
    console.log('Payment processed!');
    onClose(); // Close the modal after payment processing (this can be adjusted based on your needs)
  };

  return (
    
    <Modal 
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Payment Modal"
      className="PaymentModal"
    >
      <h1>Payment Details</h1>

      <div className="PaymentModalButtons">
          <button onClick={handlePay} className="paypal">PayPal</button>
          <button onClick={handlePay} className="gpay">Google Pay</button>
        </div>
     
      <hr className="PaymentModal horizontal-line" />

      
      <label>
        Card Number:
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
      </label>
     
      <div className="input-row">
      <div class="exp">
      <label htmlFor="expiryDate"></label>
        Expiry Date:
        <input
          type="text"
          value={expiryDate}
          id="expiryDate"
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      
      <div class="cvc">
      <label htmlFor="cvc"></label>
        CVV:
        <input
          type="text"
          value={cvc}
          id="cvc"
          onChange={(e) => setCvc(e.target.value)}
        />
      </div>
      </div>

      <PaymentPopup amountToPay={amountToPay}/> 

      <div>
        <button onClick={onClose} className="closeButton"></button>
      </div>
    </Modal>
    
    
  );
};

export default PaymentModal;


