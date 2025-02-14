"use client";
import React, { ReactNode, useState } from "react";
// import Bg from 'assets/bg.png'
import { url } from "inspector";
import { Header } from "./Header";

export const PageBody = ({ children }: { children: ReactNode }) => {
  const [headerSearch, setHeaderSearch] = useState("");
  return (
    <div
      className="flex flex-col flex-1 bg-[#00980d] p-[15px]"
      style={{ backgroundImage: `url('assets/bg.png')` }}
    >
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      <div className="mt-20">{children}</div>
    </div>
  );
};
