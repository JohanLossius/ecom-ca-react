import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";
import CartContext from "./cartContext.js";

function ClearCart() {
  const { setCartProducts, setCartTotal } = useContext(CartContext);
  setCartProducts([]);
  setCartTotal(0);
  ClearCart();
}

export default ClearCart;

