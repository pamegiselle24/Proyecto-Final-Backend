import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/productsRoutes.js";
import { authRouter } from "./src/routes/authRoutes.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(
  cors(),
  /*  {
    origin: "http://localhost:5173"
}*/
);
//app.use(express.json());
app.use(bodyParser.json());

app.use("/auth", authRouter);
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
