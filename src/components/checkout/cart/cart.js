import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./cart.scss";
import CartContext, { useCart, maxTwoDecimals } from "./cartHandler.js";

function Cart() {

  const { state, dispatch } = useContext(CartContext);

  // Console logging functionality for debugging purposes
  // useEffect(() => {
  //   console.log("Cart state: ", JSON.stringify(state.cart));
  //   console.log("Total price: ", JSON.stringify(state.totalPrice));
  //   console.log("Product quantity ", JSON.stringify(state.productQuantity));
  // }, [state.cart, state.totalPrice, state.productQuantity]);

  return (
    <div>
      <img src="/shopping-cart-icon3.png" className="shopping-cart-class shopping-cart-title"/>
        {state.cart.length >= 1 ? (
          <div>
            <div className="cart-products-cont">
              {state.cart.map((product) => (
              <div key={product.id} className="cart-product-card">
                <h2>{product.title}</h2>
                <img src={product.image.url} alt={product.title} className="product-card-img"/>
                <div className="cart-item-price-cont">
                  <span>Price: {product.discountedPrice} NOK</span>
                  <span className="quantity-cont">
                    <button className="counter-button" onClick={() => dispatch({ type: "removeProduct", payload: product })}>-</button>
                    <div>Quantity: {product.quantity}</div>
                    <button className="counter-button" onClick={() => dispatch({ type: "addProduct", payload: product })}>+</button>
                  </span>
                  <span>Total: {maxTwoDecimals(product.quantity * product.discountedPrice)}</span>
                </div>
                <div className="button-cont-cart">
                  <Link to={`/product/${product.id}`} className="cta-link button-cont"><button className="cta-button">Visit product page</button></Link>
                  <div className="button-cont"><button onClick={() => dispatch({ type: "removeProductFully", payload: product })} className="cta-button">Remove from cart</button></div>
                </div>
              </div>
            ))}
            </div>
            <div className="cart-total-cont">
              <h3>Your total sum to be paid: {maxTwoDecimals(state.totalPrice)} NOK</h3>
            </div>
            <Link to={`/checkout-success/`} className="cta-link"><button className="cta-button">Complete purchase</button></Link>
          </div>
        ) : (
          <div>
            <h4>Oh no!! Your cart is empty!!</h4>
            <Link to={`/`} className="cta-link"><button className="cta-button">Back to Store</button></Link>
          </div>
        )}
    </div>
  );
}

export default Cart;

// function Cart2() {

//   const { state, dispatch } = useContext(CartContext);

//   return (
//     <div>
//       {state.cart.length >= 1 ? (
//         state.cart.map((product) => (
//           <div key={product.id}>
//             <button onClick={() => dispatch({ type: 'addProduct', payload: product })}>Add {product.title}</button>
//             <button onClick={() => dispatch({ type: 'removeProduct', payload: product })}>Remove {product.title}</button>
//           </div>
//         ))
//       ) : (
//         <div>
//           <h4>Oh no!! Your cart is empty!!</h4>
//           <Link to={`/`} className="cta-link"><button className="cta-button">Back to Store</button></Link>
//         </div>
//       )}
//       <div>
//         <div>You have {state.cart.length === 0 ? 0 : state.productQuantity} products in your cart.</div>
//         <button onClick={() => dispatch({ type: 'clearCart' })} className="cta-button" >Clear cart</button>
//       </div>
//       {state.cart.length >= 1 ? (
//         <div>Total price to be paid: {state.totalPrice}</div>
//       ) : (
//         <div></div>
//       )}
//     </div>
//   );
// }