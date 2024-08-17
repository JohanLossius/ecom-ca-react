import React from "react";
import { useState } from "react";
import { createContext, useContext, useEffect } from "react";
import CartContext from "./cartContext.js";

function ClearCart() {
  const { setCartProducts, setCartTotal } = useContext(CartContext);

  useEffect(() => {
    setCartProducts([]);
    setCartTotal(0);
  }, []);
}

export default ClearCart;

