import { CartContext } from "@/contexts/CartContext";
import { ProductItemType } from "@/types/product";
import Image from "next/image";
import React, { useContext } from "react";

type Props = {
  product: ProductItemType;
  index: number;
};

export const CartProductItem = ({ product, index }: Props) => {
  const cartContext = useContext(CartContext);

  const handleChangeProduct = (type: "+" | "-") => {
    cartContext?.dispatch({
      type: "CHENGE_PRODUCT",
      payload: { type, key: index },
    });
  };

  return (
    <li className="productItem flex my-[10px]">
      <Image
        src={product.image}
        width={64}
        height={46}
        alt=""
        className="rounded-[10px]"
      />
      <div className="productInfoArea ml-[10px] flex-1">
        <p className="productName text-[15px] font-bold">{product.name}</p>
        <p className="productPrice text-[13px]">
          R$ {product.price.toFixed(2)}
        </p>
      </div>
      <div className="productQuantityArea flex items-center gap-[10px]">
        <Image
          src={"/assets/minusCart.png"}
          width={12}
          height={12}
          alt=""
          className="cursor-pointer"
          onClick={() => handleChangeProduct("-")}
        />
        <p className="text-[13px] font-bold">{product.quantity}</p>
        <Image
          src={"/assets/plusCart.png"}
          width={12}
          height={12}
          alt=""
          className="cursor-pointer"
          onClick={() => handleChangeProduct("+")}
        />
      </div>
    </li>
  );
};
