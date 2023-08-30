import { nanoid } from "nanoid"
import snowfire from "../assets/adidas_snowfire.jpg"
import Yeezy from "../assets/Adidas_Yeezy.jpg"
import rainbow1 from "../assets/adidas_rainbow1.jpg"
import  Fenty from "../assets/Puma_Fenty.jpg"
import New_purefoams from "../assets/New_purefoams.jpg"

export const products = [
    {
        id: nanoid(),
        name: "snowfire",
        description: "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
        company: "Adidas",
        colors: ["#ffffff", "#000000"],
        size:[6, 7, 8, 9, 10, 11],
        price: 5000,
        stock: 10,
        reviews: 56,
        rating: 5,
        image: snowfire,
    featured: false
    
    }, 
     {
        id: nanoid(),
        name: "Yeezy",
        description: "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
        company: "Addidas",
        colors: ["#FFC0CB"],
        size:[6, 7, 8, 9, 10, 11],
        price: 4800,
        stock: 27,
        reviews: 12,
        rating: 4.7,
        image: Yeezy,
    featured: true
    
    }, 
     {
        id: nanoid(),
        name: "rainbow1",
        description: "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
        company: "Adidas",
        colors: ["#ffa500", "#e81416", "#faeb36"],
        size:[6, 7, 8, 9, 10, 11],
        price: 3500,
        stock: 15,
        reviews: 5,
        image: rainbow1,
        featured: true
    
    }, 
    {
        id: nanoid(),
        name: "New_purefoams",
        description: "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
        company: "Adidas",
        colors: ["#ffa500", "#e81416", "#faeb36"],
        size:[6, 7, 8, 9, 10, 11],
        price: 3500,
        stock: 15,
        reviews: 5,
        image: New_purefoams,
    featured: true
    
    }, {
        id: nanoid(),
        name: "Fenty",
        description: "This product is excluded from all promotional discounts and offers. Try this shoe for 30 days and return hassle-free with our performance running shoe return guarantee",
        company: "Puma",
        colors: ["#ffa500"],
        size:[6, 7, 8, 9, 10, 11],
        price: 5500,
        stock: 15,
        reviews: 5,
        image: Fenty,
    featured: true
    
    }, 


    
]