import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Alert from "./alert";

import { useGlobalContext } from "../context";

const Product = ({ cart }) => {
  const { addToCart, addToAmount, subFromAmount } = useGlobalContext();

  return (
    <div className="product-item-container">
      {cart.map((item, index) => {
        const { name, img, amount, price, id } = item;

        return (
          <div className="product-item" key={index}>
            <div className="product-img-container">
              <img src={img} alt={name} />
            </div>
            <div className="product-desc">
              <div className="name-container">
                <p>{name}</p>
                <p>${price}.00</p>
              </div>
              <div className="amount-container">
                <div className="amount-no">
                  <button
                    className="decrease-btn"
                    onClick={() => subFromAmount(id)}
                  >
                    <FaChevronLeft />
                  </button>
                  <p>{amount}</p>
                  <button
                    className="increase-btn"
                    onClick={() => addToAmount(id)}
                  >
                    <FaChevronRight />
                  </button>
                </div>
                <button
                  className="add-to-cart"
                  onClick={() => addToCart(name, img, amount, price, id)}
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
