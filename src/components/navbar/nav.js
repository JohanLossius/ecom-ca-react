import React from 'react';
import { Link } from "react-router-dom";
import "./nav.scss"; // unused currently

function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Nav;