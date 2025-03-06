import React from "react";

type Props = {
  title: string;
  small?: boolean;
  onClick: () => void;
};

export const ModalBtn = ({ title, small, onClick }: Props) => {
  return (
    <button
      className="bg-[#073C07] rounded-[5px] border-0 shadow-[4px_5px_0_#00000016] text-white font-bold "
      style={{
        fontSize: small ? "13px" : "22px",
        padding: small ? "5px 10px" : "10px 20px",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
