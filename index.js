import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/productsRoutes.js";

const app = express();
const port = 3000; // process.env.port ?? 1234

app.use(cors());

app.use("/api", productsRouter);

app.use((req, res) => {
  res.status(404).json({
    error: "404 ruta no encontrada",
    mensaje: `el recurso ${req.url} no existe`,
  });
});

app.listen(port, () => {
  console.log(`Escuchando en puerto: http://localhost:${port}`);
});
