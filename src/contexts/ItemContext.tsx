"use client";
import { Item } from "@/types/item";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type ItemContextType = null | {
  name: string;
  setName: Dispatch<SetStateAction<string>>;
};

export const ItemContext = createContext<ItemContextType>(null);

export const ItemProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState("Jean");
  return (
    <ItemContext.Provider value={{ name, setName }}>
      {children}
    </ItemContext.Provider>
  );
};
