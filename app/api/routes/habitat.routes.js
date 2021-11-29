const express = require('express');
const router = express.Router();
const {addHabitat,allHabitats,getHabitat,updateHabitat,deleteHabitat}=require('../controllers/habitat.controllers')
const { isAuth } = require("../../../middlewares/auth.middleware");

//crud
router.post('/add', [isAuth],addHabitat);
router.get("/", [isAuth],allHabitats)
router.get("/:id", [isAuth],getHabitat)
router.put("/update", [isAuth],updateHabitat)
router.delete("/delete", [isAuth],deleteHabitat)

module.exports = router;