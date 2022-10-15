const abonosServices = require('../services/abonos');

const getAbonos = async (req, res) => {
  const result = await abonosServices.getAbonosService(req);
  res.json(result);
};

const createAbonos = async (req, res) => {
  const result = await abonosServices.createAbonosService(req);
  res.json(result);
};

const updateAbonos = async (req, res) => {
  const result = await abonosServices.updateAbonosService(req);
  res.json(result);
};

const deleteAbonos = async (req, res) => {
  const result = await abonosServices.deleteAbonosService(req);
  res.json(result);
};

module.exports = {
  getAbonos,
  createAbonos,
  updateAbonos,
  deleteAbonos,
};
