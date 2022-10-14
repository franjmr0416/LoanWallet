const { Router } = require('express');
const router = Router();

const {
  getAbonos,
  createAbonos,
  updateAbonos,
  deleteAbonos,
} = require('../controllers/abonos');

//get all
router.get('/abonos/:id', getAbonos);
//create
router.post('/abonos', createAbonos);
//update
router.put('/abonos/:id', updateAbonos);
//delete
router.delete('/abonos/:id', deleteAbonos);

module.exports = router;
