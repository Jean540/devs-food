"use client";
import { Tooltip } from "react-tooltip";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#136713] w-[80px] gap-[10px]">
      <Tooltip id="tip-right" place="right" />

      <MenuItem icon="/assets/store.png" link="/" title="Loja" />
      <MenuItem icon="/assets/order.png" link="/orders" title="Pedidos" />
      <MenuItem icon="/assets/profile.png" link="/profile" title="Meu Perfil" />
    </div>
  );
};
