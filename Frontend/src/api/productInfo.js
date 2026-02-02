import t_shirt from "../assets/t-shirt.webp";
import cargos from "../assets/cargos.webp";
import shirt from "../assets/shirts.webp";

export const ProductInfo = [
  {
    id: "P101",
    title: "Men's Cotton Regular Fit T-Shirt",
    brand: "Roadster",
    categoryId: "men",
    subcategoryId: "men-tshirts",
    image: t_shirt,
    price: 499,
    mrp: 999,
    discountPercent: 50
  },
  {
    id: "P102",
    title: "cargos",
    brand: "Roadster",
    categoryId: "men",
    subcategoryId: "men-tshirts",
    image: cargos,
    price: 599,
    mrp: 999,
    discountPercent: 20
  },
  {
    id: "P103",
    title: "shirt",
    brand: "Roadster",
    categoryId: "men",
    subcategoryId: "C001-SH",
    image: shirt,
    price: 499,
    mrp: 999,
    discountPercent: 50
  }
];
