const { Router } = require('express');
const router = Router();

const {
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} = require('../controllers/cliente');

//get all
router.get('/cliente/:id', getCliente);
//create client
router.post('/cliente', createCliente);
//update client
router.put('/cliente/:id', updateCliente);
//delete client
router.delete('/cliente/:id', deleteCliente);

module.exports = router;
