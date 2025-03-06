"use client";
import { ModalContext } from "@/contexts/ModalContext";
import { ProductItemType } from "@/types/product";
import Image from "next/image";
import React, { useContext } from "react";

export const ProductItem = ({ product }: { product: ProductItemType }) => {
  const modalContext = useContext(ModalContext);

  const handleClick = () => {
    modalContext?.dispatch({
      type: "CHANGE_DATA",
      payload: { data: product },
    });
    modalContext?.dispatch({
      type: "CHANGE_VISIBILITY",
      payload: { visibility: true },
    });
  };

  return (
    <li
      className="flex items-center bg-white rounded-[5px] p-[10px] shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="ProducPhotoArea">
        <Image
          src={product.image}
          width={96}
          height={69}
          alt="Imagem do produto"
          className="rounded-[10px]"
        />
      </div>
      <div className="ProductInfoArea text-[#136713] mx-[10px] flex-1">
        <p className="ProductName text-[20px] font-bold leading-[20px]">
          {product.name}
        </p>
        <p className="ProductPrice text-[14px]">R$ {product.price}</p>
        <p className="ProductIngredients text-[11px]">{product.ingredients}</p>
      </div>
      <div className="ProductButtonArea">
        <Image
          src={"/assets/next.png"}
          height={23}
          width={23}
          alt="Next Image"
        />
      </div>
    </li>
  );
};
