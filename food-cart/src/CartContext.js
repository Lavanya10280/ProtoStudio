import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (itemId, itemName, itemPrice) => {
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === itemId);

    if (existingItemIndex !== -1) {
      // If the item already exists, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity++;
      setCartItems(updatedCartItems);
    } else {
      // If the item is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { id: itemId, name: itemName, price: itemPrice, quantity: 1 }]);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

