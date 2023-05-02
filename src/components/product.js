import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Product = ({ cart }) => {
  return (
    <div>
      {cart.map((item, index) => {
        const { name, img, amount, price } = item;

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
                  <button className="decrease-btn">
                    <FaChevronUp />
                  </button>
                  <p>{amount}</p>
                  <button className="increase-btn">
                    <FaChevronDown />
                  </button>
                </div>
                <button className="add-to-cart">add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
