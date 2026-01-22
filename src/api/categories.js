// import man from "../assets/man.webp";
// import women from "../assets/Womens_clothing.png";
// import kid from "../assets/kids_clothing.png";

// export const categories = [

//   {
//     "id": "C001",
//     "name": "Men",
//     "slug": "men",
//     "image": man,
//     "subcategories": [
//       { "subId": "C001-TS", "name": "T-Shirts", "slug": "t-shirts","subImage":man },
//       { "subId": "C001-SH", "name": "Shirts", "slug": "shirts" },
//       { "subId": "C001-JK", "name": "Jackets", "slug": "jackets" }
//     ]
//   },
//   {
//     "id": "C002",
//     "name": "Women",
//     "slug": "women",
//     "image": [women],
//     "subcategories": [
//       { "subId": "C002-TS", "name": "Tops", "slug": "tops" },
//       { "subId": "C002-D", "name": "Dresses", "slug": "dresses" }
//     ]
//   },
//   {
//     "_id": "C003",
//     "name": "Kids",
//     "slug": "kids",
//     "image": "/assets/categories/kids.png",
//     "subcategories": [
//       { "subId": "C003-TS", "name": "T-Shirts", "slug": "t-shirts" },
//       { "subId": "C003-SH", "name": "Shirts", "slug": "shirts" }
//     ]
//   }

// ];


import man from "../assets/man.webp";
import women from "../assets/Womens_clothing.png";
import kid from "../assets/kids_clothing.png";

export const categories = [
  {
    id: "men",
    name: "Men",
    slug: "men",
    image: man,
    subcategories: [
      { id: "men-tshirts", name: "T-Shirts", slug: "t-shirts", subImage: man },
      { id: "men-shirts", name: "Shirts", slug: "shirts" ,subImage: man},
      { id: "men-jackets", name: "Jackets", slug: "jackets",subImage: man }
    ]
  },
  {
    id: "women",
    name: "Women",
    slug: "women",
    image: women,
    subcategories: [
      { id: "women-tops", name: "Tops", slug: "tops",subImage: man },
      { id: "women-dresses", name: "Dresses", slug: "dresses" ,subImage: man}
    ]
  },
  {
    id: "kids",
    name: "Kids",
    slug: "kids",
    image: kid,
    subcategories: [
      { id: "kids-tshirts", name: "T-Shirts", slug: "t-shirts",subImage: man },
      { id: "kids-shirts", name: "Shirts", slug: "shirts",subImage: man }
    ]
  }
];


// export const prodectCategory = [
//     { 
//         id:1,
//         image:[t_shirt],
//         title:'t-shirt'
//     },
//     { 
//         id:2,
//         image:[shirt],
//         title:'shirt'
//     },
//     { 
//         id:3,
//         image:[cargos],
//         title:'cargos'
//     },
//     { 
//         id:4,
//         image:[hoodies],
//         title:'hoodies'
//     },
//         { 
//         id:5,
//         image:[hoodies],
//         title:'glass'
//     },    { 
//         id:6,
//         image:[hoodies],
//         title:'glass'
//     },
// ]