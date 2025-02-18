import { Item } from "@/types/category";
import Image from "next/image";
import React, { useEffect } from "react";

type Props = {
  data: Item;
  activeCategory: number;
  setActiveCategory: (n: number) => void;
};

export const CategoryItem = ({
  data,
  activeCategory,
  setActiveCategory,
}: Props) => {
  return (
    <li
      data-tooltip-id="tip-top"
      data-tooltip-content={data.name}
      data-tooltip-place="top"
      className="size-[80px] rounded-[20px] flex justify-center items-center cursor-pointer"
      style={{
        background: activeCategory == data.id ? "white" : "#AAE09A",
        transition: "all ease 0.3s",
      }}
      onClick={() => setActiveCategory(data.id)}
    >
      <Image
        src={data.image}
        height={53}
        width={53}
        alt="Category Item Image"
      />
    </li>
  );
};

// src={data.image.includes('assets') ? data.image : }
