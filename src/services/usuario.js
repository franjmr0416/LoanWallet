const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const encriptadoServices = require('../services/encriptado');

//id == 0 return all
const getUsuarioService = async (req) => {
  const id = parseInt(req.params.id);
  let usuarios;

  id == 0
    ? (usuarios = await prisma.usuarios.findMany())
    : (usuarios = await prisma.usuarios.findUnique({ where: { id: id } }));
  return usuarios;
};

const createUsuarioService = async (req) => {
  const { nombre, telefono, email, password, admin } = req.body;
  const hashPassword = await encriptadoServices.passEncryptService(password);

  const result = await prisma.usuarios.create({
    data: { nombre, telefono, email, password: hashPassword, admin },
  });
  return result;
};

const updateUsuarioService = async (req) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, email, password, admin } = req.body;
  const hashPassword = await encriptadoServices.passEncryptService(password);

  const result = await prisma.usuarios.update({
    where: { id: id },
    data: {
      nombre: nombre,
      telefono: telefono,
      email: email,
      password: hashPassword,
      admin: admin,
    },
  });
  return result;
};

const deleteUsuarioService = async (req) => {
  const id = parseInt(req.params.id);
  const result = await prisma.usuarios.delete({ where: { id: id } });
  return result;
};

module.exports = {
  getUsuarioService,
  createUsuarioService,
  updateUsuarioService,
  deleteUsuarioService,
};
