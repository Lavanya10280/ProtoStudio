import React, { useState } from 'react';
import Header from './Header';
import ShoppingCart from './ShoppingCart'; 
import FoodCart from './FoodCart';
import Footer from './Footer';
import './PageLayout.css';

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
        <div className="food-cards">
          {/* Render FoodCart component and pass addItemToCart function as prop */}
          <FoodCart addItemToCart={addItemToCart} />
        </div>
        <div className="shopping-cart">
          {/* Render ShoppingCart component and pass cartItems as prop */}
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
