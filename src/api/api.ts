import { stringify } from "querystring";

let baseUrl = "https://api.b7web.com.br/devsfood/api";
export default {
  getCategories: async () => {
    const res = await fetch(`${baseUrl}/categories`);
    const json = await res.json();
    return json;
  },
  getProducts: async (category: number, page: number, search: string) => {
    let fields: { category?: number; page?: number; search?: string } = {};
    if (category !== 0) {
      fields.category = category;
    }
    if (page > 0) {
      fields.page = page;
    }
    if (search != "") {
      fields.search = search;
    }

    // let queryString = new URLSearchParams((fields)).toString();
    let queryString = stringify(fields);

    const res = await fetch(`${baseUrl}/products?${queryString}`);
    const json = await res.json();
    return json;
  },
  // getProduct: async (id: string) => {
  //   const res = await fetch(`${baseUrl}/product/${id}`);
  //   const json = await res.json();
  //   return json;
  // },
};
