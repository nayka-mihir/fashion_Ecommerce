import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// import { productDetails } from "../data/productDetails";


// import ProductRightSide from "../components/ProductRightSide";
import { WebContext } from "../../context/WebContext";
import MainImage from "./Gallary/MainImage";
import ThumbnailList from "./Gallary/ThumbnailList";

function Products() {
  const { id } = useParams();
  const {productDetails =[] } = useContext(WebContext)
  

  const product = productDetails.find((p) => p.id === id);

    // 🧤 SAFE CHECK — Prevent crash
  if (!product) {
    return <div className="p-10 text-red-500">Product not found...</div>;
  }

  // variant selection
  const [selectedVariant, setSelectedVariant] = useState(0);

  const variant = product.variants?.[selectedVariant];

  // 🧤 SAFE CHECK — Prevent crash
  if (!variant) {
    return <div className="p-10 text-red-500">No variant found...</div>;
  }

  // all images (main + sub)
  const allImages = [variant.images.main, ...variant.images.gallery];

  // main image index
  const [imageIndex, setImageIndex] = useState(0);

  const nextImage = () =>
    setImageIndex((prev) => (prev + 1) % allImages.length);

  const prevImage = () =>
    setImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));

  // const resetImage = () => setImageIndex(0);
  const resetImage = () => setImageIndex(0);

  return (
    <div className="flex gap-10 p-10">

      {/* LEFT IMAGES */}
      <div className="w-[100px]">
        
          <ThumbnailList allImages={allImages}
          imageIndex={imageIndex}
          setImageIndex={setImageIndex}/>
      </div>

      <div className=""><MainImage allImages={allImages}
          imageIndex={imageIndex}
          nextImage={nextImage}
          prevImage={prevImage}/>
        {/* <MainImage
          allImages={allImages}
          imageIndex={imageIndex}
          nextImage={nextImage}
          prevImage={prevImage}
        /> */}
      </div>

      {/* RIGHT SIDE */}
      {/* <ProductRightSide
        product={product}
        variant={variant}
        selectedVariant={selectedVariant}
        setSelectedVariant={setSelectedVariant}
        resetImage={resetImage}
      /> */}
    </div>
  );
}

export default Products;
