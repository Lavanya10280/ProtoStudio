import React, { useEffect, useState } from 'react';
import './Header.css'; // Import the CSS file for styling
import ShoppingCart from './ShoppingCart';

function Header() {
  const [isShoppingCartOpen, setIsShoppingCartOpen] = useState(false);

  useEffect(() => {
    // JavaScript logic to apply styles and functionality
    const header = document.querySelector('header');
    const logoContainer = document.querySelector('.logo-container');
    const navLinks = document.querySelectorAll('nav a');
    const searchBox = document.querySelector('.search-box');
    const cartLink = document.querySelector('#cartLink');

    // Apply styles and functionality using JavaScript
    header.style.backgroundColor = '#8e8282';
    header.style.padding = '15px';
    header.style.display = 'flex';
    header.style.justifyContent = 'space-between';
    header.style.alignItems = 'center';

    logoContainer.style.display = 'flex';
    logoContainer.style.alignItems = 'center';
    logoContainer.style.marginRight = '10px';

    navLinks.forEach(link => {
      link.style.textDecoration = 'none';
      link.style.color = '#333';
      link.style.margin = '0 15px';
      link.style.fontSize = '18px';
      link.style.fontWeight = 'bold';
      link.style.padding = '15px';
      link.style.borderRadius = '5px';
    });

    searchBox.style.padding = '10px';
    searchBox.style.width = '250px';
    searchBox.style.backgroundColor = 'black';
    searchBox.style.color = 'white';
    searchBox.style.border = 'none';
    searchBox.style.borderRadius = '5px';
    searchBox.style.outline = 'none';

    cartLink.style.padding = '15px';
    cartLink.style.borderRadius = '5px';
  }, []); // Empty dependency array to run the effect only once

  const openShoppingCart = () => {
    setIsShoppingCartOpen(true);
  };

  const closeShoppingCart = () => {
    setIsShoppingCartOpen(false);
  };

  return (
    <header>
      <div className="logo-container">
        <img src="/yummy-.avif" alt="logo" className="logo" />
      </div>
      <nav>
        <a href="#" id="homeLink">Home</a>
        <a href="#" id="aboutLink">About</a>
        <a href="#" id="contactLink">Contact</a>
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
    </header>
  );
}

export default Header;
