import { ProductItemType } from "@/types/product";
import React from "react";
import { ProductItem } from "./ProductItem";

export const ProductArea = ({ products }: { products: ProductItemType[] }) => {
  return (
    <ul className="my-[20px] grid sm:grid-cols-2 md:grid-cols-3 gap-[15px] xl:grid-cols-4">
      {products.map((item, key) => (
        <ProductItem product={item} key={key} />
      ))}
    </ul>
  );
};
