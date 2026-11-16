import products from "../data.json" with { type: "json" };
export const getAllProductsService = async () => {
  return products;
};

export const getProductByIdService = async (id) => {
  return products.find((product) => product.id === Number(id));
};
