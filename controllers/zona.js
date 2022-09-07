const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//id == 0 return all
const getZona = async (req, res) => {
  const id = parseInt(req.params.id);
  let zonas;

  id == 0
    ? (zonas = await prisma.zonas.findMany())
    : (zonas = await prisma.zonas.findUnique({ where: { id: id } }));
  res.json(zonas);
};

const createZona = async (req, res) => {
  const { nombre } = req.body;
  const result = await prisma.zonas.create({
    data: { nombre },
  });
  res.json(result);
};

const updateZona = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;

  const result = await prisma.zonas.update({
    where: { id: id },
    data: { nombre: nombre },
  });
  res.json(result);
};

const deleteZona = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.zonas.delete({ where: { id: id } });
  res.json(result);
};

module.exports = {
  getZona,
  createZona,
  updateZona,
  deleteZona,
};
