"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../api/api";
import { Category, Item } from "@/types/category";
import { CategoryItem } from "@/components/CategoryItem";
import { Tooltip } from "react-tooltip";

const HomePage = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Item[]>();

  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    api.getCategories().then((cat: Category) => {
      if (cat.error == "") {
        setCategories(cat.result);
      }
    });
  }, []);

  useEffect(() => {}, [activeCategory]);

  return (
    <div>
      {/* <h1>Home Page</h1>
      <button onClick={() => router.push("./tela2")}>Ir para Tela 2</button> */}
      {categories != undefined && (
        <div className="CategoryArea text-white mt-[20px]">
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
      )}
    </div>
  );
};

export default HomePage;

/*
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <h1>Oi, {name}</h1>

            <Switch>
                <Route exact path="/">
                    <HomeScreen />
                </Route>
                <Route path="/tela2/:nome">
                    <Tela2Screen />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

*/
