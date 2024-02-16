import React from 'react';
import './App.css'; // Import your CSS file
import './ShoppingCart.css';
import PageLayout from './PageLayout';
import { CartProvider } from './CartContext';

import Header from './Header';


const App = () => {
  return (/*
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/food-cart/src/Home.js" element={<Home />} />
          <Route path="/food-cart/src/AboutUs.js" element={<AboutUs />} />
          <Route path="/food-cart/src/ContactForm.js" element={<ContactForm />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
        </Routes>*/
        <CartProvider>
          <PageLayout />
        </CartProvider>
     // </div>
    //</Router>
  );
};

export default App;

