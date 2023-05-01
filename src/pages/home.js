import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import Banner from "../components/banner";
import Product from "../components/products";

import firstImg from "../img/carousel-1.jpg";
import secondImg from "../img/offer-1.jpg";
import thirdImg from "../img/offer-2.jpg";

const Home = () => {
  return (
    <section className="container">
      <Nav />
      <SideBar />
      <Banner />
      <Product />
    </section>
  );
};

export default Home;
