const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//id == 0 return all
const getClienteService = async (req) => {
  const id = parseInt(req.params.id);
  let clientes;

  id == 0
    ? (clientes = await prisma.clientes.findMany())
    : (clientes = await prisma.clientes.findUnique({ where: { id: id } }));

  return clientes;
};

const createClienteService = async (req) => {
  const { nombre, telefono, domicilio } = req.body;
  const result = await prisma.clientes.create({
    data: { nombre, telefono, domicilio },
  });
  return result;
};

const updateClienteService = async (req) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, domicilio } = req.body;

  const result = await prisma.clientes.update({
    where: { id: id },
    data: { nombre: nombre, telefono: telefono, domicilio: domicilio },
  });
  return result;
};

const deleteClienteService = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.clientes.delete({ where: { id: id } });
  return result;
};

module.exports = {
  getClienteService,
  createClienteService,
  updateClienteService,
  deleteClienteService,
};
