import React, { useState } from 'react';
import './ShoppingCart.css'; 
import PaymentModal from './Payment.js';
import Modal from 'react-modal';
import { useCart } from './CartContext';

const ShoppingCart = ({ isOpen, onClose }) => { 
  const { cartItems: contextCartItems } = useCart(); 
  
  // State for managing cart items
  const [items, setItems] = useState(contextCartItems);

  // State for the payment modal
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false); 
  const [amountToPay, setAmountToPay] = useState(0);

  // Function to remove an item from the cart
  const handleDelete = (itemId) => {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  };

  // Function to increase quantity of an item in the cart
  const handleIncreaseQuantity = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  
  // Function to decrease quantity of an item in the cart
  const handleDecreaseQuantity = (itemId) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Function to calculate subtotal of the items in the cart
  const calculateSubtotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Function to handle payment
  const handlePayment = () => {
    setIsPaymentModalOpen(true); // Open the payment modal
    setAmountToPay(calculateSubtotal()); // Set the amount to pay based on the subtotal
  };

  // Function to close payment modal
  const closePaymentModal = () => {
    setIsPaymentModalOpen(false);
  };

  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onClose}
      className="backround-page"
    >
      <div  className="container">
        <button onClick={onClose} className="closeButton"></button>
        <h1>Your Cart</h1>
      
        {/* List of items */}
        <ul>
          {items.map(item => (
            <li key={item.id} className='itemdesc'>
              <div className='fixed-length-text'>
                {item.name} <br />
                <button onClick={() => handleDelete(item.id)} className='button del'>Delete</button>
              </div> 
              <t /> 
              <div className="text-end">
                ${item.price} 
                <button onClick={() => handleIncreaseQuantity(item.id)} >+</button>
                <div className='quantity-border'> {item.quantity}</div>
                <button onClick={() => handleDecreaseQuantity(item.id)} >-</button><br />
              </div>
            </li>
          ))}
        </ul>

        {/* Subtotal */}
        <p>Subtotal: ${calculateSubtotal()}</p>

        {/* Payment button */}
        <button onClick={handlePayment} className="button payment">Proceed to Payment</button>
        
        {/* Payment Modal */}
        <PaymentModal
          isOpen={isPaymentModalOpen}
          onClose={closePaymentModal}
          amountToPay={amountToPay}
        />
      </div>
    </Modal>
  );
};

export default ShoppingCart;


