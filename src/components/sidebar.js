import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context";

const SideBar = () => {
  const { showSideBar, totalAmount } = useGlobalContext();

  return (
    <nav className={showSideBar ? "sidebar show-sidebar" : "sidebar"}>
      <div className="cart-amount">
        <button className="open-cart">
          <FaCartPlus />
        </button>
        <p>{totalAmount}</p>
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </nav>
  );
};

export default SideBar;
