import React, { useState } from 'react';
import Header from './Header';
import FoodCart from './FoodCart';
import Footer from './Footer';
import { CartProvider } from './CartContext';

import Slider from'./Slider';

const PageLayout = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div>
      <Slider />
      <div className='restaurant-page'>
      <div className="food-cards">
        <FoodCart />
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
