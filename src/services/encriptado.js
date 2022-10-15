const bcrypt = require('bcrypt');

const passEncryptService = async (password) => {
  const SALT = 10;
  const hash = await bcrypt.hash(password, SALT);
  return hash;
};

module.exports = {
  passEncryptService,
};
