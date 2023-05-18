import React from "react";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import BeforeFooter from "../components/beforeFooter";
import Footer from "../components/footer";

const Cart = () => {
  return (
    <section className="container">
      <Nav />
      <SideBar />

      <p>cart</p>

      <BeforeFooter />
      <Footer />
    </section>
  );
};

export default Cart;
