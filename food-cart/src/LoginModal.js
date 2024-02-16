//Logincomponent.js

import React, { useState } from 'react';
import './LoginModal.css';

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState('login'); // State to track whether it's login or signup form

  const openLoginSignupPopup = () => {
    setShowModal(true);
  };

  const closeLoginSignupPopup = () => {
    setShowModal(false);
  };

  const toggleForm = () => {
    setFormType(formType === 'login' ? 'signup' : 'login'); // Toggle between login and signup forms
  };

  const signIn = () => {
    alert('Signed In Successfully');
    closeLoginSignupPopup();
  };

  const signUp = () => {
    alert('Signed Up Successfully');
    closeLoginSignupPopup();
  };

  return (
    
    <div>
      <div className="login-button">
        <button className="login-button-btn" onClick={openLoginSignupPopup}>
          Login
        </button>
      </div>

      {showModal && (
        <div className={`popup ${showModal ? 'show-modal' : ''}`} id="loginSignupPopup">
          <div className="form">
            <span className="close-btn" onClick={closeLoginSignupPopup}>
              &times;
            </span>
            <h2 id="popupHeading">{formType === 'login' ? 'Login' : 'Sign Up'}</h2>
            {formType === 'login' ? (
              <form onSubmit={signIn}>
                {/* Sign In Form */}
                <div className="form-element">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter email" required />
                </div>
                <div className="form-element">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter password" required />
                </div>
                <div className="form-element">
                  <button className="signinBtn" type="submit">
                    Login
                  </button>
                </div>
                <p>
                  Don't have an account?{' '}
                  <button className="altBtn" type="button" onClick={toggleForm}>
                    Sign Up
                  </button>
                </p>
              </form>
            ) : (
              <form onSubmit={signUp}>
                {/* Sign Up Form */}
                <div className="form-element">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" placeholder="Enter username" required />
                </div>
                <div className="form-element">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" placeholder="Enter email" required />
                </div>
                <div className="form-element">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="Enter password" required />
                </div>
                <div className="form-element">
                  <button className="signinBtn" type="submit">
                    Sign Up
                  </button>
                </div>
                <p>
                  Already have an account?{' '}
                  <button className="altBtn" type="button" onClick={toggleForm}>
                    Sign In
                  </button>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};


export default LoginModal;
