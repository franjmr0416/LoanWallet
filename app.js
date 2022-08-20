const express = require("express");

const app = express();

//import routes
const clienteRoutes = require("./routes/cliente");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
});

//configure app
app.use(clienteRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 App started on http://localhost:${PORT}`);
});
