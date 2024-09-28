import React from 'react';
import { NavLink } from "react-router-dom";
import "./nav.scss";

function Nav() {
  return (
    <nav>
      <div className="nav-item-div">
        {/* <NavLink to="/" activeClassName="active">Home</NavLink> */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}> Home</NavLink>
      </div>
      <div className="nav-item-div">
        <NavLink to="/checkout/" className={({ isActive }) => (isActive ? 'active' : '')}>Cart</NavLink>
      </div>
      <div className="nav-item-div">
        <NavLink to="/contact/" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Nav;