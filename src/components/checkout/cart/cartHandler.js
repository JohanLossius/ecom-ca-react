import React from "react";
import { useState, useContext, useEffect } from "react";
import CartContext from "./cartContext.js";
import { set } from "react-hook-form";

function CartHandler() {
  const { cartProducts, setCartProducts, cartTotal, setCartTotal } = useContext(CartContext);

  function addProductToCart(product) {
    setCartProducts([...cartProducts, product]);
  }

  function removeProductFromCart(product) {
    const updatedCart = cartProducts.filter((item) => item.id !== product.id); // ???????
    setCartProducts(updatedCart);
  }

  useEffect(() => {
  function cartCalculator() {
    let sum = 0;
    cartProducts.forEach((product) => {
      sum += product.discountedPrice;
    });
    setCartTotal(sum);
  };
  cartCalculator();
  }, [cartProducts, setCartTotal]);

  return { addProductToCart, removeProductFromCart };
}

export default CartHandler;