const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//id == 0 return all
const getCliente = async (req, res) => {
  const id = parseInt(req.params.id);
  let clientes;

  id == 0
    ? (clientes = await prisma.clientes.findMany())
    : (clientes = await prisma.clientes.findUnique({ where: { id: id } }));
  res.json(clientes);
};

const createCliente = async (req, res) => {
  const { nombre, telefono, domicilio } = req.body;
  const result = await prisma.clientes.create({
    data: { nombre, telefono, domicilio },
  });
  res.json(result);
};

const updateCliente = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, domicilio } = req.body;

  const result = await prisma.clientes.update({
    where: { id: id },
    data: { nombre: nombre, telefono: telefono, domicilio: domicilio },
  });
  res.json(result);
};

const deleteCliente = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.clientes.delete({ where: { id: id } });
  res.json(result);
};

module.exports = {
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
