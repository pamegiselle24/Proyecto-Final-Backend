import express from "express";

const app = express();
const port = 3000; // process.env.port ?? 1234

app.get("/", (req, res) => {
  const homePage = "<h1>Bienvenidos a mi Servidor</h1>";
  res.send(homePage);
});

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Luli", age: 13 },
    { id: 2, name: "Gi", age: 23 },
  ];
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  //res.send(Number(id));
  return res.json({
    userId: Number(id),
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "404 ruta no encontrada",
    mensaje: `el recurso ${req.url} no existe`,
  });
});

app.listen(port, () => {
  console.log(`Escuchando en puerto: http://localhost:${port}`);
});
