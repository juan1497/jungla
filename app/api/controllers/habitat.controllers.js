const Habitat=require('../models/habitat.model')
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const addHabitat= async(req, res,next)=>{
    try {
        const habitat = new Habitat({
            id:req.body.id,
            name:req.body.name,
            location:req.body.location,
            mode:req.body.mode
        })
        const habitatDB= await habitat.save()
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { habitat:`${habitatDB.name} creado` }
        });
    } catch (error) {
        return next(error);
    }
}

const allHabitats= async(req, res,next)=>{
    try {    
        const habitats= await Habitat.find();
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { habitats: habitats }
        });
    } catch (error) {
        return next(error);
    }
}
const getHabitat= async(req, res,next)=>{
    try{
        const{id}=req.params
        const habitat = await Habitat.findOne({id:id})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { habitat: habitat}
        })
    }catch(error){
        return next(error)
    }
}
const updateHabitat= async(req, res,next)=>{
    try {
        const id=req.body.id;
        const habitat=await Habitat.findOneAndUpdate({id:id},{id:req.body.id,name:req.body.name,location:req.body.location,mode:req.body.mode})
        return res.json({
            status: 202,
            message: HTTPSTATUSCODE[202],
            data: { habitat: `${habitat.id} actualizado` }
        })
    } catch (error) {
        return next(error);
    }
}
const deleteHabitat= async(req, res,next)=>{
    try {
        const id=req.body.id
        const habitat = await Habitat.findOneAndDelete({id:id})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { habitat:`${habitat.name} borrado` }
        })
    } catch (error) {
        return next(error);
    }
}


module.exports = { addHabitat,allHabitats,getHabitat,updateHabitat,deleteHabitat };