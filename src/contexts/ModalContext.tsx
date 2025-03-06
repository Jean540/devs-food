"use client";
import { ProductItemType } from "@/types/product";
import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";

type ChangeModalVisibility = {
  type: "CHANGE_VISIBILITY";
  payload: { visibility: boolean };
};

type ChangeModalData = {
  type: "CHANGE_DATA";
  payload: {
    data: ProductItemType;
  };
};

type ModalActions = ChangeModalVisibility | ChangeModalData;

type Modal = {
  visibility: boolean;
  data: ProductItemType;
};

const modalReducer = (modal: Modal, actions: ModalActions): Modal => {
  switch (actions.type) {
    case "CHANGE_VISIBILITY":
      modal = { ...modal, visibility: actions.payload.visibility };
      break;
    case "CHANGE_DATA":
      modal = { ...modal, data: actions.payload.data };
      break;
  }
  return modal;
};

type ModalContextType = null | {
  modal: Modal;
  dispatch: ActionDispatch<[actions: ModalActions]>;
};

export const ModalContext = createContext<ModalContextType>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, dispatch] = useReducer(modalReducer, {
    visibility: false,
    data: {} as ProductItemType,
  });

  return (
    <ModalContext.Provider value={{ modal, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
};
