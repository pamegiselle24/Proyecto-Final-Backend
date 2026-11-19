import {
  getAllProductsService,
  getProductByIdService,
} from "../services/productsService.js";

export const getAllProducts = async (req, res) => {
  const { category } = req.query;

  try {
    const products = await getAllProductsService(category);

    if (!products /*products.length === 0*/) {
      return res.status(404).json({ message: "Producto/s no encontrado/s" });
    }

    return res.json({
      message: "Producto/s encontrado/s",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno" });
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductByIdService(id);

    if (product) {
      return res
        .status(200)
        .json({ message: "Producto encontrado", data: product });
    }
    return res.status(404).json({ message: "Producto no encontrado" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error interno" });
  }
};
