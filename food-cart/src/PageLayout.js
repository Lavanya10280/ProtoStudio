import React from 'react';
import Header from './Header';
import ShoppingCart from './ShoppingCart'; 
import FoodCart from './FoodCart';
import Footer from './Footer';

const PageLayout = () => {
  return (
    <div>
      <Header />
      <div className='restaurant-page'>
      <div className="food-cards">
        <FoodCart />
      </div>
      <div className="shopping-cart">
      
      </div>
      </div>
     <Footer />
    </div>
  );
};

export default PageLayout;
