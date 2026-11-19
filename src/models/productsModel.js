import products from "../data.json" with { type: "json" };

export const getProducts = async () => {
  return products;
};
