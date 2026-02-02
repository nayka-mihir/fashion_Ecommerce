// pages/Home.jsx
import React, { useContext, useEffect } from "react";
import Display from "../../components/product/Display";
import Category from "../../components/product/Category";
import { WebContext } from "../../context/WebContext";
import CustomText from "../../components/common/CustomText";
import OfferCard from "../../components/product/OfferCard";
import ItemsCat from "../../components/product/ItemsCat";
import ProductCard from "../../components/product/ProductCard";
// import { productDetails } from "../api";



// import { categories } from "../assets/assets";

function Home() {
  const {ProductInfo, categories , offers = [] } = useContext(WebContext);

  const randomProduct = Object.values(ProductInfo).sort(()=>Math.random() - 0.5).slice(0,5)


  return (
    <div className="w-full min-h-[500px] p-2">
      {/* Category list */}
 
      <div className="flex flex-wrap gap-4">
        {categories.length === 0 ? (
          <div>Loading categories...</div>
        ) : (
          categories.map((item) => (
            <Category
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))
        )}
      </div>

      {/* Display (your other component) */}
      <Display />
      <CustomText text1={'Top Deals'} text2={'& Offers'}/>

      <div className="w-full flex flex-wrap justify-evenly gap-5 my-10">

        {
          offers.map((item)=>(
            <OfferCard className="w-[300px]" key={item.id} image={item.image} title={item.title} subtitle={item.subtitle}/>
          ))
        }
      </div>
      <ItemsCat/>
      <CustomText text1={'Collection'} className="mt-[20px]"/>
      <div className="flex flex-wrap pt-15 justify-evenly">
        {
          randomProduct.map((item) =>(
            <ProductCard  className="w-[290px]" key={item.id} product={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default Home;
