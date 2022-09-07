const express = require("express");

const app = express();

//import routes
const clienteRoutes = require("./routes/cliente");
const usuarioRoutes = require("./routes/usuario");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

//configure app
app.use(clienteRoutes);
app.use(usuarioRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 App started on http://localhost:${PORT}`);
});
