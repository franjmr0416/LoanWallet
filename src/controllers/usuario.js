const usuarioServices = require('../services/usuario');

const getUsuario = async (req, res) => {
  const result = await usuarioServices.getUsuarioService(req);
  res.json(result);
};

const createUsuario = async (req, res) => {
  const result = await usuarioServices.createUsuarioService(req);
  res.json(result);
};

const updateUsuario = async (req, res) => {
  const result = await usuarioServices.updateUsuarioService(req);
  res.json(result);
};

const deleteUsuario = async (req, res) => {
  const result = await usuarioServices.deleteUsuarioService(req);
  res.json(result);
};

const loginUsuario = async (req, res) => {
  const result = await usuarioServices.loginUsuarioService(req);
  res.json(result);
};

module.exports = {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario,
};
