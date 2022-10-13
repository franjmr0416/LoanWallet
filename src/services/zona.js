const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//id == 0 return all
const getZonaService = async (req) => {
  const id = parseInt(req.params.id);
  let zonas;

  id == 0
    ? (zonas = await prisma.zonas.findMany())
    : (zonas = await prisma.zonas.findUnique({ where: { id: id } }));
  return zonas;
};

const createZonaService = async (req) => {
  const { nombre } = req.body;
  const result = await prisma.zonas.create({
    data: { nombre },
  });
  return result;
};

const updateZonaService = async (req) => {
  const id = parseInt(req.params.id);
  const { nombre } = req.body;

  const result = await prisma.zonas.update({
    where: { id: id },
    data: { nombre: nombre },
  });
  return result;
};

const deleteZonaService = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.zonas.delete({ where: { id: id } });
  return result;
};

module.exports = {
  getZonaService,
  createZonaService,
  updateZonaService,
  deleteZonaService,
};
