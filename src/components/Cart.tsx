"use client";
import { CartContext } from "@/contexts/CartContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { CartProductItem } from "./CartProductItem";
import { UserContext } from "@/contexts/UserContext";
import { CartDelivery } from "./CartDelivery";
import { CartFinalPrices } from "./CartFinalPrices";

export const Cart = () => {
  const cartContext = useContext(CartContext);
  const cartProdutct = cartContext?.cart.products.result;

  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    cartContext?.cart.products.result?.data.forEach((element) => {
      // setTotal(element.price * element.quantity);
      console.log("entrei");
    });
  }, [cartContext?.cart.products.result]);

  return (
    <div className="bg-[#136713] rounded-t-[10px] fixed right-[30px] bottom-0 p-[15px] ">
      <div
        className="flex items-center w-[290px] gap-[10px]"
        style={{ cursor: cartProdutct ? "pointer" : "default" }}
        onClick={() => cartProdutct && setShowCart(!showCart)}
      >
        <Image
          // cartIcon
          src={"/assets/cart.png"}
          width={23}
          height={23}
          alt="Cart Image"
          className=""
        />
        <p className="text-[17px] flex-1">
          Meu Carrinho ({cartProdutct ? cartProdutct.data.length : 0})
        </p>
        {showCart && (
          <Image src={"/assets/down.png"} height={22} width={22} alt="" />
        )}
      </div>
      <div
        className="cartBody"
        style={{ display: showCart ? "block" : "none" }}
      >
        <ul className="productsArea">
          {cartProdutct?.data.map((product, key) => (
            <CartProductItem key={key} product={product} index={key} />
          ))}
        </ul>
        <CartDelivery />
        <div className="mt-6 mb-5">
          <p className="font-bold mb-1">Cupom de desconto</p>
          <input
            type="text"
            className="w-full rounded-[10px] py-1 px-2 text-black outline-none"
          />
        </div>
        <div className="mb-5">
          <CartFinalPrices label="Desconto" price={0} />
          <CartFinalPrices label="Taxa de entrega" price={0} />
          <CartFinalPrices
            label="Total"
            price={
              cartContext?.cart.products.result?.total
                ? cartContext.cart.products.result.total
                : 0
            }
          />
        </div>
        <div className="bg-[#073C07] text-center text-[15px] p-3 rounded-full">
          FINALIZAR COMPRA
        </div>
      </div>
    </div>
  );
};
