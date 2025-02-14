import Image from "next/image";
import React from "react";

export const Card = () => {
  return (
    <div className="bg-[#136713] rounded-t-[10px] fixed right-[30px] bottom-0 ">
      <div className="flex items-center w-[290px] h-[50px] cursor-pointer">
        <Image
          // cartIcon
          src={"/assets/cart.png"}
          width={23}
          height={23}
          alt="Cart Image"
          className="mx-[10px]"
        />
        <p className="text-[17px]">Meu Carrinho (x)</p>
      </div>
      <div>{/* body */}</div>
    </div>
  );
};
