const { Router } = require('express');
const router = Router();

const {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
  loginUsuario,
} = require('../controllers/usuario');

//get all
router.get('/usuario/:id', getUsuario);
//create user
router.post('/usuario', createUsuario);
//update user
router.put('/usuario/:id', updateUsuario);
//delete user
router.delete('/usuario/:id', deleteUsuario);
//login user
router.post('/usuario/login', loginUsuario);

module.exports = router;
