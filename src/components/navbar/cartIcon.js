import React from 'react';
import { NavLink } from "react-router-dom";
import "./cartIcon.scss";
import CartContext, { CartProvider } from "../checkout/cart/cartContext.js";
import { useContext } from "react";

function CartIcon() {
  
  const { cartProducts } = useContext(CartContext);
  
  const cartProductCount = cartProducts.length ? cartProducts.length : 0;

  return (
    <div>
      <NavLink exact to="/checkout/" className="cart-icon-a-tag" activeClassName="active-cart">
        <img src="/logo-cart.jpg" alt="Shopping cart" className="shopping-cart-class"/>
        <div className="products-in-cart-div">
          <div className="product-count-cart">{cartProductCount}</div>
        </div>
      </NavLink>
    </div>
  )
}

export default CartIcon;