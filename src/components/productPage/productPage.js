import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./productPage.scss";
import SingleProductApiStates from "../api/singleProductApiState.js";
import apiUrl from "../api/api.js";
import CartContext, { useCart, maxTwoDecimals } from "../checkout/cart/cartHandler.js";

// Product page output
function ProductPage() {

  // Cart context
  const { state, dispatch } = useContext(CartContext);

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
    return <div>There was an error: {isError}. Have you spoken with the meercats?</div>;
  }

  if (product) {
    // console.log("Product: ", product);
    return (
      <div className="product-container">
        <div key={product.id} className="product-card">
          <h2 className="h2-card">{product.title}</h2>
          <div className="text-div-product-card">
            <span>{product.description}</span>
            <span>Discounted price: {maxTwoDecimals(product.discountedPrice)} NOK</span>
            {product.price - product.discountedPrice > 0 && (
              <span>You save: {product.price - product.discountedPrice} NOK</span>
              )}
          </div>
          <img src={product.image.url} alt={product.title} className="product-card-img"/>
          {product.reviews.length > 0 && (
              <h3>Reviews:</h3>
              )}
          <ul className="reviews-ul">
            {product.reviews.map(review => (
            <li key={review.id} className="reviews-li">
              <strong>{review.username}:</strong> {review.description} Rating: {review.rating}
            </li>
            ))}
          </ul>
          <Link to="/checkout/" className="cta-link"><button className="cta-button">See cart and purchase</button></Link>
          <button onClick={() => dispatch({ type: "addProduct", payload: product })} className="cta-button">
            Add to cart
            </button>
        </div>
      </div>
    );
  }
}

export default ProductPage;