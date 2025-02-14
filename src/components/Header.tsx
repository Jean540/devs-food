"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  search: string;
  onSearch: (input: string) => void;
};

export const Header = ({ search, onSearch }: Props) => {
  const [inputActive, setInputActive] = useState(search ? 300 : 0);
  const handleInputFocus = () => {
    setInputActive(300);
  };

  const handleInputBlur = () => {
    if (search === "") {
      setInputActive(0);
    }
  };

  return (
    <div className="bg-[#126712] top-[10px] rounded-[10px] p-[20px] flex justify-between items-center">
      <Image
        src={"/assets/logo.png"}
        height={70}
        width={230}
        alt="Logo image"
      />

      <input
        type="text"
        placeholder="Digite um produto..."
        className=" outline-none text-black rounded-[25px] h-[50px] text-[15px]"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        style={{
          cursor: inputActive ? "text" : "pointer",
          transition: "all ease .3s",
          width: inputActive,
          backgroundImage: `url(/assets/search.png)`,
          backgroundSize: "30px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "10px center",
          paddingLeft: "50px",
        }}
      />
    </div>
  );
};
// bg-[#126712]
