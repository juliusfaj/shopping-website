import React from "react";
import { useGlobalContext } from "../context";

const CartItems = ({ items }) => {
  const { removeItem } = useGlobalContext();

  return (
    <div className="product-item-container">
      {items.map((item, index) => {
        const { id, name, img, amount, price } = item;
        return (
          <div className="product-item" key={index}>
            <div className="product-img-container">
              <img src={img} alt={name} />
            </div>
            <div className="product-desc">
              <div className="name-container">
                <p>{name}</p>
                <p>${amount}.00</p>
              </div>
              <div className="amount-container">
                <p>{price}</p>

                <button className="add-to-cart" onClick={() => removeItem(id)}>
                  remove item
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItems;
