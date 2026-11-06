import express from "express";

const app = express();
const port = 3000; // process.env.port ?? 1234

app.get("/", (req, res) => {
  const homePage = "<h1>Bienvenidos a mi Servidor</h1>";
  res.send(homePage);
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Luli",
      age: 13,
    },
    {
      name: "Gi",
      age: 23,
    },
  ];
  res.json(users);
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
