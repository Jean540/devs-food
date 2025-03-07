"use client";
import { Cart } from "@/types/Cart";
import { Product, ProductItemType } from "@/types/product";
import { ActionDispatch, createContext, ReactNode, useReducer } from "react";

const initialState: Cart = {
  products: {} as Product,
  address: [] as string[],
  discount: 0,
  delivery: 0,
};

type AddProduct = {
  type: "ADD_PRODUCT";
  payload: {
    data: ProductItemType;
    quantity: number;
  };
};

type ChangeProduct = {
  type: "CHENGE_PRODUCT";
  payload: {
    type: "+" | "-";
    key: number;
  };
};

type CartReducerActions = AddProduct | ChangeProduct;

const cartReducer = (cart: Cart, action: CartReducerActions) => {
  let products = cart.products.result?.data
    ? [...cart.products.result.data]
    : [];
  let total = cart.products.result?.total ? cart.products.result.total : 0;

  switch (action.type) {
    case "ADD_PRODUCT":
      let id = action.payload.data.id;

      let index = products.findIndex((item) => item.id == id);
      total = total + action.payload.data.price;
      if (index > -1) {
        products[index] = {
          ...products[index],
          quantity: products[index].quantity + action.payload.quantity,
        };
      } else {
        products.push({
          ...action.payload.data,
          quantity: action.payload.quantity,
        });
      }
      cart = {
        ...cart,
        products: {
          ...cart.products,
          result: {
            ...cart.products.result,
            data: products,
            total,
          },
        },
      };
      break;
    case "CHENGE_PRODUCT":
      if (action.payload.type == "+") {
        total = total + products[action.payload.key].price;
        products[action.payload.key] = {
          ...products[action.payload.key],
          quantity: products[action.payload.key].quantity + 1,
        };
        cart = {
          ...cart,
          products: {
            ...cart.products,
            result: {
              ...cart.products.result,
              data: products,
              total,
            },
          },
        };
      } else if (
        products[action.payload.key].quantity > 1 &&
        action.payload.type == "-"
      ) {
        total = total - products[action.payload.key].price;
        products[action.payload.key] = {
          ...products[action.payload.key],
          quantity: products[action.payload.key].quantity - 1,
        };
        cart = {
          ...cart,
          products: {
            ...cart.products,
            result: {
              ...cart.products.result,
              data: products,
              total,
            },
          },
        };
      } else {
        total = total - products[action.payload.key].price;
        products = products.filter(
          (product, index) => index != action.payload.key
        );
        cart = {
          ...cart,
          products: {
            ...cart.products,
            result: {
              ...cart.products.result,
              data: products,
              total,
            },
          },
        };
      }
  }

  return cart;
};

type CartContextType = null | {
  cart: Cart;
  dispatch: ActionDispatch<[action: CartReducerActions]>;
};

export const CartContext = createContext<CartContextType>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
