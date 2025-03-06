"use client";
import { useRouter } from "next/navigation";
import { ReactNode, useContext, useEffect, useState } from "react";
import api from "../api/api";
import { Category, Item } from "@/types/category";

import { Product, ProductItemType } from "@/types/product";
import { ProductArea } from "@/components/ProductArea";
import { CategoryArea } from "@/components/CategoryArea";
import { ProductPaginationItem } from "@/components/ProductPaginationItem";
import { SearchContext } from "@/contexts/SearchContext";
import { Modal } from "@/components/Modal";
import { ModalProduct } from "@/components/ModalProduct";

let searchTimer: NodeJS.Timeout;

const HomePage = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<Item[]>();
  const [products, setProducts] = useState<ProductItemType[]>();
  const [totalPages, setTotalPages] = useState(0);

  const [activeCategory, setActiveCategory] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [searchConte, setActiveSearch] = useState("");

  const searchContext = useContext(SearchContext);

  const getProducts = async () => {
    const prods: Product = await api.getProducts(
      activeCategory,
      activePage,
      searchConte
    );
    if (prods.error == "") {
      setTotalPages(prods.result.pages);
      setActivePage(prods.result.page);
      setProducts(prods.result.data);
    }
  };
  useEffect(() => {
    api.getCategories().then((cat: Category) => {
      if (cat.error == "") {
        setCategories(cat.result);
      }
    });
  }, []);

  useEffect(() => {
    setProducts([]);
    getProducts();
  }, [activeCategory, activePage, searchConte]);

  useEffect(() => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      if (searchContext?.search.inputSearch != undefined) {
        setActiveSearch(searchContext?.search.inputSearch);
        console.log(searchContext?.search.inputSearch);
      }
    }, 2000);
  }, [searchContext?.search.inputSearch]);

  return (
    <div>
      {/* <h1>Home Page</h1>
      <button onClick={() => router.push("./tela2")}>Ir para Tela 2</button> */}

      {categories != undefined && (
        <CategoryArea
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}
      {products != undefined && <ProductArea products={products} />}

      {totalPages > 0 && (
        <div className="ProductPaginationArea flex flex-wrap gap-[10px]">
          {Array(totalPages)
            .fill(0)
            .map((item, key) => (
              <ProductPaginationItem
                key={key}
                activePage={activePage}
                currentPage={key + 1}
                onClick={() => setActivePage(key + 1)}
              />
            ))}
        </div>
      )}
      <Modal>
        <ModalProduct />
      </Modal>
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
