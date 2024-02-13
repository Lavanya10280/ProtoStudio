import React, { useState } from 'react';
import Header from './Header';
import FoodCart from './FoodCart';
import Footer from './Footer';
import './PageLayout.css';
import Slider from'./slider';

const PageLayout = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Header />
      <div className='restaurant-page'>
        <Slider />
          {/* Render FoodCart component and pass addItemToCart function as prop */}
          <FoodCart addItemToCart={addItemToCart} />
        
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
