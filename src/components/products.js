import React from "react";

import { useGlobalContext } from "../context";

const Product = () => {
  const { cart } = useGlobalContext();

  const btns = ["all", ...new Set(cart.map((item) => item.category))];
  return (
    <div className="display-products">
      <div className="filter-btn-container">
        {btns.map((btn, index) => {
          return <button key={index}>{btn}</button>;
        })}
      </div>
    </div>
  );
};

export default Product;
