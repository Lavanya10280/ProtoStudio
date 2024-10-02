import React from 'react';
import './App.css'; // Import your CSS file
import './ShoppingCart.css';
import PageLayout from './PageLayout';
import { CartProvider } from './CartContext';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactForm from './ContactForm';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';


const App = () => {
  return (
    <Router>
      <div className="App">
        <CartProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<PageLayout />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/ContactForm" element={<ContactForm />} />
        </Routes>
        </CartProvider>
        
      </div>
    </Router>
  );
};

export default App;

