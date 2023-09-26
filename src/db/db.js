import { nanoid } from "nanoid";
import snowfire from "../assets/adidas_snowfire.jpg";
import Yeezy from "../assets/Adidas_Yeezy.jpg";
import rainbow1 from "../assets/adidas_rainbow1.jpg";
import Fenty from "../assets/Puma_Fenty.jpg";
import New_purefoams from "../assets/New_purefoams.jpg";
import blackheelz from "../assets/blackheelz.jpg";
import Drmartens from "../assets/Drmartens.jpg";
import Oxfords from "../assets/Oxfords.jpg";
import pinkloafers from "../assets/pinkloafers.jpg";
import redbottoms from "../assets/redbottoms.jpg";
import toplag from "../assets/toplag.jpg";
import vans from "../assets/toplag.jpg";

export const products = [
  {
    id: nanoid(),
    name: "snowfire",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Adidas",
    colors: ["#ffffff", "#000000"],
    size: [6, 7, 8, 9, 10, 11],
    price: 5000,
    stock: 10,
    reviews: 56,
    rating: 5,
    image: snowfire,
    featured: false,
  },
  {
    id: nanoid(),
    name: "Yeezy",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Adidas",
    colors: ["#FFC0CB"],
    size: [6, 7, 8, 9, 10, 11],
    price: 4800,
    stock: 27,
    reviews: 12,
    rating: 4.7,
    image: Yeezy,
    featured: true,
  },
  {
    id: nanoid(),
    name: "rainbow1",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Adidas",
    colors: ["#ffa500", "#e81416", "#faeb36"],
    size: [6, 7, 8, 9, 10, 11],
    price: 3500,
    stock: 15,
    reviews: 5,
    rating: 3,
    image: rainbow1,
    featured: true,
  },
  {
    id: nanoid(),
    name: "New_purefoams",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Adidas",
    colors: ["#ffa500", "#e81416", "#faeb36"],
    size: [6, 7, 8, 9, 10, 11],
    price: 3500,
    stock: 15,
    reviews: 5,
    rating: 4,
    image: New_purefoams,
    featured: true,
  },
  {
    id: nanoid(),
    name: "Fenty",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Puma",
    colors: ["#ffa500"],
    size: [6, 7, 8, 9, 10, 11],
    price: 5500,
    stock: 15,
    reviews: 5,
    rating: 2,
    image: Fenty,
    featured: true,
  },

  {
    id: nanoid(),
    name: "blackheelz",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Louis Vuitton",
    colors: ["#000000"],
    size: [6, 7, 8, 9, 10, 11],
    price: 4000,
    stock: 50,
    reviews: 5,
    rating: 1,
    image: blackheelz,
    featured: true,
  },
  {
    id: nanoid(),
    name: "Drmartens",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Drmarten",
    colors: ["#ffdb58"],
    size: [6, 7, 8, 9, 10, 11],
    price: 4500,
    stock: 50,
    reviews: 5,
    rating: 4.5,
    image: Drmartens,
    featured: false,
  },

  {
    id: nanoid(),
    name: "Oxfords",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "oxford",
    colors: ["#964B00"],
    size: [6, 7, 8, 9, 10, 11],
    price: 4000,
    stock: 50,
    reviews: 5,
    rating: 5,
    image: Oxfords,
    featured: false,
  },

  {
    id: nanoid(),
    name: " pinkloafers",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "prada",
    colors: ["#E1CE7A", "#FBFFB9", "#433E0E", "#070707", "#FDE12D"],
    size: [6, 7, 8, 9, 10, 11],
    price: 4300,
    stock: 50,
    reviews: 5,
    rating: 5,
    image: pinkloafers,
    featured: true,
  },

  {
    id: nanoid(),
    name: "redbottoms",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Gucci",
    colors: ["#E1CE7A", "#FBFFB9", "#433E0E", "#070707", "#FDE12D"],
    size: [6, 7, 8, 9, 10, 11],
    price: 5000,
    stock: 50,
    reviews: 5,
    rating: 4,
    image: redbottoms,
    featured: true,
  },

  {
    id: nanoid(),
    name: "toplag",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "Fendi",
    colors: ["#E1CE7A", "#FBFFB9", "#433E0E", "#070707", "#FDE12D"],
    size: [6, 7, 8, 9, 10, 11],
    price: 5500,
    stock: 50,
    reviews: 5,
    rating: 3,
    image: toplag,
    featured: true,
  },

  {
    id: nanoid(),
    name: "vans",
    description:
      "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
    company: "vans",
    colors: ["#E1CE7A", "#FBFFB9", "#433E0E", "#070707", "#FDE12D"],
    size: [6, 7, 8, 9, 10, 11],
    price: 4000,
    stock: 50,
    reviews: 5,
    rating: 3,
    image: vans,
    featured: false,
  },

  
];
