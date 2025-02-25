import React from 'react';
import "./header.scss";
import Nav from "../navbar/nav.jsx";
import CartIcon from "../navbar/cartIcon.jsx";
import Logo from "../navbar/logo.jsx";

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