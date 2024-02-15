// App.js
import React from 'react';
import './App.css'; // Import your CSS file
import './ShoppingCart.css'
import PageLayout from './PageLayout';
import { CartProvider } from './CartContext';

const App = () => {
  return (
    <CartProvider>
    <div>
      <PageLayout />
    </div>
    </CartProvider>
  );
};

export default App;

