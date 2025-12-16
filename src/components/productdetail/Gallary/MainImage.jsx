import React from "react";
import GallaryNav from "./GallaryNav";

function MainImage({ allImages, imageIndex, nextImage, prevImage }) {

  if (!allImages || allImages.length === 0) {
    return <div>No image available</div>;
  }

  return (
    <div className="relative w-[350px] h-[450px] flex items-center" >
      <img
        src={allImages[imageIndex]}
        alt="main"
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute flex items-center w-full">
        <GallaryNav nextImage={nextImage} prevImage={prevImage} />
      </div>
    </div>
  );
}

export default MainImage;
