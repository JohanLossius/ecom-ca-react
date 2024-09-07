import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./productPage.scss";
import SingleProductApiStates from "../api/singleProductApiState.js";
import apiUrl from "../api/api.js";
import CartContext from "../checkout/cart/cartContext.js";
import { useContext } from "react";

// Product page output
function ProductPage() {

  // Cart context
  const { cartProducts, setCartProducts } = useContext(CartContext);

  function addProductToCart(product) {
    setCartProducts([...cartProducts, product]);
  }

  // Handle single product state
  const { id } = useParams();
  
  const singleProductUrl = apiUrl + "/" + id;
  
  const { product, isLoading, isError } = SingleProductApiStates(
    singleProductUrl
  );

  if (isLoading) {
    return <div>The hamster is running at full speed now, hang on...</div>;
  }

  if (isError) {
    return <div>There was an error: {isError}. Have you spoken with the meercats?</div>; // Error messaging to be implemented, more than just true/false?
  }

  if (product) {
    return (
      <div className="product-container">
        <div key={product.id} className="product-card">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Discounted price: {product.discountedPrice} NOK</p>
          {product.price - product.discountedPrice > 0 && (
            <p>You save: {product.price - product.discountedPrice} NOK</p>
            )}
          <img src={product.image.url} alt={product.title} className="product-card-img"/>
          <h3>Reviews:</h3>
          <ul className="reviews-ul">
            {product.reviews.map(review => (
            <li key={review.id} className="reviews-li">
              <strong>{review.username}:</strong> {review.description} Rating: {review.rating}
            </li>
            ))}
          </ul>
          <button onClick={() => addProductToCart(product)} className="cta-button">
            Add to cart
            </button>
          <Link to="/checkout/" className="cta-link"><button className="cta-button">See cart and purchase</button></Link>
        </div>
      </div>
    );
  }
}

export default ProductPage;