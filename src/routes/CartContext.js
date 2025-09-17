// src/context/CartContext.js
import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, isOpen, toggleCart }}>
      {children}
    </CartContext.Provider>
  );
};
