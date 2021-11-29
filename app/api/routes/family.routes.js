const express = require('express');
const router = express.Router();
const {addFamily,allFamilies,getFamily,updateFamily,deleteFamily}=require('../controllers/family.controllers')
const { isAuth } = require("../../../middlewares/auth.middleware");

//crud
router.post('/add', [isAuth],addFamily);
router.get("/", [isAuth],allFamilies)
router.get("/:id", [isAuth],getFamily)
router.put("/update/", [isAuth],updateFamily)
router.delete("/delete/", [isAuth],deleteFamily)

module.exports = router;