import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import { useGlobalContext } from "../context";

const BigNav = () => {
  const { totalAmount, hideNav } = useGlobalContext();

  return (
    <div className="big-nav">
      <h1 className="title">fajstore</h1>
      <div className="nav-link-container">
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
      <div className="cart-amount">
        <button className="open-cart">
          <Link to="/cart" onClick={hideNav}>
            <FaCartPlus />
          </Link>
        </button>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
};

export default BigNav;
