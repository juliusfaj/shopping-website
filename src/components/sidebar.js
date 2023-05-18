import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context";

const SideBar = () => {
  const { showSideBar, totalAmount, hideNav } = useGlobalContext();

  return (
    <nav className={showSideBar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="cart-amount">
        <button className="open-cart">
          <FaCartPlus />
        </button>
        <p>{totalAmount}</p>
      </div>
      <div className="nav-links">
        <Link to="/" onClick={hideNav}>
          Home
        </Link>
        <Link to="/contact" onClick={hideNav}>
          Contact
        </Link>
        <Link to="/cart" onClick={hideNav}>
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default SideBar;
