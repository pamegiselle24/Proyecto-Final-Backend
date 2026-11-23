import {
  getProducts,
  getProductById,
  getProductByCategory,
  createProduct,
  deleteProduct,
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

export const createProductService = async (product) => {
  const newProduct = await createProduct(product);
  return newProduct;
};

export const deleteProductService = async (id) => {
  const product = await getProductById(id);
  if (!product) {
    return null;
  }

  return await deleteProduct(id);
};
