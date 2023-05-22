import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import Banner from "../components/banner";
import Products from "../components/products";
import BeforeFooter from "../components/beforeFooter";
import Footer from "../components/footer";
import Alert from "../components/alert";

import firstImg from "../img/carousel-1.jpg";
import secondImg from "../img/offer-1.jpg";
import thirdImg from "../img/offer-2.jpg";

import { useGlobalContext } from "../context";

const Home = () => {
  return (
    <section className="container">
      <Alert />
      <Nav />
      <SideBar />
      <Banner />
      <Products />
      <BeforeFooter />
      <Footer />
    </section>
  );
};

export default Home;
