//criar um array de produtos na aplicação e tirar o array do data

export type Product = {
  error: string;
  result: {
    total: number;
    page: number;
    pages: number;
    data: ProductItemType[];
  };
};

export type ProductItemType = {
  id: number;
  id_cat: number;
  name: string;
  image: string;
  price: number;
  ingredients: string;
  points: number;
  quantity: number;
};
