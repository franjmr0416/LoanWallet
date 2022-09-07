const { Router } = require("express");
const router = Router();

const {
  getZona,
  createZona,
  updateZona,
  deleteZona,
} = require("../controllers/zona");

//get all
router.get("/zona/:id", getZona);
//create zone
router.post("/zona", createZona);
//update zone
router.put("/zona/:id", updateZona);
//delete zone
router.delete("/zona/:id", deleteZona);

module.exports = router;
