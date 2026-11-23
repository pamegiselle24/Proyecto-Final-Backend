import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/productsRoutes.js";
import { authRouter } from "./src/routes/authRoutes.js";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/api", productsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "404 ruta no encontrada",
    mensaje: `el recurso ${req.url} no existe`,
  });
});

app.listen(PORT, () => {
  console.log(`Escuchando en puerto: http://localhost:${PORT}`);
});
