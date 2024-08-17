import React from 'react';
import { Link } from "react-router-dom";
import "./header.scss";
import Nav from "../navbar/nav.js";
import CartIcon from "../navbar/cartIcon.js";
import Logo from "../navbar/logo.js";

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

export default Header;