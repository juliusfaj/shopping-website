import React from "react";

import Product from "./product";

import { useGlobalContext } from "../context";

const Products = () => {
  const { cart } = useGlobalContext();

  const btns = ["all", ...new Set(cart.map((item) => item.category))];
  return (
    <section className="display-products">
      <div className="filter-btn-container">
        {btns.map((btn, index) => {
          return <button key={index}>{btn}</button>;
        })}
      </div>
      <Product cart={cart} />
    </section>
  );
};

export default Products;
