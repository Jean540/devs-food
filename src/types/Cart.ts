import { Product } from "./product";

export type Cart = {
  products: Product;
  address: string[];
  discount: number;
  delivery: number;
};
