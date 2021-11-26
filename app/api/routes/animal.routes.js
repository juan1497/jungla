const express = require('express');
const router = express.Router();
const {addAnimal,allAnimals,getAnimal,updateAnimal,deleteAnimal }=require('../controllers/animal.controllers')
const { isAuth } = require("../../../middlewares/auth.middleware");

//crud
router.post('/add',addAnimal);
router.get("/",allAnimals)
router.get("/:id",getAnimal)
router.put("/update",updateAnimal)
router.delete("/delete",deleteAnimal)

module.exports = router;