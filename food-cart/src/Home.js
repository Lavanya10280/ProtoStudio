import React from 'react';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="container">
            <div className="left "></div>
            <div className="right">
                <div className="container">
                    <div className="box">
                        <section className="hero">
                            <h2>Delicious Food Delivered to Your Doorstep</h2>
                            <h1>Welcome to Food City</h1>
                            <h3>Your favourite dishes...</h3>
                            <h3>Anytime | Anywhere</h3>
                        </section>
                        <section className="feature">
                            <p>Discover a wide range of cuisines and dishes to satisfy your cravings.</p>
                        </section>
                        <section className="feature">
                            <h2>Fast Delivery</h2>
                            <p>Get your food delivered hot and fresh to your doorstep in no time.</p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
