const { Router } = require('express');
const router = Router();

const {
  getComisionados,
  createComisionados,
  updateComisionados,
  deleteComisionados,
} = require('../controllers/comisionados');

//get all
router.get('/comisionados/:id', getComisionados);
//create client
router.post('/comisionados', createComisionados);
//update client
router.put('/comisionados/:id', updateComisionados);
//delete client
router.delete('/comisionados/:id', deleteComisionados);

module.exports = router;
