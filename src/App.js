import React from 'react';
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import Header from "./components/header/header.js";
import Footer from "./components/footer/footer.js";
import ProductPage from "./components/productPage/productPage.js";
import Checkout from "./components/checkout/checkout.js";
import CheckoutSuccess from "./components/checkoutSuccess/checkoutSuccess.js";
import Contact from "./components/contact/contact.js";
import ProductCards from "./components/productCards/productCards.js";

// Front page with products
function Home() {
  return (
    <main>
      <h1>Products for sale</h1>
      <ProductCards />
    </main>
  );
}

function RouteNotFound() {
  return <main>Page not found</main>
}

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout-success" element={<CheckoutSuccess />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;