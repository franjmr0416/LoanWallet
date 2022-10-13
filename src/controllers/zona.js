const zonaServices = require('../services/zona');

const getZona = async (req, res) => {
  const result = await zonaServices.getZonaService(req);
  res.json(result);
};

const createZona = async (req, res) => {
  const result = await zonaServices.createZonaService(req);
  res.json(result);
};

const updateZona = async (req, res) => {
  const result = await zonaServices.updateZonaService(req);
  res.json(result);
};

const deleteZona = async (req, res) => {
  const result = await zonaServices.deleteZonaService(req);
  res.json(result);
};

module.exports = {
  getZona,
  createZona,
  updateZona,
  deleteZona,
};
