import React from 'react';
import { NavLink } from "react-router-dom";
import "./nav.scss";

function Nav() {
  return (
    <nav>
      <div className="nav-item-div">
        <NavLink exact to="/" activeClassName="active">Home</NavLink>
      </div>
      <div className="nav-item-div">
        <NavLink exact to="/checkout/" activeClassName="active">Cart</NavLink>
      </div>
      <div className="nav-item-div">
        <NavLink exact to="/contact/" activeClassName="active">Contact</NavLink>
      </div>
    </nav>
  )
}

export default Nav;