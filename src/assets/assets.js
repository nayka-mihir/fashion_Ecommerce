import heart from '../assets/heart.png'

import man from '../assets/man.webp'
import kid from '../assets/kids_clothing.png'
import women_cloths from '../assets/Womens_clothing.png'

import jewellery from '../assets/Jewellery_-_women.png'
import beauty from '../assets/Unrec_beauty.png'
import sunglass from '../assets/sunglass.png'

import shose_offer from '../assets/shose_offer.jpeg'
import t_shirt_offer from '../assets/t-shirt-offer.webp'
import shirt_offer from '../assets/shirt-offer.jpg'
import hoddy_offer from '../assets/hoddy-offer.webp'

import t_shirt from '../assets/t-shirt.webp'
import shirt from '../assets/shirts.webp'
import hoodies from '../assets/hoodies.webp'
import cargos from '../assets/cargos.webp'
import full_sleeve_t_shirt from '../assets/full-sleeve-t-shirt.jpg'


export const categories = [
  { id: 1, name: "Men Clothing", image: [man], productIds: [101, 102, 103, 104, 105, 106] },
  { id: 2, name: "Women Clothing", image: [women_cloths], productIds: [201, 202, 203] },
  { id: 3, name: "Kids Fashion", image: [kid], productIds: [301, 302, 303] }
];


/* ---------- Flattened products (fast listing) ---------- */
// export const products = [
//   // MEN
//   { pid: 101, pname: "Men Classic T-Shirt", price: 499, pimage: t_shirt, categoryId: 1 },
//   { pid: 102, pname: "Men Slim Fit Jeans", price: 999, pimage: cargos, categoryId: 1 },
//   { pid: 103, pname: "Men Polo Shirt", price: 549, pimage: shirt, categoryId: 1 },
//   { pid: 104, pname: "Men Formal Shirt", price: 799, pimage: shirt, categoryId: 1 },
//   { pid: 105, pname: "Men Chino Pants", price: 899, pimage: cargos, categoryId: 1 },
//   { pid: 106, pname: "Men Bomber Jacket", price: 1499, pimage: hoodies, categoryId: 1 },

//   // WOMEN
//   { pid: 201, pname: "Women Kurti", price: 799, pimage: women_cloths, categoryId: 2 },
//   { pid: 202, pname: "Women Top", price: 599, pimage: women_cloths, categoryId: 2 },
//   { pid: 203, pname: "Women Palazzo", price: 899, pimage: women_cloths, categoryId: 2 },

//   // KIDS
//   { pid: 301, pname: "Kids T-Shirt", price: 299, pimage: kid, categoryId: 3 },
//   { pid: 302, pname: "Kids Shoes", price: 699, pimage: kid, categoryId: 3 },
//   { pid: 303, pname: "Kids Shorts", price: 249, pimage: kid, categoryId: 3 }
// ];

// src/data/productInfo.js
// assumes same image imports exist in the file that imports this module
// e.g. import { full_sleeve_t_shirt, women_cloths, kid, t_shirt } from './assets'

// export const ProductInfo = [
//   // ---------- MEN (categoryId: 1) ----------
//   {
//     productId: 101,            // links to products pid:101
//     categoryId: 1,
//     categoryName: "Men Clothing",
//     brand: "Bewakoof",
//     type: "T-Shirt",
//     title: "Bewakoof X Harry Potter",
//     displayPrice: 599,
//     originalPrice: 1249,
//     discount: "52% OFF",
//     offer: "BUY 2 FOR ₹999",
//     sizes: ["S", "M"],
//     colors: ["Black", "White", "Navy"],
//     badge: "OVERSIZED FIT",
//     thumbnail: "https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg",
//     images: ["https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg"],
//     description: "Comfortable cotton crew-neck T-shirt with a printed Harry Potter graphic.",
//     tags: ["tshirt", "casual", "graphic"]
//   },

//   {
//     productId: 102,
//     categoryId: 1,
//     categoryName: "Men Clothing",
//     brand: "Bewakoof",
//     type: "T-Shirt",
//     title: "Bewakoof X Marvel Edition",
//     displayPrice: 699,
//     originalPrice: 1399,
//     discount: "50% OFF",
//     offer: "BUY 2 FOR ₹1199",
//     sizes: ["S", "M", "L"],
//     colors: ["White", "Grey"],
//     badge: "REGULAR FIT",
//     thumbnail: full_sleeve_t_shirt,     // imported asset
//     images: [full_sleeve_t_shirt],
//     description: "Full-sleeve lightweight tee with Marvel prints.",
//     tags: ["tshirt", "full-sleeve"]
//   },

//   {
//     productId: 103,
//     categoryId: 1,
//     categoryName: "Men Clothing",
//     brand: "Bewakoof",
//     type: "Hoodie",
//     title: "Classic Street Hoodie",
//     displayPrice: 999,
//     originalPrice: 1999,
//     discount: "50% OFF",
//     offer: "BUY 2 FOR ₹1799",
//     sizes: ["M", "L", "XL"],
//     colors: ["Beige", "Black"],
//     badge: "PREMIUM FIT",
//     thumbnail: "https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg",
//     images: ["https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg"],
//     description: "Warm and comfortable street-style hoodie.",
//     tags: ["hoodie", "outerwear"]
//   },

//   {
//     productId: 104,
//     categoryId: 1,
//     categoryName: "Men Clothing",
//     brand: "Bewakoof",
//     type: "T-Shirt",
//     title: "Minimal Black T-Shirt",
//     displayPrice: 499,
//     originalPrice: 999,
//     discount: "50% OFF",
//     offer: "BUY 2 FOR ₹899",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Black"],
//     badge: "CLASSIC FIT",
//     thumbnail: "https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg",
//     images: ["https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg"],
//     description: "Minimal plain black tee — everyday essential.",
//     tags: ["tshirt", "basic"]
//   },

//   {
//     productId: 105,
//     categoryId: 1,
//     categoryName: "Men Clothing",
//     brand: "Bewakoof",
//     type: "Sweatshirt",
//     title: "Unisex Beige Sweatshirt",
//     displayPrice: 849,
//     originalPrice: 1699,
//     discount: "50% OFF",
//     offer: "BUY 2 FOR ₹1499",
//     sizes: ["S", "M", "L", "XL"],
//     colors: ["Beige"],
//     badge: "UNISEX FIT",
//     thumbnail: "https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg",
//     images: ["https://images.bewakoof.com/t640/men-s-green-wakanda-forever-graphic-printed-oversized-t-shirt-637169-1739771293-1.jpg"],
//     description: "Cozy unisex sweatshirt with soft finish.",
//     tags: ["sweatshirt", "cozy"]
//   },

//   {
//     productId: 106,
//     categoryId: 1,
//     categoryName: "Men Clothing",
//     brand: "Bewakoof",
//     type: "Joggers",
//     title: "Slim Fit Navy Joggers",
//     displayPrice: 899,
//     originalPrice: 1799,
//     discount: "50% OFF",
//     offer: "BUY 2 FOR ₹1599",
//     sizes: ["M", "L", "XL"],
//     colors: ["Navy"],
//     badge: "SLIM FIT",
//     thumbnail: "https://images.bewakoof.com/t640/men-s-navy-joggers-637169-1739771293-1.jpg",
//     images: ["https://images.bewakoof.com/t640/men-s-navy-joggers-637169-1739771293-1.jpg"],
//     description: "Slim tapered joggers for sporty looks.",
//     tags: ["joggers", "sports"]
//   },

//   // ---------- WOMEN (categoryId: 2) ----------
//   {
//     productId: 201,
//     categoryId: 2,
//     categoryName: "Women Clothing",
//     brand: "AshaApparel",
//     type: "Kurti",
//     title: "Printed Comfortable Kurti",
//     displayPrice: 799,
//     originalPrice: 1299,
//     discount: "38% OFF",
//     offer: "FLAT 20% OFF",
//     sizes: ["S", "M", "L"],
//     colors: ["Pink", "Blue"],
//     badge: "ETHNIC WEAR",
//     thumbnail: women_cloths,     // imported asset
//     images: [women_cloths],
//     description: "Printed kurti with side slits and breathable fabric.",
//     tags: ["kurti", "ethnic"]
//   },

//   {
//     productId: 202,
//     categoryId: 2,
//     categoryName: "Women Clothing",
//     brand: "ModaVibe",
//     type: "Top",
//     title: "Lace Detail Top",
//     displayPrice: 599,
//     originalPrice: 999,
//     discount: "40% OFF",
//     offer: "BUY 2 GET 5% OFF",
//     sizes: ["S", "M", "L"],
//     colors: ["White"],
//     badge: "CASUAL",
//     thumbnail: women_cloths,
//     images: [women_cloths],
//     description: "Lightweight top with lace trims for casual outings.",
//     tags: ["top", "casual"]
//   },

//   {
//     productId: 203,
//     categoryId: 2,
//     categoryName: "Women Clothing",
//     brand: "TrendyLoom",
//     type: "Palazzo",
//     title: "Flowy Summer Palazzo",
//     displayPrice: 899,
//     originalPrice: 1299,
//     discount: "30% OFF",
//     offer: "FREE SHIPPING",
//     sizes: ["M", "L"],
//     colors: ["Black", "Beige"],
//     badge: "COMFY",
//     thumbnail: women_cloths,
//     images: [women_cloths],
//     description: "Breathable palazzo for comfortable summer wear.",
//     tags: ["palazzo", "comfortable"]
//   },

//   // ---------- KIDS (categoryId: 3) ----------
//   {
//     productId: 301,
//     categoryId: 3,
//     categoryName: "Kids Fashion",
//     brand: "TinySteps",
//     type: "T-Shirt",
//     title: "Kids Fun Tee",
//     displayPrice: 299,
//     originalPrice: 499,
//     discount: "40% OFF",
//     offer: "BUY 2 FOR ₹499",
//     sizes: ["2Y", "3Y", "4Y"],
//     colors: ["Blue", "Red"],
//     badge: "KIDS FAVORITE",
//     thumbnail: kid,
//     images: [kid],
//     description: "Soft cotton tee with playful prints for kids.",
//     tags: ["kids", "tshirt"]
//   },

//   {
//     productId: 302,
//     categoryId: 3,
//     categoryName: "Kids Fashion",
//     brand: "SprintKids",
//     type: "Shoes",
//     title: "Lightweight Kids Shoes",
//     displayPrice: 699,
//     originalPrice: 1299,
//     discount: "46% OFF",
//     offer: "FLAT 30% OFF",
//     sizes: ["9", "10", "11"],
//     colors: ["White"],
//     badge: "NON-SLIP",
//     thumbnail: kid,
//     images: [kid],
//     description: "Non-slip lightweight sports shoes for children.",
//     tags: ["kids", "shoes"]
//   },

//   {
//     productId: 303,
//     categoryId: 3,
//     categoryName: "Kids Fashion",
//     brand: "Playtime",
//     type: "Shorts",
//     title: "Active Play Shorts",
//     displayPrice: 249,
//     originalPrice: 399,
//     discount: "38% OFF",
//     offer: "BUY 2 GET 1",
//     sizes: ["3Y", "4Y"],
//     colors: ["Green"],
//     badge: "PLAY READY",
//     thumbnail: kid,
//     images: [kid],
//     description: "Elastic waist shorts built for active play.",
//     tags: ["kids", "shorts"]
//   }
// ];


// export const productDetails = {
//   // MEN
//   101: {
//     pid: 101,
//     slug: "men-classic-tshirt",
//     title: "Men Classic T-Shirt",
//     brand: "UrbanWear",
//     categoryId: 1,
//     basePrice: 499,
//     description: "Comfortable cotton crew-neck t-shirt, perfect for casual wear.",
//     material: "100% Cotton",
//     care: "Machine wash cold, tumble dry low",
//     tags: ["tshirt", "casual", "cotton"],
//     thumbnail: t_shirt,
//     variants: [
//       { variantId: "101-S-BLK", size: "S", color: "Black", price: 499, images: [t_shirt], sku: "UW-TS-101-BLK-S", stock: 24 },
//       { variantId: "101-M-WHT", size: "M", color: "White", price: 499, images: [full_sleeve_t_shirt], sku: "UW-TS-101-WHT-M", stock: 30 },
//       { variantId: "101-L-NVY", size: "L", color: "Navy", price: 499, images: [t_shirt], sku: "UW-TS-101-NVY-L", stock: 18 }
//     ]
//   },

//   102: {
//     pid: 102,
//     slug: "men-slim-fit-jeans",
//     title: "Men Slim Fit Jeans",
//     brand: "DenimPro",
//     categoryId: 1,
//     basePrice: 999,
//     description: "Slim fit stretch denim with a modern tapered leg.",
//     material: "98% Cotton, 2% Elastane",
//     tags: ["jeans", "denim", "slim"],
//     thumbnail: cargos,
//     variants: [
//       { variantId: "102-30-Blue", waist: 30, length: 32, color: "Blue", price: 999, images: [cargos], sku: "DP-JN-102-30B", stock: 12 },
//       { variantId: "102-32-Blue", waist: 32, length: 32, color: "Blue", price: 999, images: [cargos], sku: "DP-JN-102-32B", stock: 20 }
//     ]
//   },

//   103: {
//     pid: 103,
//     slug: "men-polo-shirt",
//     title: "Men Polo Shirt",
//     brand: "CoreStyle",
//     categoryId: 1,
//     basePrice: 549,
//     description: "Breathable polo with embroidered logo—smart casual staple.",
//     tags: ["polo", "casual", "smart"],
//     thumbnail: shirt,
//     variants: [
//       { variantId: "103-M-Red", size: "M", color: "Red", price: 549, images: [shirt], sku: "CS-PL-103-R-M", stock: 15 },
//       { variantId: "103-L-Black", size: "L", color: "Black", price: 549, images: [shirt], sku: "CS-PL-103-B-L", stock: 8 }
//     ]
//   },

//   104: {
//     pid: 104,
//     slug: "men-formal-shirt",
//     title: "Men Formal Shirt",
//     brand: "ExecutiveLine",
//     categoryId: 1,
//     basePrice: 799,
//     description: "Slim-fit formal shirt suitable for office and meetings.",
//     tags: ["shirt", "formal", "office"],
//     thumbnail: shirt,
//     variants: [
//       { variantId: "104-39-Blue", neck: 39, sleeve: 32, color: "Light Blue", price: 799, images: [shirt], sku: "EL-SH-104-39B", stock: 10 },
//       { variantId: "104-40-White", neck: 40, sleeve: 33, color: "White", price: 799, images: [shirt], sku: "EL-SH-104-40W", stock: 7 }
//     ]
//   },

//   105: {
//     pid: 105,
//     slug: "men-chino-pants",
//     title: "Men Chino Pants",
//     brand: "CasualEdge",
//     categoryId: 1,
//     basePrice: 899,
//     tags: ["pants", "chino", "casual"],
//     thumbnail: cargos,
//     variants: [
//       { variantId: "105-32-Khaki", waist: 32, length: 32, color: "Khaki", price: 899, images: [cargos], sku: "CE-CH-105-32K", stock: 14 },
//       { variantId: "105-34-Navy", waist: 34, length: 32, color: "Navy", price: 899, images: [cargos], sku: "CE-CH-105-34N", stock: 9 }
//     ]
//   },

//   106: {
//     pid: 106,
//     slug: "men-bomber-jacket",
//     title: "Men Bomber Jacket",
//     brand: "NorthPeak",
//     categoryId: 1,
//     basePrice: 1499,
//     tags: ["jacket", "outerwear", "winter"],
//     thumbnail: hoodies,
//     variants: [
//       { variantId: "106-M-Black", size: "M", color: "Black", price: 1499, images: [hoodies], sku: "NP-JK-106-B-M", stock: 6 },
//       { variantId: "106-L-Olive", size: "L", color: "Olive", price: 1499, images: [hoodies], sku: "NP-JK-106-O-L", stock: 4 }
//     ]
//   },

//   // WOMEN
//   201: {
//     pid: 201,
//     slug: "women-kurti",
//     title: "Women Kurti",
//     brand: "AshaApparel",
//     categoryId: 2,
//     basePrice: 799,
//     thumbnail: women_cloths,
//     variants: [
//       { variantId: "201-S-Pink", size: "S", color: "Pink", price: 799, images: [women_cloths], sku: "AA-KR-201-P-S", stock: 20 },
//       { variantId: "201-M-Blue", size: "M", color: "Blue", price: 799, images: [women_cloths], sku: "AA-KR-201-B-M", stock: 15 }
//     ]
//   },

//   202: {
//     pid: 202,
//     slug: "women-top",
//     title: "Women Top",
//     brand: "ModaVibe",
//     categoryId: 2,
//     basePrice: 599,
//     thumbnail: women_cloths,
//     variants: [
//       { variantId: "202-S-White", size: "S", color: "White", price: 599, images: [women_cloths], sku: "MV-TP-202-W-S", stock: 25 }
//     ]
//   },

//   203: {
//     pid: 203,
//     slug: "women-palazzo",
//     title: "Women Palazzo",
//     brand: "TrendyLoom",
//     categoryId: 2,
//     basePrice: 899,
//     thumbnail: women_cloths,
//     variants: [
//       { variantId: "203-M-Black", size: "M", color: "Black", price: 899, images: [women_cloths], sku: "TL-PL-203-B-M", stock: 10 }
//     ]
//   },

//   // KIDS
//   301: {
//     pid: 301,
//     slug: "kids-tshirt",
//     title: "Kids T-Shirt",
//     brand: "TinySteps",
//     categoryId: 3,
//     basePrice: 299,
//     thumbnail: kid,
//     variants: [
//       { variantId: "301-2-Blue", age: 2, size: "2Y", color: "Blue", price: 299, images: [kid], sku: "TS-KD-301-2B", stock: 40 },
//       { variantId: "301-4-Red", age: 4, size: "4Y", color: "Red", price: 299, images: [kid], sku: "TS-KD-301-4R", stock: 35 }
//     ]
//   },

//   302: {
//     pid: 302,
//     slug: "kids-shoes",
//     title: "Kids Shoes",
//     brand: "SprintKids",
//     categoryId: 3,
//     basePrice: 699,
//     thumbnail: kid,
//     variants: [
//       { variantId: "302-10-White", size: 10, color: "White", price: 699, images: [kid], sku: "SK-KD-302-10W", stock: 18 }
//     ]
//   },

//   303: {
//     pid: 303,
//     slug: "kids-shorts",
//     title: "Kids Shorts",
//     brand: "Playtime",
//     categoryId: 3,
//     basePrice: 249,
//     thumbnail: kid,
//     variants: [
//       { variantId: "303-3-Green", size: "3Y", color: "Green", price: 249, images: [kid], sku: "PL-SH-303-3G", stock: 22 }
//     ]
//   }
// };


// export const topdata = [
//   {
//     id: 1,
//     name: "Men Clothing",
//     image: [man],
//     products: [
//       {
//         pid: 101,
//         pname: "Men T-Shirt",
//         price: 499,
//         pimage: [man]
//       },
//       {
//         pid: 102,
//         pname: "Men Jeans",
//         price: 999,
//         pimage:[man]
//       },
//       {
//         pid: 102,
//         pname: "Men Jeans",
//         price: 999,
//         pimage:[man]
//       },
//       {
//         pid: 102,
//         pname: "Men Jeans",
//         price: 999,
//         pimage:[man]
//       },
//       {
//         pid: 102,
//         pname: "Men Jeans",
//         price: 999,
//         pimage:[man]
//       },
//     ]
//   },
//   {
//     id: 2,
//     name: "Women Clothing",
//     image: [man],
//     products: [
//       {
//         pid: 201,
//         pname: "Women Kurti",
//         price: 799,
//         pimage: [man]
//       },
//       {
//         pid: 202,
//         pname: "Women Top",
//         price: 599,
//         pimage: [man]
//       }
//     ]
//   },
//   {
//     id: 3,
//     name: "Kids Fashion",
//     image: [kid],
//     products: [
//       {
//         pid: 301,
//         pname: "Kids T-Shirt",
//         price: 299,
//         pimage: [man]
//       },
//       {
//         pid: 302,
//         pname: "Kids Shoes",
//         price: 699,
//         pimage: [man]
//       }
//     ]
//   }
// ]

export const Webicon = [
    heart
]

export const displayimage = [
    women_cloths,
    jewellery,
    beauty,
    sunglass
]

export const offers = [
    {
        id:1,
        image:[shose_offer],
        title:'Flat 50% OFF',
        subtitle:'On all men’s fashion'
    },
      {
        id:2,
        image:[t_shirt_offer],
        title:'Flat 50% OFF',
        subtitle:'On all men’s fashion'
    },
      {
        id:3,
        image:[shirt_offer],
        title:'Flat 50% OFF',
        subtitle:'On all men’s fashion'
    },
      {
        id:4,
        image:[hoddy_offer],
        title:'Flat 50% OFF',
        subtitle:'On all men’s fashion'
    },
      
]


export const prodectCategory = [
    { 
        id:1,
        image:[t_shirt],
        title:'t-shirt'
    },
    { 
        id:2,
        image:[shirt],
        title:'shirt'
    },
    { 
        id:3,
        image:[cargos],
        title:'cargos'
    },
    { 
        id:4,
        image:[hoodies],
        title:'hoodies'
    },
        { 
        id:5,
        image:[hoodies],
        title:'glass'
    },    { 
        id:6,
        image:[hoodies],
        title:'glass'
    },
]






export const mens_clothes = [
  {
  "menDetails": [
    {
      "pid": 101,
      "slug": "men-classic-tshirt",
      "title": "Men Classic T-Shirt",
      "brand": "UrbanWear",
      "categoryId": 1,
      "basePrice": 499,
      "description": "Comfortable cotton crew-neck t-shirt, perfect for casual wear.",
      "material": "100% Cotton",
      "care": "Machine wash cold, tumble dry low",
      "variants": [
        {
          "variantId": "101-S-BLK",
          "size": "S",
          "color": "Black",
          "price": 499,
          "images": ["man-tshirt-black-front.jpg", "man-tshirt-black-back.jpg"],
          "sku": "UW-TS-101-BLK-S",
          "stock": 24
        },
        {
          "variantId": "101-M-WHT",
          "size": "M",
          "color": "White",
          "price": 499,
          "images": ["man-tshirt-white-front.jpg", "man-tshirt-white-back.jpg"],
          "sku": "UW-TS-101-WHT-M",
          "stock": 30
        },
        {
          "variantId": "101-L-NVY",
          "size": "L",
          "color": "Navy",
          "price": 499,
          "images": ["man-tshirt-navy-front.jpg"],
          "sku": "UW-TS-101-NVY-L",
          "stock": 18
        }
      ],
      "tags": ["tshirt", "casual", "cotton"]
    },

    {
      "pid": 102,
      "slug": "men-slim-fit-jeans",
      "title": "Men Slim Fit Jeans",
      "brand": "DenimPro",
      "categoryId": 1,
      "basePrice": 999,
      "description": "Slim fit stretch denim with a modern tapered leg.",
      "material": "98% Cotton, 2% Elastane",
      "care": "Wash inside out, cold wash",
      "variants": [
        {
          "variantId": "102-30-Blue",
          "waist": 30,
          "length": 32,
          "color": "Blue",
          "price": 999,
          "images": ["man-jeans-blue-30-32.jpg"],
          "sku": "DP-JN-102-30B",
          "stock": 12
        },
        {
          "variantId": "102-32-Blue",
          "waist": 32,
          "length": 32,
          "color": "Blue",
          "price": 999,
          "images": ["man-jeans-blue-32-32.jpg"],
          "sku": "DP-JN-102-32B",
          "stock": 20
        }
      ],
      "tags": ["jeans", "denim", "slim"]
    },

    {
      "pid": 103,
      "slug": "men-polo-shirt",
      "title": "Men Polo Shirt",
      "brand": "CoreStyle",
      "categoryId": 1,
      "basePrice": 549,
      "description": "Breathable polo with embroidered logo—smart casual staple.",
      "material": "Cotton blend",
      "variants": [
        {
          "variantId": "103-M-Red",
          "size": "M",
          "color": "Red",
          "price": 549,
          "images": ["man-polo-red.jpg"],
          "sku": "CS-PL-103-R-M",
          "stock": 15
        },
        {
          "variantId": "103-L-Black",
          "size": "L",
          "color": "Black",
          "price": 549,
          "images": ["man-polo-black.jpg"],
          "sku": "CS-PL-103-B-L",
          "stock": 8
        }
      ],
      "tags": ["polo", "casual", "smart"]
    },

    {
      "pid": 104,
      "slug": "men-formal-shirt",
      "title": "Men Formal Shirt",
      "brand": "ExecutiveLine",
      "categoryId": 1,
      "basePrice": 799,
      "description": "Slim-fit formal shirt suitable for office and meetings.",
      "material": "60% Cotton, 40% Polyester",
      "variants": [
        {
          "variantId": "104-39-Blue",
          "neck": 39,
          "sleeve": 32,
          "color": "Light Blue",
          "price": 799,
          "images": ["man-formalshirt-blue.jpg"],
          "sku": "EL-SH-104-39B",
          "stock": 10
        },
        {
          "variantId": "104-40-White",
          "neck": 40,
          "sleeve": 33,
          "color": "White",
          "price": 799,
          "images": ["man-formalshirt-white.jpg"],
          "sku": "EL-SH-104-40W",
          "stock": 7
        }
      ],
      "tags": ["shirt", "formal", "office"]
    },

    {
      "pid": 105,
      "slug": "men-chino-pants",
      "title": "Men Chino Pants",
      "brand": "CasualEdge",
      "categoryId": 1,
      "basePrice": 899,
      "description": "Comfort stretch chinos for day-to-day wear.",
      "material": "Cotton blend",
      "variants": [
        {
          "variantId": "105-32-Khaki",
          "waist": 32,
          "length": 32,
          "color": "Khaki",
          "price": 899,
          "images": ["man-chino-khaki.jpg"],
          "sku": "CE-CH-105-32K",
          "stock": 14
        },
        {
          "variantId": "105-34-Navy",
          "waist": 34,
          "length": 32,
          "color": "Navy",
          "price": 899,
          "images": ["man-chino-navy.jpg"],
          "sku": "CE-CH-105-34N",
          "stock": 9
        }
      ],
      "tags": ["pants", "chino", "casual"]
    },

    {
      "pid": 106,
      "slug": "men-bomber-jacket",
      "title": "Men Bomber Jacket",
      "brand": "NorthPeak",
      "categoryId": 1,
      "basePrice": 1499,
      "description": "Insulated bomber jacket, water-resistant shell.",
      "material": "Polyester shell, polyester fill",
      "variants": [
        {
          "variantId": "106-M-Black",
          "size": "M",
          "color": "Black",
          "price": 1499,
          "images": ["man-jacket-black.jpg"],
          "sku": "NP-JK-106-B-M",
          "stock": 6
        },
        {
          "variantId": "106-L-Olive",
          "size": "L",
          "color": "Olive",
          "price": 1499,
          "images": ["man-jacket-olive.jpg"],
          "sku": "NP-JK-106-O-L",
          "stock": 4
        }
      ],
      "tags": ["jacket", "outerwear", "winter"]
    }
  ]
}

]