import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useGlobalContext } from "../context";

import BigNav from "./bigNav";

const Nav = () => {
  const { handleToggle } = useGlobalContext();

  return (
    <nav className="nav">
      <div className="small-nav">
        <h1 className="title">fajstore</h1>
        <button className="toggle-btn" onClick={handleToggle}>
          <FaBars />
        </button>
      </div>
      <BigNav />
    </nav>
  );
};

export default Nav;
