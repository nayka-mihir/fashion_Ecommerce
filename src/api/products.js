import t_shirt from "../assets/t-shirt.webp";
import cargos from "../assets/cargos.webp";
import shirt from "../assets/shirts.webp";
import hoodies from "../assets/hoodies.webp";
import women_cloths from "../assets/Womens_clothing.png";
import kid from "../assets/kids_clothing.png";

export const products = [
  // MEN
  { pid: 101, pname: "Men Classic T-Shirt", price: 499, pimage: t_shirt, categoryId: 1 },
  { pid: 102, pname: "Men Slim Fit Jeans", price: 999, pimage: cargos, categoryId: 1 },
  { pid: 103, pname: "Men Polo Shirt", price: 549, pimage: shirt, categoryId: 1 },
  { pid: 104, pname: "Men Formal Shirt", price: 799, pimage: shirt, categoryId: 1 },
  { pid: 105, pname: "Men Chino Pants", price: 899, pimage: cargos, categoryId: 1 },
  { pid: 106, pname: "Men Bomber Jacket", price: 1499, pimage: hoodies, categoryId: 1 },

  // WOMEN
  { pid: 201, pname: "Women Kurti", price: 799, pimage: women_cloths, categoryId: 2 },
  { pid: 202, pname: "Women Top", price: 599, pimage: women_cloths, categoryId: 2 },
  { pid: 203, pname: "Women Palazzo", price: 899, pimage: women_cloths, categoryId: 2 },

  // KIDS
  { pid: 301, pname: "Kids T-Shirt", price: 299, pimage: kid, categoryId: 3 },
  { pid: 302, pname: "Kids Shoes", price: 699, pimage: kid, categoryId: 3 },
  { pid: 303, pname: "Kids Shorts", price: 249, pimage: kid, categoryId: 3 }
];
