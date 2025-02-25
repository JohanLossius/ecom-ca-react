import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import ProductPage from "./components/productPage/productPage.jsx";
import Checkout from "./components/checkout/checkout.jsx";
import CheckoutSuccess from "./components/checkoutSuccess/checkoutSuccess.jsx";
import Contact from "./components/contact/contact.jsx";
import ProductCards from "./components/productCards/productCards.jsx";

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
  return <main>This page was not found. You follow old Rafiki, he knows the way!</main>
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