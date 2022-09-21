const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

//id == 0 return all
const getUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  let usuarios;

  id == 0
    ? (usuarios = await prisma.usuarios.findMany())
    : (usuarios = await prisma.usuarios.findUnique({ where: { id: id } }));
  res.json(usuarios);
};

const createUsuario = async (req, res) => {
  const { nombre, telefono, email, password, admin } = req.body;
  const result = await prisma.usuarios.create({
    data: { nombre, telefono, email, password, admin },
  });
  res.json(result);
};

const updateUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, telefono, email, password, admin } = req.body;

  const result = await prisma.usuarios.update({
    where: { id: id },
    data: {
      nombre: nombre,
      telefono: telefono,
      email: email,
      password: password,
      admin: admin,
    },
  });
  res.json(result);
};

const deleteUsuario = async (req, res) => {
  const id = parseInt(req.params.id);
  const result = await prisma.usuarios.delete({ where: { id: id } });
  res.json(result);
};

module.exports = {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
