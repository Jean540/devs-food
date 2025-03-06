"use client";

import { ModalContext } from "@/contexts/ModalContext";
import React, { ReactNode, useContext } from "react";

type Props = {
  children: ReactNode;
};

export const Modal = ({ children }: Props) => {
  const modalContext = useContext(ModalContext);

  const handleCloseModal = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    //Verificando se o onClick foi disparado pelo elemento Pai
    if (event.target == event.currentTarget) {
      // o event.target mostra exatamente qual o elemento que disparou o evento,
      // o event.currentTarget mostra qual o elemento esta associado ao evento
      modalContext?.dispatch({
        type: "CHANGE_VISIBILITY",
        payload: { visibility: false },
      });
    }
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000070]  justify-center items-center "
      style={{ display: modalContext?.modal.visibility ? "flex" : "none" }}
      onClick={(e) => handleCloseModal(e)}
    >
      <div className="modalbody bg-white rounded-[20px] shadow-[0px_0px_50px_#000] max-h-[95vh] max-w-[100vw] overflow-auto">
        {children}
      </div>
    </div>
  );
};
