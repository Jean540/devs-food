import React from "react";

type Props = {
  activePage: number;
  currentPage: number;
  onClick: () => void;
};

export const ProductPaginationItem = ({
  activePage,
  currentPage,
  onClick,
}: Props) => {
  return (
    <div
      className="ProductPaginationItem bg-white px-[10px] py-[5px] text-black rounded-[5px] shadow-md cursor-pointer"
      style={{ background: activePage == currentPage ? "#CCC" : "white" }}
      onClick={onClick}
    >
      {currentPage}
    </div>
  );
};
