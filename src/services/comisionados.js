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
  const usuario = parseInt(req.body.usuario);
  const zona = parseInt(req.body.zona);

  const result = await prisma.comisionados.create({
    data: {
      usuario: {
        connect: { id: usuario },
      },
      zona: {
        connect: { id: zona },
      },
    },
  });
  return result;
};

const updateComisionadosService = async (req) => {
  const id = parseInt(req.params.id);
  const usuario = parseInt(req.body.usuario);
  const zona = parseInt(req.body.zona);

  const result = await prisma.comisionados.update({
    where: { id: id },
    data: { usuarioId: usuario, zonaId: zona },
  });
  return result;
};

const deleteComisionadosService = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.comisionados.delete({ where: { id: id } });
  return result;
};

module.exports = {
  getComisionadosService,
  createComisionadosService,
  updateComisionadosService,
  deleteComisionadosService,
};
