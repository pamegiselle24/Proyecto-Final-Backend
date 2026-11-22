import express from "express";
import {
  getAllProducts,
  getProductById,
} from "../controllers/productsController.js";
import { authentication } from "../middlewares/authentication.js";

const router = express.Router();

router.get("/products", getAllProducts);

router.get("/products/:id", authentication, getProductById);

router.post("/products", (req, res) => {
  res.send("Producto creado");
});

export default router;
