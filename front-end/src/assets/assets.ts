import p_img1 from './Images/p_img1.png'
import p_img2_1 from './Images/p_img2_1.png'
import p_img3 from './Images/p_img3.png'
import p_img4 from './Images/p_img4.png'
import p_img5 from './Images/p_img5.png'
import p_img6 from './Images/p_img6.png'
import p_img7 from './Images/p_img7.png'
import p_img8 from './Images/p_img8.png'
import p_img9 from './Images/p_img9.png'
import p_img10 from './Images/p_img10.png'
import p_img11 from './Images/p_img11.png'
import p_img12 from './Images/p_img12.png'
import p_img13 from './Images/p_img13.png'
import p_img14 from './Images/p_img14.png'
import p_img15 from './Images/p_img15.png'
import p_img16 from './Images/p_img16.png'
import p_img17 from './Images/p_img17.png'
import p_img18 from './Images/p_img18.png'
import p_img19 from './Images/p_img19.png'
import p_img20 from './Images/p_img20.png'
import p_img21 from './Images/p_img21.png'
import p_img22 from './Images/p_img22.png'
import p_img23 from './Images/p_img23.png'
import p_img24 from './Images/p_img24.png'
import p_img25 from './Images/p_img25.png'
import p_img26 from './Images/p_img26.png'
import p_img27 from './Images/p_img27.png'
import p_img28 from './Images/p_img28.png'
import p_img29 from './Images/p_img29.png'
import p_img30 from './Images/p_img30.png'
import p_img31 from './Images/p_img31.png'
import p_img32 from './Images/p_img32.png'
import p_img33 from './Images/p_img33.png'
import p_img34 from './Images/p_img34.png'
import p_img35 from './Images/p_img35.png'
import p_img36 from './Images/p_img36.png'
import p_img37 from './Images/p_img37.png'
import p_img38 from './Images/p_img38.png'
import p_img39 from './Images/p_img39.png'
import p_img40 from './Images/p_img40.png'
import p_img41 from './Images/p_img41.png'
import p_img42 from './Images/p_img42.png'
import p_img43 from './Images/p_img43.png'
import p_img44 from './Images/p_img44.png'
import p_img45 from './Images/p_img45.png'
import p_img46 from './Images/p_img46.png'
import p_img47 from './Images/p_img47.png'
import p_img48 from './Images/p_img48.png'
import p_img49 from './Images/p_img49.png'
import p_img50 from './Images/p_img50.png'
import p_img51 from './Images/p_img51.png'
import p_img52 from './Images/p_img52.png'


import logo from './Images/logo.png'
import hero_img from './Images/hero_img.png'
import cart_icon from './Images/cart_icon.png'
import bin_icon from './Images/bin_icon.png'
import dropdown_icon from './Images/dropdown_icon.png'
import exchange_icon from './Images/exchange_icon.png'
import profile_icon from './Images/profile_icon.png'
import quality_icon from './Images/quality_icon.png'
import search_icon from './Images/search_icon.png'
import star_dull_icon from './Images/star_dull_icon.png'
import star_icon from './Images/star_icon.png'
import support_img from './Images/support_img.png'
import menu_icon from './Images/menu_icon.png'
import about_img from './Images/about_img.png'
import contact_img from './Images/contact_img.png'

import stripe_logo from './Images/stripe_logo.png'
import cross_icon from './Images/cross_icon.png'
import { Product } from '../context/contextType'

export const assets = {
    logo,
    hero_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    about_img,
    contact_img,
  
    stripe_logo,
    cross_icon
}

export const productList:Product[] = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        bestseller: true,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), // Add updatedAt property (you can replace this with the actual update date)
      },
      {
        _id: "aaaab",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A comfortable cotton t-shirt with a round neckline, perfect for casual wear.",
        price: 120,
        image: [p_img2_1],
        category: "Men",
        subCategory: "T-shirts",
        sizes: ["M", "L", "XL"],
        bestseller: false,
        stock: 30, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property
        updatedAt: new Date().toISOString(), // Add updatedAt property
      },
    {
        _id: "aaaac",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img3],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        bestseller: true,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaad",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "XXL"],
        bestseller: true,
        stock: 30, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaae",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        bestseller: true,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaaf",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img6],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "L", "XL"],
        bestseller: true,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaag",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img7],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaah",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaai",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img9],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaaj",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 110,
        image: [p_img10],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaak",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 120,
        image: [p_img11],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaal",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img12],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false, 
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaam",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 130,
        image: [p_img13],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaan",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img14],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaao",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 140,
        image: [p_img15],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaap",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img16],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaaq",
        name: "Men Tapered Fit Flat-Front Trousers",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 150,
        image: [p_img17],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaar",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img18],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaas",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 160,
        image: [p_img19],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
       bestseller: false,
       stock: 30, // Add stock property
       createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
       updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaat",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img20],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaau",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 170,
        image: [p_img21],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaav",
        name: "Women Palazzo Pants with Waist Belt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img22],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaaw",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 180,
        image: [p_img23],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaax",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img24],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaay",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 190,
        image: [p_img25],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaaz",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img26],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaba",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 200,
        image: [p_img27],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 30, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabb",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img28],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabc",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 210,
        image: [p_img29],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabd",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img30],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabe",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 220,
        image: [p_img31],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabf",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img32],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 30, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabg",
        name: "Girls Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 230,
        image: [p_img33],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabh",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img34],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabi",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 240,
        image: [p_img35],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabj",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img36],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabk",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 250,
        image: [p_img37],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabl",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img38],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 60, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabm",
        name: "Men Printed Plain Cotton Shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 260,
        image: [p_img39],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabn",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img40],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabo",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 270,
        image: [p_img41],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabp",
        name: "Boy Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img42],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabq",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 280,
        image: [p_img43],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 60, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabr",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img44],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 33, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabs",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 290,
        image: [p_img45],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabt",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img46],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 35, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabu",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 300,
        image: [p_img47],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
       
        bestseller: false,
        stock: 30, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabv",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 330,
        image: [p_img48],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
        
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabw",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 310,
        image: [p_img49],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
         
        bestseller: false,
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabx",
        name: "Kid Tapered Slim Fit Trouser",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 340,
        image: [p_img50],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaaby",
        name: "Women Zip-Front Relaxed Fit Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 320,
        image: [p_img51],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
     
        bestseller: false, 
        stock: 50, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    },
    {
        _id: "aaabz",
        name: "Men Slim Fit Relaxed Denim Jacket",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 350,
        image: [p_img52],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S", "M", "L", "XL"],
         
        bestseller: false,
         stock: 40, // Add stock property
        createdAt: new Date().toISOString(), // Add createdAt property (you can replace this with the actual creation date)
        updatedAt: new Date().toISOString(), 
    }

]