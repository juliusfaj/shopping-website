import React from "react";
import faj from "../img/faj.png";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="contact-from-container">
        <form className="contact-form">
          <input type="text" placeholder="your name" />
          <input type="email" placeholder="your email" />
          <input type="text" placeholder="subject" />
          <textarea placeholder="message"></textarea>
          <button type="submit">send message</button>
        </form>
      </div>
      <div className="contact-address-container">
        <div className="address-img-container">
          <img src={faj} alt="address image" />
        </div>
        <div className="address-container">
          <p>123 Street, Alakia NIGERIA</p>
          <p>info@faj.com</p>
          <p>+234 808 4885370</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
