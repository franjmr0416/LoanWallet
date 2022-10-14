const comisionadosServices = require('../services/comisionados');

const getComisionados = async (req, res) => {
  const result = await comisionadosServices.getComisionadosService(req);
  res.json(result);
};

const createComisionados = async (req, res) => {
  const result = await comisionadosServices.createComisionadosService(req);
  res.json(result);
};

const updateComisionados = async (req, res) => {
  const result = await comisionadosServices.updateComisionadosService(req);
  res.json(result);
};

const deleteComisionados = async (req, res) => {
  const result = await comisionadosServices.deleteComisionadosService(req);
  res.json(result);
};

module.exports = {
  getComisionados,
  createComisionados,
  updateComisionados,
  deleteComisionados,
};
