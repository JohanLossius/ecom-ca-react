import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import CartContext, { CartProvider } from "./cartContext.js";

function clearCart() {
  const { setCartProducts, setCartTotal } = useContext(CartContext);
  setCartProducts([]);
  setCartTotal(0);
}

export default clearCart;

