// import React from "react";
import { useContext, useEffect } from "react";
import CartContext from "./cartContext.js";

function CartHandler() {
  const { cartProducts, setCartProducts, setCartTotal, setUniqueCartProducts } = useContext(CartContext);

  function addProductToCart(product) {
    setCartProducts([...cartProducts, product]);
  }

  function removeProductFromCart(product) {
    const updatedCart = cartProducts.filter((item) => item.id !== product.id);
    setCartProducts(updatedCart);
  }

  function reduceQuantity(productId) {
    const cartProductsCopy = [...cartProducts];
    const indexToRemove = cartProductsCopy.findIndex((item) => item.id === productId);
    const productGroup = cartProductsCopy.filter((item) => item.id === productId);
    const productToReduce = cartProductsCopy[indexToRemove];
    console.log("productToReduce:", productToReduce);
    
    if (productGroup.length > 1) {
      cartProductsCopy.splice(indexToRemove, 1);
      setCartProducts(cartProductsCopy);
    } else {
      removeProductFromCart(productToReduce);
    }
  }

  useEffect(() => {
  function cartCalculator() {
    let sum = 0;
    cartProducts.forEach((product) => {
      sum += product.discountedPrice;
    });
    let sumFixed = sum.toFixed(2);
    setCartTotal(sumFixed);
  };
  cartCalculator();
  }, [cartProducts, setCartTotal]);

  // Functionality to deal with quantity of cart products

  useEffect(() => {
    function cartProductsHandler() {

      const cartProductsArrayQuantity = [];

      // Unique cart products array defined
      const uniqueCartProductsArray = [];

      cartProducts.forEach((product) => {

      if (!uniqueCartProductsArray.includes(product)) {
        uniqueCartProductsArray.push(product);

        // Take control of unique cart product quantity
        let cartProductObject = {
          id: product.id,
          quantity: 0,
          productData: product,
        };

        cartProducts.forEach((product) => {
          if (product.id === cartProductObject.id) {
            cartProductObject.quantity++;
          }
        });

        console.log("cartProductObject:", cartProductObject);
        cartProductsArrayQuantity.push(cartProductObject);

      }
      console.log("uniqueCartProductsArray:", uniqueCartProductsArray);
      console.log("cartProductsArrayQuantity:", cartProductsArrayQuantity);
      setUniqueCartProducts(cartProductsArrayQuantity);
    })
  }
  cartProductsHandler();
  }, [cartProducts, setUniqueCartProducts]);

  return { addProductToCart, removeProductFromCart, reduceQuantity };
}

export default CartHandler;