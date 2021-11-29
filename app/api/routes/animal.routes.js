const express = require('express');
const router = express.Router();
const {addAnimal,allAnimals,getAnimal,updateAnimal,deleteAnimal }=require('../controllers/animal.controllers')
const { isAuth } = require("../../../middlewares/auth.middleware");

//crud
router.post('/add', [isAuth],addAnimal);
router.get("/", [isAuth],allAnimals)
router.get("/:id", [isAuth],getAnimal)
router.put("/update", [isAuth],updateAnimal)
router.delete("/delete/:id", [isAuth],deleteAnimal)

module.exports = router;