import { Item } from "@/types/category";
import Image from "next/image";
import React from "react";

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
      className="size-[80px] rounded-[20px] flex justify-center items-center"
      style={{ background: activeCategory == data.id ? "white" : "#AAE09A" }}
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
