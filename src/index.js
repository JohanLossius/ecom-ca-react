import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";
import App from "./App";
import { CartProvider } from "./components/checkout/cart/cartHandler.js";

// Rendering the App component wrapped in the Router
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </CartProvider>
);