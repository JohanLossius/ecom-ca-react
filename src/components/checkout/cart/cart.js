import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";	
import CartContext from "./cartContext.js";
import CartHandler from "./cartHandler.js";
import "./cart.scss";

function Cart() {
  const { cartProducts, cartTotal, uniqueCartProducts } = useContext(CartContext);

  const { addProductToCart, removeProductFromCart, reduceQuantity } = CartHandler();
  
  return (
          <div>
            <img src="/logo/logo-cart.jpg" alt="Shopping cart image" className="shopping-cart-class"/>
              {cartProducts.length >= 1 ? (
                <div>
                  <div className="cart-products-cont">
                  {uniqueCartProducts.map((productObject) => (
                    <div key={productObject.id} className="cart-product-card">
                      <h2>{productObject.productData.title}</h2>
                      <img src={productObject.productData.image.url} alt={productObject.productData.title} className="product-card-img"/>
                      <div className="cart-item-price-cont">
                        <span>Price: {productObject.productData.discountedPrice} NOK</span>
                        <span>
                          <button className="counter-button" onClick={() => addProductToCart(productObject.productData)}>+</button>
                          <div>Quantity: {productObject.quantity}</div>
                          <button className="counter-button" onClick={() => reduceQuantity(productObject.id)}>-</button>
                        </span>
                        <span>Total: {productObject.quantity * productObject.productData.discountedPrice}</span>
                      </div>
                      <button onClick={() => removeProductFromCart(productObject.productData)} className="cta-button">Remove from cart</button>
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


// function Cart() {
//   const { cartProducts, cartTotal, uniqueCartProducts } = useContext(CartContext);

//   const { addProductToCart, removeProductFromCart } = CartHandler();
  
//   return (
//           <div>
//             <img src="/logo/logo-cart.jpg" alt="Shopping cart image" className="shopping-cart-class"/>
//               {cartProducts.length >= 1 ? (
//                 <div>
//                   <div className="cart-products-cont">
//                   {cartProducts.map((product, index) => (
//                     <div key={`${product.id}${index}`} className="cart-product-card">
//                       <h2>{product.title}</h2>
//                       <img src={product.image.url} alt={product.title} className="product-card-img"/>
//                       <div className="cart-item-price-cont">
//                         <span>Price: {product.discountedPrice} NOK</span>
//                         <span>Quantity: </span>
//                         <span>Total: Y</span>
//                       </div>
//                       <button onClick={() => removeProductFromCart(product)} className="cta-button">Remove from cart</button>
//                     </div>
//                   ))}
//                   </div>
//                   <div className="cart-total-cont">
//                     <h3>Your total sum to be paid: {cartTotal} NOK</h3>
//                   </div>
//                   <Link to={`/checkout-success/`} className="cta-link"><button className="cta-button">Complete purchase</button></Link>
//                 </div>
//                 ) : (
//                 <div>
//                   <h4>Oh no!! Your cart is empty!! Maybe the rattlesnakes been gobblin' again.</h4>
//                   <Link to={`/`} className="cta-link"><button className="cta-button">Back to Store</button></Link>
//                 </div>
//               )}
//           </div>
//         );
// }

export default Cart;