const clienteServices = require('../services/cliente');

const getCliente = async (req, res) => {
  const result = await clienteServices.getClienteService(req);
  res.json(result);
};

const createCliente = async (req, res) => {
  const result = await clienteServices.createClienteService(req);
  res.json(result);
};

const updateCliente = async (req, res) => {
  const result = await clienteServices.updateClienteService(req);
  res.json(result);
};

const deleteCliente = async (req, res) => {
  const result = await clienteServices.deleteClienteService(req);
  res.json(result);
};

module.exports = {
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
};
