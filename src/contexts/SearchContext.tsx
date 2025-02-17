"use client";
import { ActionDispatch, createContext, ReactNode, useReducer } from "react";

type Search = {
  inputSearch: string;
  showInput: boolean;
};

const initialSearch: Search = {
  inputSearch: "",
  showInput: true,
};

type SetSearch = {
  type: "SET_SEARCH";
  payload: {
    inputSearch: string;
  };
};

type ShowInput = {
  type: "SHOW_INPUT";
  payload: {
    showInput: boolean;
  };
};

type SearchActions = SetSearch | ShowInput;

const searchReducer = (search: Search, action: SearchActions) => {
  switch (action.type) {
    case "SET_SEARCH":
      search = { ...search, inputSearch: action.payload.inputSearch };
      break;
    case "SHOW_INPUT":
      search = { ...search, showInput: action.payload.showInput };
      break;
  }
  return search;
};

type SearchContextType = null | {
  search: Search;
  dispatch: ActionDispatch<[action: SearchActions]>;
};

export const SearchContext = createContext<SearchContextType>(null);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, dispatch] = useReducer(searchReducer, initialSearch);
  return (
    <SearchContext.Provider value={{ search, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
