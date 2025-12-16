import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { WebContext } from "../context/WebContext";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { categoryId, subId } = useParams();
  const { ProductInfo = [] } = useContext(WebContext);

  const filteredProducts = ProductInfo.filter(
    (p) =>
      p.categoryId === categoryId &&
      p.subcategoryId === subId
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Products → {categoryId} / {subId}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              brand={product.brand}
              title={product.title}
              images={product.thumbnail}
              Price={product.price}
              mrp={product.mrp}
              discountPercent={product.discountPercent}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
