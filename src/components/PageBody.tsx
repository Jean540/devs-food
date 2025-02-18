"use client";
import React, { ReactNode, useState } from "react";
// import Bg from 'assets/bg.png'
import { url } from "inspector";
import { Header } from "./Header";

export const PageBody = ({ children }: { children: ReactNode }) => {
  const [headerSearch, setHeaderSearch] = useState("");
  return (
    <div
      className="flex flex-col flex-1 bg-[#00980d] p-[15px] overflow-y-auto"
      style={{ backgroundImage: `url('assets/bg.png')`, height: 2000 }}
    >
      <Header search={headerSearch} onSearch={setHeaderSearch} />
      <div className="">{children}</div>
    </div>
  );
};
