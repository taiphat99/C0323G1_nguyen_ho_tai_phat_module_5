import React from "react";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <header>
      <img className="logo" src="./image/furama_logo.png" alt="" />
      <nav>
        <ul className="nav__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/customers">Customer</Link></li>
          <li><Link to="/contracts">Contract</Link></li>
          <li><Link to="/">Entertaining</Link></li>
          <li><Link to="/">Support</Link></li>
        </ul>
      </nav>
    </header>
  )
}
export default Navi;