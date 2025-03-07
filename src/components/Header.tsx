"use client";

import { SearchContext } from "@/contexts/SearchContext";
import Image from "next/image";
import { useContext, useState } from "react";

// type Props = {
//   search: string;
//   onSearch: (input: string) => void;
// };

export const Header = () => {
  const searchContext = useContext(SearchContext);
  const [inputActive, setInputActive] = useState(
    searchContext?.search.inputSearch ? 300 : 0
  );
  const handleInputFocus = () => {
    setInputActive(300);
  };

  const handleInputBlur = () => {
    if (searchContext?.search.inputSearch === "") {
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
      {searchContext?.search.showInput && (
        <input
          type="text"
          placeholder="Digite um produto..."
          className=" outline-none text-black rounded-[25px] h-[50px] text-[15px]"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          value={searchContext?.search.inputSearch}
          onChange={(e) =>
            searchContext?.dispatch({
              type: "SET_SEARCH",
              payload: { inputSearch: e.target.value },
            })
          }
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
      )}
    </div>
  );
};
// bg-[#126712]
