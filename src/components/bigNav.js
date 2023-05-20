import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import { useGlobalContext } from "../context";

const BigNav = () => {
  const { totalAmount } = useGlobalContext();

  return (
    <div className="big-nav">
      <h1 className="title">fajstore</h1>
      <div className="nav-link-container">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <div className="cart-amount">
        <button className="open-cart">
          <Link to="/cart">
            <FaCartPlus />
          </Link>
        </button>
        <p>{totalAmount}</p>
      </div>
    </div>
  );
};

export default BigNav;
