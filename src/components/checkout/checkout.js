import React from "react";
import { Link } from "react-router-dom";
import "./checkout.scss";
// import Cart from "./cart/cart.js";
import Cart from "./cart/cart.js";

function Checkout() {
  return (
    <main>
      <h1>Your Cart</h1>
      <Cart />
    </main>
  );
}

export default Checkout;