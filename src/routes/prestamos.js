const { Router } = require('express');
const router = Router();

const {
  getPrestamos,
  createPrestamos,
  updatePrestamos,
  deletePrestamos,
} = require('../controllers/prestamos');

//get all
router.get('/prestamos/:id', getPrestamos);
//create client
router.post('/prestamos', createPrestamos);
//update client
router.put('/prestamos/:id', updatePrestamos);
//delete client
router.delete('/prestamos/:id', deletePrestamos);

module.exports = router;
