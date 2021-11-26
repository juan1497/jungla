const express = require('express');
const router = express.Router();
const {addHabitat,allHabitats,getHabitat,updateHabitat,deleteHabitat}=require('../controllers/habitat.controllers')
const { isAuth } = require("../../../middlewares/auth.middleware");

//crud
router.post('/add',addHabitat);
router.get("/",allHabitats)
router.get("/:id",getHabitat)
router.put("/update",updateHabitat)
router.delete("/delete",deleteHabitat)

module.exports = router;