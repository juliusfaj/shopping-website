import React from "react";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import BeforeFooter from "../components/beforeFooter";
import Footer from "../components/footer";
import CartItems from "../components/cartitem";
import Alert from "../components/alert";

import { useGlobalContext } from "../context";
const Cart = () => {
  const { cartItems, payment, clearCart } = useGlobalContext();

  if (cartItems.length === 0) {
    return (
      <section className="container">
        <Alert />
        <Nav />
        <SideBar />

        <div className="product-item-container">
          <p>no item in the cart</p>
        </div>

        <BeforeFooter />
        <Footer />
      </section>
    );
  } else {
    return (
      <section className="container">
        <Alert />

        <Nav />
        <SideBar />

        <section className="cartItems-container">
          <div className="line-container">
            <h1>Cart</h1>
            <div className="contact-line"></div>
          </div>

          <CartItems items={cartItems} />

          <div className="control-btns">
            <button className="clear-cart" onClick={clearCart}>
              clear cart
            </button>
            <button className="buy-cart">pay {`[$${payment}]`}</button>
          </div>
        </section>

        <BeforeFooter />
        <Footer />
      </section>
    );
  }
};

export default Cart;
