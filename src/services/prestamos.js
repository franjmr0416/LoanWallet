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
  const monto = parseFloat(req.body.monto);
  const interes = parseFloat(req.body.interes);
  const saldo = parseFloat(req.body.saldo);
  const estatus_prestamo = req.body.estatus_prestamo;

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
      monto: monto,
      interes: interes,
      saldo: saldo,
      estatus_prestamo: estatus_prestamo,
    },
  });
  return result;
};

const updatePrestamosService = async (req) => {};

const deletePrestamosService = async (req) => {};

module.exports = {
  getPrestamosService,
  createPrestamosService,
  updatePrestamosService,
  deletePrestamosService,
};
