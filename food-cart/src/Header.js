// Header.js

import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file for styling
import ShoppingCart from './ShoppingCart';
import LoginModal from './LoginModal'
import { Link, Outlet } from 'react-router-dom';

function Header() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  // useEffect for applying styles removed for brevity

  const openShoppingCart = () => {
    setIsShoppingCartOpen(true);
  };

  const closeShoppingCart = () => {
    setIsShoppingCartOpen(false);
  };

  return (
    <header>
      <div className="logo-container">
      <Link to='/' id= "Link"> 
        <img src="/logo.png" alt="logo" className="logo" />
        </ Link>
      </div>
      <nav>
        <Link to='/Home' id= "homeLink"> Home </Link>
        <Link to='/AboutUs' id= "aboutLink"> About </Link>
        <Link to='/ContactForm' id= "contactLink"> Contact </Link>
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-box" />
        </div>
        <button onClick={openShoppingCart} className='cartButton'>
          <a href="#" id="cartLink">
            {/* You can replace the cart logo URL below with your own */}
            <img src="/shopping-cart.png" alt="Cart Logo" className="cart-logo" />
          </a>
        </button>
      </nav>
      {isShoppingCartOpen && (
        <ShoppingCart
          isOpen={isShoppingCartOpen}
          onClose={closeShoppingCart}
        />
      )}
      <LoginModal />
    </header>
    
  );
 
}

export default Header;
