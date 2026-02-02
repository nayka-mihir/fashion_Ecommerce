// components/Category.jsx
import React from "react";
import { Link } from "react-router-dom";

function Category({ id, name, image }) {
  return (
    <Link to={`/type/${id}`}>
      <div className="w-40 h-[150px] p-2 flex flex-col items-center cursor-pointer hover:bg-gray-100 transition">
        <img
          className="w-[90px] h-[90px] object-cover rounded-full"
          src={image}
          alt={name}
        />
        <p className="mt-2 text-sm text-center font-medium">{name}</p>
      </div>
    </Link>
  );
}

export default Category;
