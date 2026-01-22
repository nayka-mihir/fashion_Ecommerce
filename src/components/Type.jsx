import React, { useContext, useMemo } from "react";
import { useParams,} from "react-router-dom";
import { WebContext } from "../context/WebContext";
import CustomText from "./CustomText";
import Display from "./Display";
import ProductCard from "./ProductCard";
import SubCategory from "./SubCategory";

function Type() {
  const { id } = useParams(); // category id
  const { categories = [], ProductInfo = [],productDetails = [] } = useContext(WebContext);

  const category = useMemo(
    () => categories.find((c) => String(c.id) === String(id)),
    [categories, id]
  );

  // helper: normalize any image field into an array (ProductCard expects `images`)
  const normalizeImagesToArray = (val) => {
    if (!val) return []; // no image
    if (Array.isArray(val)) return val;
    if (typeof val === "string") return [val];
    return [val]; // module import or other — keep wrapped
  };

  // const productsForCategory = useMemo(() => {
  //   if (!category) return [];
  //   return products
  //     .filter((p) => String(p.categoryId) === String(category.id))
  //     .map((p) => ({
  //       productId: p.pid ?? p.id,
  //       title: p.pname ?? p.name ?? p.title,
  //       displayPrice: p.price ?? p.basePrice,
  //       images: normalizeImagesToArray(p.pimage ?? p.image ?? p.images ?? p.thumbnail),
  //       categoryId: p.categoryId ?? category.id
  //     }));
  // }, [products, category]);

  // productInfo (your other source) normalized to ProductCard props
  const productsItems = useMemo(() => {
    if (!category) return [];
    return productDetails
      .filter((p) => String(p.categoryId) === String(category.id))
      .map((p) => ({
        productId: p.productId ?? p.id,
        title: p.title ?? p.name ?? p.pname ?? p.tile ?? "Untitled",
        displayPrice: p.displayPrice ?? p.price ?? p.basePrice,
        images: normalizeImagesToArray(p.images ?? p.image ?? p.thumbnail),
        categoryId: p.categoryId ?? category.id
      }));
  }, [ProductInfo, category]);

  if (!category) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
        <p>No category found for id: {id}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Category header */}
      <div className="w-full relative bg-cover bg-center">
        <div className="w-full h-[60px] flex items-center justify-center">
          <CustomText text1={category.name} />
        </div>
      </div>

      {/* Products grid from products[] */}
      <div className="flex flex-wrap gap-4">
      {category.subcategories.map((sub) => (
        <SubCategory
          key={sub.subId}
          subId={sub.id}
          name={sub.name}
          // slug={sub.slug}
          subImage = {sub.subImage}
          parentId={category.id}
        />
      ))}
    </div>  

      {/* optional sections */}
      <div className="py-12">
        <Display />
      </div>

      {/* Render productInfo items using ProductCard */}
      <div className="w-full p-5 flex flex-wrap gap-4">
        {productsItems.length > 0 ? (
          productsItems.map((item) => (
            <ProductCard
              key={item.id}
              product={item} // ALWAYS an array now
              className="w-[250px]"
            />
          ))
        ) : (
          <p className="text-center text-gray-600 w-full">No additional product items.</p>
        )}
      </div>
    </div>
  );
}

export default Type;
