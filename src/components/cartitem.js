import React from "react";

const CartItems = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="product-item-container">
        <h1>no item in the cart</h1>
      </div>
    );
  } else {
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

                  <button className="add-to-cart">remove item</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};

export default CartItems;
