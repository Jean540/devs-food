let baseUrl = "https://api.b7web.com.br/devsfood/api";
export default {
  getCategories: async () => {
    const res = await fetch(`${baseUrl}/categories`);
    const json = await res.json();
    return json;
  },
  getProducts: async () => {
    const res = await fetch(`${baseUrl}/products`);
    const json = await res.json();
    return json;
  },
  getProduct: async (id: string) => {
    const res = await fetch(`${baseUrl}/product/${id}`);
    const json = await res.json();
    return json;
  },
};
