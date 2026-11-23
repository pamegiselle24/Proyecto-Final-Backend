import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/productsService.js";

export const getAllProducts = async (req, res) => {
  const { category } = req.query;

  try {
    const products = await getAllProductsService(category);

    if (!products) {
      return res.status(404).json({ message: "Producto/s no encontrado/s" });
    }

    return res.json({
      message: "Producto/s encontrado/s",
      data: products,
    });
  } catch (error) {
    console.error(error);
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
    console.error(error);
    res.status(500).json({ message: "Error interno" });
  }
};

export const createProduct = async (req, res) => {
  const product = req.body;
  const { nombre, categoria, precio, stock } = product;

  if (!nombre || !categoria || precio === undefined || stock === undefined)
    return res.status(400).json({ message: "Faltan campos obligatorios" });

  try {
    const createdProduct = await createProductService(product);

    if (createdProduct) {
      return res
        .status(201)
        .json({ message: "Producto creado", data: createdProduct });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const productDeleted = await deleteProductService(id);

    if (productDeleted) {
      return res.json({ message: "Producto eliminado", data: id });
    }
    return res.status(404).json({ message: "Producto no encontrado" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error interno" });
  }
};
