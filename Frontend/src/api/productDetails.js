import t_shirt from "../assets/t-shirt.webp";
import cargos from "../assets/cargos.webp";
import shirt from "../assets/shirts.webp";
import hoodies from "../assets/hoodies.webp";
import kid from "../assets/kids_clothing.png";
import women_cloths from "../assets/Womens_clothing.png";
import full_sleeve_t_shirt from "../assets/full-sleeve-t-shirt.jpg";

export const productDetails = [
   {
    id: "P101",
    title: "JVX Men Sweatshirt",
    brand: "JVX",
    categoryId: "men",
    subcategoryId: "men-tshirts",
    description: "Premium quality sweatshirt with collar styling.",

    variants: [
      {
        id: "p101-v1",
        color: "Beige",
        hex: "#d9c7a0",

        image: {
          main: t_shirt,
          gallery: [cargos, shirt]
        },

        pricing: {
          price: 529,
          mrp: 2999,
          discountPercent: 82
        },

        sizes: [
          { size: "S", stock: 12 },
          { size: "M", stock: 10 },
          { size: "L", stock: 4 },
          { size: "XL", stock: 0 }
        ]
      },

      {
        id: "p101-v2",
        color: "Brown",
        hex: "#5c3d2e",

        image: {
          main: full_sleeve_t_shirt,
          gallery: []
        },

        pricing: {
          price: 529,
          mrp: 2999,
          discountPercent: 82
        },

        sizes: [
          { size: "S", stock: 6 },
          { size: "M", stock: 13 },
          { size: "L", stock: 5 }
        ]
      }
    ]
  },
// {
//   id: "P102",
//   title: "JVX Men Sweatshirts || Sweatshirts for Men || Unisex Hoodie",
//   brand: "JVX",
//   category: "Sweatshirts",
//   description: "Premium quality sweatshirt with collar styling.",
  
//   variants: [
//     {
//       color: "Beige",
//       hex: "#d9c7a0",

//       images: {
//         main: t_shirt,
//         sub: [
//           cargos,
//           shirt
//           // "beige_3.jpg",
//           // "beige_4.jpg"
//         ]
//       },

//       price: 529,
//       mrp: 2999,
//       discountPercentage: 82,

//       sizes: [
//         { size: "S", stock: 12 },
//         { size: "M", stock: 10 },
//         { size: "L", stock: 4 },
//         { size: "XL", stock: 0 }
//       ]
//     },

//     {
//       color: "Brown",
//       hex: "#5c3d2e",

//       images: {
//         main: "brown_main.jpg",
//         sub: [
//           "brown_1.jpg",
//           "brown_2.jpg",
//           "brown_3.jpg"
//         ]
//       },

//       price: 529,
//       mrp: 2999,
//       discountPercentage: 82,

//       sizes: [
//         { size: "S", stock: 6 },
//         { size: "M", stock: 13 },
//         { size: "L", stock: 5 }
//       ]
//     },

//     {
//       color: "Grey",
//       hex: "#c9c9c9",
//       images: {
//         main: "grey_main.jpg",
//         sub: [
//           "grey_1.jpg",
//           "grey_2.jpg"
//         ]
//       },
//       price: 449,
//       mrp: 2999,
//       sizes: [
//         { size: "L", stock: 7 },
//         { size: "XL", stock: 3 }
//       ]
//     }
//   ]
// }

];
  
  


  // Continue your existing data structure...

