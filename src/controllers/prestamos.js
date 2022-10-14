const prestamosServices = require('../services/prestamos');

const getPrestamos = async (req, res) => {
  const result = await prestamosServices.getPrestamosService(req);
  res.json(result);
};

const createPrestamos = async (req, res) => {
  const result = await prestamosServices.createPrestamosService(req);
  res.json(result);
};

const updatePrestamos = async (req, res) => {
  const result = await prestamosServices.updatePrestamosService(req);
  res.json(result);
};

const deletePrestamos = async (req, res) => {
  const result = await prestamosServices.deletePrestamosService(req);
  res.json(result);
};

module.exports = {
  getPrestamos,
  createPrestamos,
  updatePrestamos,
  deletePrestamos,
};
