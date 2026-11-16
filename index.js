import express from "express";
import cors from "cors";
import productsRouter from "./src/routes/productsRoutes.js";

const app = express();
const port = 3000; // process.env.port ?? 1234

app.use(cors());

/*
app.get("/users", (req, res) => {
  const { name, age } = req.query;
  if (name) {
    const filterUser = users.filter((user) => user.name === name);
    return res.json(filterUser);
  }
  return res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  const userInfo = users.find((user) => Number(id) === user.id);
  if (!userInfo) {
    return res.status(404).json({ message: "Usuario no encontrado" });
  }

  return res.json(userInfo);
});
*/

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
