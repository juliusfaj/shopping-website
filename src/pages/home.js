import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";

import firstImg from "../img/carousel-1.jpg";
import secondImg from "../img/offer-1.jpg";
import thirdImg from "../img/offer-2.jpg";

const Home = () => {
  return (
    <section className="container">
      <Nav />
      <SideBar />
      <div className="banner">
        <div className="first-container">
          <div className="overlay">
            <h1>men fashion</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              modi libero beatae hic soluta veritatis eveniet itaque, suscipit,
              repellat corrupti aliquid cumque voluptatum perferendis possimus!
            </p>
            <button>shop now</button>
          </div>
        </div>

        <div className="second-container">
          <div className="overlay">
            <p>save 20%</p>
            <p>special offer</p>
            <button>shop now</button>
          </div>
        </div>

        <div className="third-container">
          <div className="overlay">
            <p>save 20%</p>
            <p>special offer</p>
            <button>shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;