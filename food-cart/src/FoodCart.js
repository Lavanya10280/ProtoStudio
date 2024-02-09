// FoodCart.js

import React from 'react';
import PopupMessage from './PopupMessage';
import './FoodCart.css'; // Import your stylesheet

class FoodCart extends React.Component {
  state = {
    showPopup: false,
    popupMessage: '',
  };

  addToCart = (foodName, price) => {
    this.setState({ showPopup: true, popupMessage: `Added ${foodName} to the cart.` });

    // Close the popup after 5 seconds
    setTimeout(() => {
      this.setState({ showPopup: false });
    }, 5000);
  };

  closePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <div className="food-cart-container">
        <h2>Food Items</h2>
        <div className="food-grid">
          {/* Food 1 */}
          <div className="food-box" onClick={() => this.addToCart('Margherita Pizza', 10.99)}>
            <img src="/margherita_pizza.jpg" alt="Margherita Pizza" />
            <div className="food-details">
              <p>Margherita Pizza</p>
              <p>₹330</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>

          {/* Food 2 */}
          <div className="food-box" onClick={() => this.addToCart('Grilled Salmon', 15.99)}>
            <img src="/grilled_salmon.jpg" alt="Grilled Salmon" />
            <div className="food-details">
              <p>Grilled Salmon</p>
              <p>₹500</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>

          {/* Food 3 */}
          <div className="food-box" onClick={() => this.addToCart('Chocolate Lava Cake', 7.99)}>
            <img src="/chocolate_lava_cake.jpg" alt="Chocolate Lava Cake" />
            <div className="food-details">
              <p>Chocolate Lava Cake</p>
              <p>₹150</p>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          </div>
        </div>

        {/* Popup Message */}
        {this.state.showPopup && (
          <PopupMessage message={this.state.popupMessage} onClose={this.closePopup} />
        )}
      </div>
    );
  }
}

export default FoodCart;
