import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./checkoutSuccess.scss";
import CartContext, { useCart } from "../checkout/cart/cartHandler.js";

function CheckoutSuccess() {

  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    dispatch({ type: 'clearCart' });
  }, []);

  return (
    <main className="checkout-success-main">
      <h3>Thank you for your purchase!</h3>
      <p>Your order is confirmed and will be shipped shortly. Your product will arrive within 5-15 working days.</p>
      <p>If your products have not arrived within 15 workings days, we'll give you a hamster for free.</p>
      <Link to={"/"} className="cta-link"><button className="cta-button">Return to Store</button></Link>
    </main>
  );
}

export default CheckoutSuccess;