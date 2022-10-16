const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const encriptadoServices = require('../services/encriptado');

const authLogin = async (email, password) => {
  const result = await prisma.usuarios.findUnique({ where: { email: email } });

  if (result === null) {
    return 'Usuario y/o contraseña incorrectos';
  }
  const isAuth = await encriptadoServices.passDecryptService(
    password,
    result.password
  );
  return isAuth ? true : 'Usuario y/o contraseña incorrectos';
};

module.exports = {
  authLogin,
};
