import React from "react";
import { Link } from "react-router-dom";

function Navi() {
  return (
    <header>
      <image className="logo" src="https://furamavietnam.com/wp-content/uploads/2018/10/logo.png" />
      <nav>
        <ul className="nav__links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Service</Link></li>
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