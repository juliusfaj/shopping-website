import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import SideBar from "../components/sidebar";
import BeforeFooter from "../components/beforeFooter";
import Footer from "../components/footer";
import ContactUs from "../components/contactUs";

const Contact = () => {
  return (
    <section className="container">
      <Nav />
      <SideBar />

      <section className="contact-container">
        <div className="line-container">
          <h1>contact us</h1>
          <div className="contact-line"></div>
        </div>
        <ContactUs />
      </section>
      <BeforeFooter />
      <Footer />
    </section>
  );
};

export default Contact;
