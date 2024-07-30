// react routing module code
import React from 'react';
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addProduct, clearCart } from './cartSlice';
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";

function Logo() {
  // let params = useParams()
  // console.log(params)
  // // Logs the id of whichever product page you are on e.g.
  // // {id: '1'} or {id: '2'}
  // return <div>Individual product page: {params.id}</div>
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products/">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

function CartIcon() {
  // let params = useParams()
  // console.log(params)
  // // Logs the id of whichever product page you are on e.g.
  // // {id: '1'} or {id: '2'}
  // return <div>Individual product page: {params.id}</div>
}

// Our header component that gets used in our <Layout> component
function Header() {
  return (
    <header>
      <Logo />
      <Nav />
      <CartIcon />
    </header>
  )
}

// Our footer component that gets used in our <Layout> component
function Footer() {
  return <footer>Website footer</footer>
}

// Front page with products
function Home() {
  const productList = [
    { id: 1, title: 'Product 1' },
    { id: 2, title: 'Product 2' },
    { id: 3, title: 'Product 3' },
  ];

  return (
    <div>
      <h2>Here are all our Products:</h2>
      <ul>
        {productList.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProductPage() {
  let params = useParams()
  console.log(params)
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>
}

function CheckoutPage() {
  let params = useParams()
  console.log(params)
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>
}

function CheckoutSuccessPage() {
  let params = useParams()
  console.log(params)
  // Logs the id of whichever product page you are on e.g.
  // {id: '1'} or {id: '2'}
  return <div>Individual product page: {params.id}</div>
}

function ContactPage() {
  return  (
          <div>
            <h1>Contact us</h1>
            <p>Email: xyz@abc.com</p>
            <p>Phone: +47 123 45 678</p>
          </div>
  );
}

function RouteNotFound() {
  return <div>Page not found</div>
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
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="checkout-success" element={<CheckoutSuccessPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App