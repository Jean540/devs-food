import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#136713] w-[80px] gap-[10px]">
      <MenuItem icon="/assets/store.png" link="/" alt="" />
      <MenuItem icon="/assets/order.png" link="/orders" alt="" />
      <MenuItem icon="/assets/profile.png" link="/profile" alt="" />
    </div>
  );
};
