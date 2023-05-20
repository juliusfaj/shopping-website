import React from "react";

import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

// image import
import cat_1 from "./img/cat-1.jpg";
import cat_2 from "./img/cat-2.jpg";
import cat_3 from "./img/cat-3.jpg";
import cat_4 from "./img/cat-4.jpg";

import product_1 from "./img/product-1.jpg";
import product_2 from "./img/product-2.jpg";
import product_3 from "./img/product-3.jpg";
import product_4 from "./img/product-4.jpg";
import product_5 from "./img/product-5.jpg";
import product_6 from "./img/product-6.jpg";
import product_7 from "./img/product-7.jpg";
import product_8 from "./img/product-8.jpg";
import product_9 from "./img/product-9.jpg";

// end

export const shoppingData = [
  {
    id: 1,
    price: 30.0,
    category: "clothes",
    name: "top female",
    amount: 1,
    img: cat_1,
  },

  {
    id: 2,
    price: 70.0,
    category: "device",
    name: "Samsung camera",
    amount: 1,
    img: cat_2,
  },
  {
    id: 3,
    price: 15.0,
    category: "shoes",
    name: "sneekers",
    amount: 1,
    img: cat_3,
  },
  {
    id: 4,
    price: 5.0,
    category: "cream",
    name: "nevia",
    amount: 1,
    img: cat_4,
  },

  //   product
  {
    id: 5,
    price: 200.0,
    category: "device",
    name: "LG camera",
    amount: 1,
    img: product_1,
  },
  {
    id: 6,
    price: 40.0,
    category: "clothes",
    name: "sweeter",
    amount: 1,
    img: product_2,
  },

  {
    id: 7,
    price: 50.0,
    category: "device",
    name: "table lamp",
    amount: 1,
    img: product_3,
  },
  {
    id: 8,
    price: 15.0,
    category: "shoes",
    name: "black sneekers",
    amount: 1,
    img: product_4,
  },
  {
    id: 9,
    price: 700.0,
    category: "device",
    name: "drone",
    amount: 1,
    img: product_5,
  },
  {
    id: 10,
    price: 80.0,
    category: "device",
    name: "watch",
    amount: 1,
    img: product_6,
  },
  {
    id: 11,
    price: 35.0,
    category: "clothes",
    name: "casual wear",
    amount: 1,
    img: product_7,
  },
  {
    id: 12,
    price: 5.0,
    category: "cream",
    name: "body cool",
    amount: 1,
    img: product_8,
  },
  {
    id: 13,
    price: 70.0,
    category: "office",
    name: "office chair",
    amount: 1,
    img: product_9,
  },
];

export const icons = [
  { link: "/", icon: <FaFacebook /> },
  { link: "/", icon: <FaGithub /> },
  { link: "/", icon: <FaTwitter /> },
  { link: "/", icon: <FaLinkedin /> },
  { link: "/", icon: <FaWhatsapp /> },
];
