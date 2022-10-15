const express = require('express');

const app = express();

//import routes
const clienteRoutes = require('../src/routes/cliente');
const usuarioRoutes = require('../src/routes/usuario');
const zonaRoutes = require('../src/routes/zona');
const comisionadosRoutes = require('../src/routes/comisionados');
const prestamosRoutes = require('../src/routes/prestamos');
const abonosRoutes = require('../src/routes/abonos');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

//configure app
app.use(clienteRoutes);
app.use(usuarioRoutes);
app.use(zonaRoutes);
app.use(comisionadosRoutes);
app.use(prestamosRoutes);
app.use(abonosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 App started on http://localhost:${PORT}`);
});
