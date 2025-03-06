import { UserContext } from "@/contexts/UserContext";
import Image from "next/image";
import React, { useContext } from "react";

export const CartDelivery = () => {
  const userContext = useContext(UserContext);
  return (
    <div>
      <p className="font-bold mt-5 mb-2 text-[15px]">Entrega</p>
      <div className="flex justify-between items-center">
        <div>
          <p>Minha casa</p>
          <p>{userContext?.user.address?.street}</p>
          <p>
            {userContext?.user.address.city},{userContext?.user.address.state}
          </p>
        </div>
        <Image
          src={"/assets/edit.png"}
          height={18}
          width={20}
          alt="editIcon"
          className="hover:cursor-pointer"
        />
      </div>
    </div>
  );
};
