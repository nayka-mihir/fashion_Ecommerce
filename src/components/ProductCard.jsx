import React from "react";
import { Link } from "react-router-dom";
// import { Webicons } from "../assets/assets";

function ProductCard({ product, className =""}) {

  const { id,brand,title,type,images,Price,mrp,discountPercent, }= product;

  const variant  = product?.variants?.[0];


  const image = variant?.images?.main; 
  
  return (
     <Link
      to={`/productDetail/${id}`}
      className={`${className} block relative border rounded-[10px] overflow-hidden`}
    >
    <div className={`card ${className} bg-[#fff] relative border rounded-xl p-[10px]  overflow-hidden`}>
      <div className="image-wrap relative items-center justify-center flex h-[250px]  roundex-ld bg-[#111] object-fill rounded-xl overflow-hidden">
        {/* <img
          className="w-full h-full object-cover block"
          src={image}
          alt="not found"
        /> */}
        {/* <div className="absolute left-[10px] text-[11px] px-[10px] top-[10px] flex items-center rounded-lg bg-white justify-between gap-3  ">
          {badge}OVERSIZED FIT
        </div> */}
        <div>
          {/* icon (use an img or svg) */}
          <div className="absolute right-[10px] top-[10px] flex items-center bg-white justify-between gap-3">

          <button
            aria-label="favorite"
            className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center"
            >
            <img src='mm' alt="favorite" className="w-5 h-5" />
          </button>
          </div>
        </div>
      </div>
      <div className="card-body p-[10px 4px 0] py-[10px]">
        <div className="flex justify-between items-center text-[#6b7280] mb-[6px]">
          <span>{brand}
            {/* Bewakoof */}
            </span> 
          <span>{type}
            {/* T-Shirt */}
            </span>
        </div>
        <h3 className="font-semibold m-[0 0 6px 0] text-lg ">
          {title}
          {/* Bewakoof X Harry Potter */}
        </h3>
        <div className="flex items-center gap-[10px]">
          <div className="font-bold">{Price}
            {/* ₹599 */}
            </div>
          <div className="text-[14px] text-[#6b7280] line-through">
            {mrp}
            {/* ₹1,249 */}
          </div>
          <div className="bg-[#f3f4f6] px-[8px] py-[2px] rounded-[8px] text-[14px] text-[#0b8235] font-normal">
            {discountPercent}
            {/* 50% OFF */}
          </div>
        </div>
        <div className="flex  justify-between items-center">
          {/* <div className="text-[#065f46] px-[6px] py-[10px] font-bold">
            {offer}jcbjc
          </div> */}
          {/* <div>{sizes}mlml</div> */}
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProductCard;
