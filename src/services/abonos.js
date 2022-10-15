const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//id == 0 return all
const getAbonosService = async (req) => {
  const id = parseInt(req.params.id);
  let result;
  //cambiar id prestamo
  id == 0
    ? (result = await prisma.abonos.findMany())
    : (result = await prisma.abonos.findUnique({ where: { id: id } }));

  return result;
};

const createAbonosService = async (req) => {
  const prestamoId = parseInt(req.body.prestamoId);
  const { cantidad, fecha, estatus_abono } = req.body;
  const fechaFormat = new Date(fecha);

  const result = await prisma.abonos.create({
    data: {
      cantidad: cantidad,
      fecha: fechaFormat,
      estatus_abono: estatus_abono,
      prestamo: { connect: { id: prestamoId } },
    },
  });
  return result;
};

const updateAbonosService = async (req) => {
  const id = parseInt(req.params.id);
  const { cantidad, fecha, estatus_abono } = req.body;
  const fechaFormat = new Date(fecha);

  const result = await prisma.abonos.update({
    where: { id: id },
    data: {
      cantidad: cantidad,
      fecha: fechaFormat,
      estatus_abono: estatus_abono,
    },
  });
  return result;
};

const deleteAbonosService = async (req) => {
  const id = parseInt(req.params.id);

  const result = await prisma.abonos.delete({
    where: { id: id },
  });
  return result;
};

module.exports = {
  getAbonosService,
  createAbonosService,
  updateAbonosService,
  deleteAbonosService,
};
