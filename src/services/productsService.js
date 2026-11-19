import { getProducts } from "../models/productsModel.js";

export const getAllProductsService = async (category) => {
  const products = await getProducts();

  if (category) {
    const filterProduct = products.filter(
      (product) => product.category === category,
    );
    return filterProduct;
  } else {
    return products;
  }
};

export const getProductByIdService = async (id) => {
  const products = await getProducts();

  return products.find((product) => product.id === Number(id));
};
