// src/components/ItemsCat.jsx
import React, { useContext } from "react";
import OfferCard from "./OfferCard";
import { WebContext } from "../../context/WebContext";
import CustomText from "../common/CustomText";
import { Link, useParams } from "react-router-dom";

function ItemsCat() {
  // Use useContext to read the value from the provider
  const { ProductInfo = [] } = useContext(WebContext) || {};
  const {id} = useParams();
  

  // Optional: fallback while loading / for dev
//   const fallback = [
//     {
//       id: "f1",
//       image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
//       title: "Sample Offer",
//       subtitle: "Sample subtitle",
//     },
//   ];
//   const items = prodectCategory.length ? prodectCategory : fallback;

  return (
    <div className="w-full flex flex-col  py-4 border">
      <div className="mb-6">
        <CustomText text1={"Shop by Category"} />
      </div>

      <div className="w-full flex flex-wrap object-fill justify-center gap-2">
        {ProductInfo.map((item, index) => {
          const key = item.id  ?? index;
          return (
            
            <OfferCard className='w-[220px]'
              key={key}
              image={item.image}
              title={item.title}
              parentId={item.categoryId}
              subId={item.subcategoryId}
              //   subtitle={item.subtitle}
              />
            
          );
        })}
      </div>
    </div>
  );
}

export default ItemsCat;
