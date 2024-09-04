import React from "react";
import { Link } from "react-router-dom";
import "./logo.scss";

// Logo
function Logo() {
  return (
    <div>
      <Link to="/"><img src="/logo/logo2.png" alt="logo" className="logo" /></Link>
    </div>
  );
}

export default Logo;