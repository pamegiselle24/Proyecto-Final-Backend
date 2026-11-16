//import data from "../data.json" with { type: "json" };
import {
  getAllProductsService,
  getProductByIdService,
} from "../services/productsService.js";

export const getAllProducts = async (req, res) => {
  const products = await getAllProductsService();

  const { category } = req.query;
  if (category) {
    const filterProduct = products.filter(
      (product) => product.category === category,
    );
    return res.json(filterProduct);
  }

  res.status(200).json(products);
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdService(id);

  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Producto no encontrado" });
  }
};
