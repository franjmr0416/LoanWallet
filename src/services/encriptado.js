const bcrypt = require('bcrypt');

const SALT = 10;

const passEncryptService = async (password) => {
  const hash = await bcrypt.hash(password, SALT);
  return hash;
};

const passDecryptService = async (hashPassword) => {
  const compare = await bcrypt.compare(hashPassword, SALT);
  return compare;
};

module.exports = {
  passEncryptService,
  passDecryptService,
};
