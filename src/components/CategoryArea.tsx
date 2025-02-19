import React from "react";
import { Tooltip } from "react-tooltip";
import { CategoryItem } from "@/components/CategoryItem";
import { Item } from "@/types/category";

type Props = {
  categories: Item[];
  activeCategory: number;
  setActiveCategory: (n: number) => void;
};

export const CategoryArea = ({
  categories,
  activeCategory,
  setActiveCategory,
}: Props) => {
  return (
    <div className="text-white mt-[20px]">
      <Tooltip id="tip-top" place="top" />
      Selecione uma categoria
      <ul className="CategoryList flex gap-5 mt-[10px]">
        <CategoryItem
          data={{
            id: 0,
            name: "Todas as Categorias",
            image: "/assets/food-and-restaurant.png",
          }}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {categories.map((item, key) => (
          <CategoryItem
            key={key}
            data={item}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        ))}
      </ul>
    </div>
  );
};
