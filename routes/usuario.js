const { Router } = require("express");
const router = Router();

const {
  getUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} = require("../controllers/usuario");

//get all
router.get("/usuario/:id", getUsuario);
//create user
router.post("/usuario", createUsuario);
//update user
router.put("/usuario/:id", updateUsuario);
//delete user
router.delete("/usuario/:id", deleteUsuario);

module.exports = router;
