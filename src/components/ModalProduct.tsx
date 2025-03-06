import { ModalContext } from "@/contexts/ModalContext";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { ModalBtn } from "./ModalBtn";
import { CartContext } from "@/contexts/CartContext";

export const ModalProduct = () => {
  const modalContext = useContext(ModalContext);
  const cartContext = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [modalContext]);

  const handleMinusQt = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handlePlusQt = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    // juntar as informações
    //  mandar isso pro reducer
    if (modalContext) {
      cartContext?.dispatch({
        type: "ADD_PRODUCT",
        payload: { data: modalContext.modal.data, quantity },
      });
    }

    modalContext?.dispatch({
      type: "CHANGE_VISIBILITY",
      payload: { visibility: false },
    });
  };

  return (
    modalContext && (
      <div className="w-[650px] p-[20px] text-[#136713]">
        <div className="productArea flex h-[200px]">
          <Image
            src={modalContext?.modal.data.image}
            height={221}
            width={308}
            alt={modalContext?.modal.data.name}
            className="rounded-[10px]"
          />

          <div className="ml-[10px] productinfoArea flex-1 flex flex-col justify-between">
            <div className="">
              <p className="productName text-[30px] font-bold">
                {modalContext.modal.data.name}
              </p>
              <p className="productIngredients text-[14px]">
                {modalContext.modal.data.ingredients}
              </p>
            </div>
            <div className="productQuantityArea flex justify-between  ">
              <div className="productQuantity flex items-center gap-[10px]">
                <Image
                  src={"/assets/minus.png"}
                  width={24}
                  height={24}
                  alt=""
                  className="productQtImage cursor-pointer"
                  onClick={handleMinusQt}
                />
                <p className="productQtText text-[25px] font-bold">
                  {quantity}
                </p>
                <Image
                  src={"/assets/plus.png"}
                  width={24}
                  height={24}
                  alt=""
                  className="productQtImage cursor-pointer"
                  onClick={handlePlusQt}
                />
              </div>
              <p className="productPrice text-[30px] font-bold">
                R$ {(modalContext.modal.data.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        <div className="ProductButtons  mt-[10px] h-[50px] flex items-end gap-[15px] justify-end">
          <ModalBtn
            small={true}
            title={"cancelar"}
            onClick={() =>
              modalContext.dispatch({
                type: "CHANGE_VISIBILITY",
                payload: { visibility: false },
              })
            }
          />
          <ModalBtn
            title={"Adicionar ao Carrinho"}
            onClick={() => handleAddToCart()}
          />
        </div>
      </div>
    )
  );
};
