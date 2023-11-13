// CartContext.js
import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";

import useCartStore from "@/stores/cartStore"; // Replace with the actual path

const CartContext = createContext();

function CartProvider({ children }) {
  const cartStore = useCartStore();

  return (
    <CartContext.Provider value={cartStore}>{children}</CartContext.Provider>
  );
}

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { CartProvider, useCart };
