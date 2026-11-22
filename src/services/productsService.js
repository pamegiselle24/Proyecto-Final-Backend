import {
  getProducts,
  getProductById,
  getProductByCategory,
} from "../models/productsModel.js";

export const getAllProductsService = async (category) => {
  if (category) {
    const filterProducts = await getProductByCategory(category);
    return filterProducts;
  } else {
    const products = await getProducts();
    return products;
  }
};

export const getProductByIdService = async (id) => {
  const product = await getProductById(id);
  return product;
};
