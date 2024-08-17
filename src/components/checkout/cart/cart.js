import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";	
import CartContext, { CartProvider } from "./cartContext.js";

function Cart() {
  const { cartProducts, setCartProducts, cartTotal, setCartTotal } = useContext(CartContext);

  function addProductToCart(product) {
    setCartProducts([...cartProducts, product]);
  }

  function removeProductFromCart(product) {
    const updatedCart = cartProducts.filter((item) => item.id !== product.id); // ???????
    setCartProducts(updatedCart);
  }

  function cartCalculator() {
    let sum = 0;
    cartProducts.forEach((product) => {
      sum += product.discountedPrice;
    });
    setCartTotal(sum);
  }
  cartCalculator();
  
  return (
          <div>
            <img src="../../../../public/logo/logo-cart.jpg" alt="Shopping cart image" className="shopping-cart-class"/>
              {cartProducts.length >= 1 ? (
                <div>
                  <div className="cart-products-cont">
                  {cartProducts.map((product) => (
                    <div key={product.id} className="cart-product-card">
                      <h2>{product.title}</h2>
                      <p>Price: {product.discountedPrice} NOK</p>
                      <img src={product.image.url} alt={product.title} className="product-card-img"/>
                      <button onClick={() => removeProductFromCart(product)} className="cta-button">Remove from cart</button>
                    </div>
                  ))}
                  </div>
                  <div className="cart-total-cont">
                    <h3>Your total sum to be paid: {cartTotal} NOK</h3>
                  </div>
                  <Link to={`/checkout-success/`} className="cta-link"><button className="cta-button">Complete purchase</button></Link>
                </div>
                ) : (
                <div>
                  <h4>Oh no!! Your cart is empty!! Maybe the rattlesnakes been gobblin' again.</h4>
                  <Link to={`/`} className="cta-link"><button className="cta-button">Back to Store</button></Link>
                </div>
              )}
          </div>
        );
}

export default Cart;


// import React, { useState } from 'react';
// import { Link } from "react-router-dom";
// import "./cart.scss";
// import CartStates from "./cartStates.js";
// import CartHandler from './cartHandler.js';

// function Cart() {
  
//   const { cartProducts, cartTotal } = CartStates();
//   const { removeProductFromCart } = CartHandler();
  
//   return (
//     <div>
//       <img src="" alt="Shopping cart" className="shopping-cart-class"/>
//         {cartProducts.length >= 1 ? (
//           <div>
//             <div className="cart-products-cont">
//             {cartProducts.map((product) => (
//               <div key={product.id} className="cart-product-card">
//                 <h2>{product.title}</h2>
//                 <p>Price: {product.discountedPrice} NOK</p>
//                 <img src={product.image.url} alt={product.title} className="product-card-img"/>
//                 <button onClick={() => removeProductFromCart(product)} className="cta-button">Remove from cart</button>
//               </div>
//             ))}
//             </div>
//             <div className="cart-total-cont">
//               <h3>Your total sum to be paid: {cartTotal} NOK</h3>
//             </div>
//             <Link to={`/checkout-success/`} className="cta-link"><button className="cta-button">Complete purchase</button></Link>
//           </div>
//           ) : (
//           <div>
//             <h4>Oh no!! Your cart is empty!! Maybe the rattlesnakes been gobblin' again.</h4>
//             <Link to={`/`} className="cta-link"><button className="cta-button">Back to Store</button></Link>
//           </div>
//         )}
//     </div>
//   )
// }

// export default Cart;