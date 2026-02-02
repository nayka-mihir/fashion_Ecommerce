import React from "react";

function ThumbnailList({ allImages = [], imageIndex, setImageIndex }) {

  if (allImages.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col w-[100px] gap-2">
      {allImages.map((img, index) => (
        <img
          src={img}
          key={index}
          alt={`thumbnail-${index}`}
          onClick={() => setImageIndex(index)}
          className={`w-[80px] h-[100px] rounded cursor-pointer border ${
            imageIndex === index ? "border-black" : "border-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default ThumbnailList;
