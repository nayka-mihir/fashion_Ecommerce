import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { WebContext } from "../context/WebContext";
import ProductCard from "../components/ProductCard";

function ProductList() {
  const { categoryId, subId } = useParams();
  const { productDetails = [] } = useContext(WebContext);

  // ✅ Correct filtering based on YOUR JSON
  const filteredProducts = useMemo(() => {
    return productDetails.filter(
      (product) =>
        String(product.category.id) === String(categoryId) &&
        String(product.category.subcategoryId) === String(subId)
    );
  }, [productDetails, categoryId, subId]);

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
              product={product} 
              className="w-full"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
