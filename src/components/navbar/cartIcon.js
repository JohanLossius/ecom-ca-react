import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import "./cartIcon.scss";
import CartContext, { useCart } from "../checkout/cart/cartHandler.js";

function CartIcon() {
  
  const { state } = useContext(CartContext);

  return (
    <div>
      <Link to="/checkout/" className="cart-icon-a-tag" >
          <img src="/shopping-cart-icon3.png" alt="Shopping cart" className="shopping-cart-class"/>
          <div className="products-in-cart-div">
            {state.productQuantity > 0 ? (
              <div className="product-count-cart">{state.productQuantity}</div>
            ) : ( <div className="product-count-cart">&nbsp;</div>
            )}
          </div>
      </Link>
    </div>
  )
}

export default CartIcon;