const express = require('express');
const router = express.Router();
const {addFamily,allFamilies,getFamily,updateFamily,deleteFamily}=require('../controllers/family.controllers')
const { isAuth } = require("../../../middlewares/auth.middleware");

//crud
router.post('/add',addFamily);
router.get("/",allFamilies)
router.get("/:id",getFamily)
router.put("/update/",updateFamily)
router.delete("/delete/",deleteFamily)

module.exports = router;