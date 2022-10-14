const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//id == 0 return all
const getComisionadosService = async (req) => {
  const id = parseInt(req.params.id);
  let result;

  id == 0
    ? (result = await prisma.comisionados.findMany())
    : (result = await prisma.comisionados.findUnique({ where: { id: id } }));

  return result;
};

const createComisionadosService = async (req) => {
  const { usuarioId, zonaId } = req.body;
  const result = await prisma.comisionados.create({
    data: { usuarioId, zonaId },
  });
  return result;
};

const updateComisionadosService = async (req) => {
  const id = parseInt(req.params.id);
  const { usuarioId, zonaId } = req.body;

  const result = await prisma.comisionados.update({
    where: { id: id },
    data: { usuarioId: usuarioId, zonaId: zonaId },
  });
  return result;
};

const deleteComisionadosService = async (req) => {
  const id = parseInt(req.params.id);
  const result = prisma.comisionados.delete({ where: { id: id } });
  return result;
};

module.exports = {
  getComisionadosService,
  createComisionadosService,
  updateComisionadosService,
  deleteComisionadosService,
};
