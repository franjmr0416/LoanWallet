const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPrestamosService = async (req) => {
  const id = parseInt(req.params.id);
  let result;

  id == 0
    ? (result = await prisma.prestamos.findMany())
    : (result = await prisma.prestamos.findUnique({ where: { id: id } }));

  return result;
};

const createPrestamosService = async (req) => {
  const clienteId = parseInt(req.body.cliente);
  const comisionadoId = parseInt(req.body.comisionado);
  const freq_pagoId = parseInt(req.body.freq_pagos);
  console.log(clienteId, comisionadoId, freq_pagoId);

  const result = await prisma.prestamos.create({
    data: {
      cliente: {
        connect: { id: clienteId },
      },
      comisionado: {
        connect: { id: comisionadoId },
      },
      freqPago: {
        connect: { id: freq_pagoId },
      },
      monto,
      interes,
      saldo,
      estatus_prestamo,
    },
  });
};

const updatePrestamosService = async (req) => {};

const deletePrestamosService = async (req) => {};

module.exports = {
  getPrestamosService,
  createPrestamosService,
  updatePrestamosService,
  deletePrestamosService,
};
