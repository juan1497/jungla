const Family=require('../models/family.model')
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const addFamily= async(req, res,next)=>{
    try {
        const family = new Family({
            id:req.body.id,
            name:req.body.name,
            livingInGroup:req.body.livingInGroup,
            habitat:req.body.habitat
        })
        const familyDB= await family.save()
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { animal:`${familyDB.name} creado` }
        });
    } catch (error) {
        return next(error);
    }
}

const allFamilies= async(req, res,next)=>{
    try {    
        const families= await Family.find().populate("habitat")
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { animals: families }
        });
    } catch (error) {
        return next(error);
    }
}
const getFamily= async(req, res,next)=>{
    try{
        const{id}=req.params
        const family = await Family.find({id:id}).populate("habitat")
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { family: family }
        })
    }catch(error){
        return next(error)
    }
}
const updateFamily= async(req, res,next)=>{
    try {
        const id=req.body.id
        const family=await Family.findOneAndUpdate({id:id},{id:req.body.id,name:req.body.name,livingInGroup:req.body.livingInGroup,habitat:req.body.habitat})
        return res.json({
            status: 202,
            message: HTTPSTATUSCODE[202],
            data: { family: `${family.id} actualizado` }
        })
    } catch (error) {
        return next(error);
    }
}
const deleteFamily= async(req, res,next)=>{
    try {
        const id=req.body.id
        const family = await Family.findOneAndDelete({id:id})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { family:`${family.id} borrado` }
        })
    } catch (error) {
        return next(error);
    }
}


module.exports = { addFamily,allFamilies,getFamily,updateFamily,deleteFamily };