// import React from "react";
// import { useState, useContext } from "react";
// import CartContext, { CartProvider } from "./cartContext.js";



// import React from "react";
// import { useState, useEffect } from "react";
// import CartStates from "./cartStates.js";

// function CartHandler() {
//   const { cartProducts, setCartProducts, cartTotal, setCartTotal } = CartStates();

//   // Cart products handling
//   function addProductToCart(product) {
//     setCartProducts([...cartProducts, product]);
//   };

//   function removeProductFromCart(product) {
//     const updatedCart = cartProducts.filter((item) => item.id !== product.id); // ???
//     setCartProducts(updatedCart);
//   }

//   // Cart calculator
//   const calculateTotal = () => {
//     let sum = 0;
//     cartProducts.forEach((product) => {
//       sum += product.discountedPrice;
//     });
//     setCartTotal(sum);
//   };

//   useEffect(() => {
//     calculateTotal();
//   }, [cartProducts]);

//   return { addProductToCart, removeProductFromCart };
// };

// export default CartHandler;