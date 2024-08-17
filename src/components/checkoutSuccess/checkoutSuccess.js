import React from 'react';
import { Link } from "react-router-dom";
import "./checkoutSuccess.scss";
import clearCart from '../checkout/cart/clearCart';

function CheckoutSuccess() {
  clearCart();
  return (
    <main>
      <h3>Thank you for your purchase!</h3>
      <p>Your order is confirmed and will be shipped shortly.</p>
      <Link to={"/"} className="cta-link"><button className="cta-button">Return to Store</button></Link>
    </main>
  );
}

export default CheckoutSuccess;