import React, { useContext, useMemo } from "react";
import { useParams } from "react-router-dom";
import { WebContext } from "../../context/WebContext";
import ProductCard from "../../components/product/ProductCard";

function ProductList() {
  const { categoryId, subId } = useParams();
  const { ProductInfo = [] ,productDetails = [] } = useContext(WebContext);

//   console.log("productInfo:", ProductInfo);
// console.log("categoryId:", categoryId);
// console.log("subId:", subId);
// console.log("Params:", useParams());


  // ✅ Correct filtering based on YOUR JSON
  const filteredProducts = useMemo(() => {
    if(!categoryId || !subId) return [];

    return ProductInfo.filter(
      (product) =>
        String(product.categoryId) === String(categoryId) &&
        String(product.subcategoryId) === String(subId)
    );
  }, [ProductInfo, categoryId, subId]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Products → {categoryId} / {subId}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
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
