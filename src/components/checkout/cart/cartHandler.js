import React, { useReducer, createContext, useContext } from "react";
import { Link } from "react-router-dom";
import "./cart.scss";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// Handle max 2 decimals functionality
export function maxTwoDecimals(price) {
  if (price % 1 === 0) {
    return price.toFixed(0);
  } else {
    return price.toFixed(2);
  }
}

export default CartContext;

const initialCartState = {
  cart: [],
  totalPrice: 0,
  productQuantity: 0
};

function cartReducer(state, action) {
  let productIndex;
  let newTotal;
  let cart;
  let newQuantity;

  switch (action.type) {
    // Adding a product
    case "addProduct":
      // Create a new cart so we don't mutate our state
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (productIndex === -1) {
        // If productIndex is -1, it doesn't exist so we add it
        cart.push({ ...action.payload, quantity: 1 });
      } else {
        // If it does exist, we increase the quantity by 1
        cart = [
          ...cart.slice(0, productIndex),
          { ...cart[productIndex], quantity: cart[productIndex].quantity + 1 },
          ...cart.slice(productIndex + 1),
        ];
      }

      // Set the new total
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      // Set the updated product quantity
      newQuantity = cart.reduce((currentQuantity, product) => {
        currentQuantity += product.quantity;
        return currentQuantity;
      }, 0);
      return { ...state, cart: cart, totalPrice: newTotal, productQuantity: newQuantity };

    // Removing a product
    case "removeProduct":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      // If the product index is not -1 then it exists
      if (productIndex !== -1) {
        if (cart[productIndex].quantity > 1) {
          // Remove 1 from quantity if quantity is higher than 1
          // We do not want to mutate cart so we recreate it
          cart = [
            ...cart.slice(0, productIndex),
            {
              ...cart[productIndex],
              quantity: cart[productIndex].quantity - 1,
            },
            ...cart.slice(productIndex + 1),
          ];
        } else {
          // Remove the item entirely if quantity is going to be 0
          cart = [
            ...cart.slice(0, productIndex),
            ...cart.slice(productIndex + 1),
          ];
        }
      }
      // Set the new total so we don't have to keep calculating it
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);

      // Set the updated product quantity
      newQuantity = cart.reduce((currentQuantity, product) => {
        currentQuantity += product.quantity;
        return currentQuantity;
      }, 0);

      return { ...state, cart: cart, totalPrice: newTotal, productQuantity: newQuantity };

      case "removeProductFully":
      cart = [...state.cart];
      // Get the product index
      productIndex = cart.findIndex(
        (product) => product.id === action.payload.id,
      );
      // Remove the product entirely
      cart = [
        ...cart.slice(0, productIndex),
        ...cart.slice(productIndex + 1),
      ];
      // Set the new total
      newTotal = cart.reduce((currentTotal, product) => {
        currentTotal += product.discountedPrice * product.quantity;
        return currentTotal;
      }, 0);
      // Set the updated product quantity
      newQuantity = cart.reduce((currentQuantity, product) => {
        currentQuantity += product.quantity;
        return currentQuantity;
      }, 0);

      return { ...state, cart: cart, totalPrice: newTotal, productQuantity: newQuantity };

    // Clear the cart
    case "clearCart":
      return { cart: [], totalPrice: 0, productQuantity: 0 };

    default:
      return state;
  }
}