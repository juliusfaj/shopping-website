import React from "react";
import { Link } from "react-router-dom";

import { icons } from "../data";

import payments from "../img/payments.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="container-div">
        <div className="first-div">
          <h1>get in touch</h1>
          <p className="desc">
            No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita et
            et dolor sed dolor. Rebum tempor no vero est magna amet no
          </p>
          <div>
            <p>123 street, alakia nigeria</p>
            <p>info@faj.com</p>
            <p>+234 808 4885370</p>
          </div>
        </div>
        <div className="second-div">
          <h1>Quick shop</h1>
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
        <div className="third-div">
          <h1>my account</h1>
          <div className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
        <div className="forth-div">
          <h1>newsletter</h1>
          <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>

          <div className="subscribe">
            <div className="subscribe-form">
              <input type="email" placeholder="Your email address" />
              <button type="btn">sign up</button>
            </div>

            <div className="follow">
              <h1>follow us</h1>
              <div className="social">
                {icons.map((item, index) => {
                  const { icon, link } = item;
                  return (
                    <button key={index}>
                      <Link to={link}>{icon}</Link>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="line"></div>
      <section className="bottom-section">
        <p>
          &copy; <Link to="/">Domain</Link>, All Rights Reserved. Designed by{" "}
          <Link to="/">Funnso Julius</Link>
        </p>
        <div className="payment-img">
          <img src={payments} alt="payment " />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
