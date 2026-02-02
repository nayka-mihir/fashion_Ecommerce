import React from "react";
import { Link } from "react-router-dom";

const OfferCard = ({ image, title, subtitle,parentId,subId, className ='' }) => {
  return (


    <Link to={`/product/${parentId}/${subId}`}>
    <div  className={`relative  ${className} flex-none flex-shrink-0  h-[320px] rounded-2xl overflow-hidden shadow-lg group`}>
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 "
        />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div> */}

      {/* Text content */}
      <div className="absolute bottom-0 left-0 w-full p-5 py-7 text-white flex flex-col items-start ">
        <h3 className="text-4xl font-semibold mb-1">{title}</h3>
        <p className="text-md opacity-90">{subtitle}</p>
      </div>
    </div>
    </Link>
  );
};

export default OfferCard;
