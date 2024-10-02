// Home.js
import React from 'react';
import './Home.css'; // Importing the CSS for styling


const Home = () => {
  return (
    <div className="home-container">
    <img src="/image1.jpg" className='home-img'/>
      <section className="intro-section">
        <h2 className="intro-subheading">Delicious Food Delivered to Your Doorstep</h2>
        <h1 className="intro-heading">Welcome to Yummy</h1>
        <h3 className="intro-text">Your favourite dishes...</h3>
        <h3 className="intro-text">Anytime | Anywhere</h3>
      </section>
      
      <section className="feature">
        <p className="feature-text">Discover a wide range of cuisines and dishes to satisfy your cravings.</p>
      </section>

      <section className="feature">
        <h2 className="feature-heading">Fast Delivery</h2>
        <p className="feature-text">Get your food delivered hot and fresh to your doorstep in no time.</p>
      </section>
    </div>
  );
};

export default Home;
