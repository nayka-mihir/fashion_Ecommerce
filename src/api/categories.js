import man from "../assets/man.webp";
import women from "../assets/Womens_clothing.png";
import kid from "../assets/kids_clothing.png";

export const categories = [

  {
    "id": "C001",
    "name": "Men",
    "slug": "men",
    "image": [man],
    "subcategories": [
      { "subId": "C001-TS", "name": "T-Shirts", "slug": "t-shirts" },
      { "subId": "C001-SH", "name": "Shirts", "slug": "shirts" },
      { "subId": "C001-JK", "name": "Jackets", "slug": "jackets" }
    ]
  },
  {
    "id": "C002",
    "name": "Women",
    "slug": "women",
    "image": [women],
    "subcategories": [
      { "subId": "C002-TS", "name": "Tops", "slug": "tops" },
      { "subId": "C002-D", "name": "Dresses", "slug": "dresses" }
    ]
  },
  {
    "_id": "C003",
    "name": "Kids",
    "slug": "kids",
    "image": "/assets/categories/kids.png",
    "subcategories": [
      { "subId": "C003-TS", "name": "T-Shirts", "slug": "t-shirts" },
      { "subId": "C003-SH", "name": "Shirts", "slug": "shirts" }
    ]
  }

];
