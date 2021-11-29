const Animal=require('../models/animal.model')
const HTTPSTATUSCODE = require("../../../utils/httpStatusCode");

const addAnimal= async(req, res,next)=>{
    try {
        const animal = new Animal({
            id:req.body.id,
            name:req.body.name,
            isCarnivore:req.body.isCarnivore,
            family:req.body.family
        })
        const animalDB= await animal.save()
        
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { animal:`${animal.name} creado` }
        });
    } catch (error) {
        
        return next(error);
    }
}

const allAnimals= async(req, res,next)=>{
    try {    
        const animals= await Animal.find().populate({path:"family",populate:{path:"habitat"}})
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[201],
            data: { animals: animals }
        });
    } catch (error) {
        return next(error);
    }
}
const getAnimal= async(req, res,next)=>{
    try{
        const{id}=req.params
        const animal= await Animal.findOne({id:id}).populate({path:"family",populate:{path:"habitat"}});
        return res.json({
            status: 201,
            message: HTTPSTATUSCODE[202],
            data: { animal: animal }
        })
    }catch(error){
        return next(error)
    }
}
const updateAnimal= async(req, res,next)=>{
    try {
        const _id=req.body._id
        const animal=await Animal.findOneAndUpdate({_id:_id},{id:req.body.id,name:req.body.name,isCarnivore:req.body.isCarnivore,family:req.body.family})
        return res.json({
            status: 202,
            message: HTTPSTATUSCODE[202],
            data: { animal: `${animal.id} actualizado` }
        })
    } catch (error) {
        return next(error);
    }
}
const deleteAnimal= async(req, res,next)=>{
    try {
        const {id}=req.params
        console.log(id)
        const animal = await Animal.findOneAndDelete({_id:id})
        return res.json({
            status: 202,
            message: HTTPSTATUSCODE[202],
            data: { animal:`${animal.name} borrado` }
        })
    } catch (error) {
        return next(error);
    }
}


module.exports = { addAnimal,allAnimals,getAnimal,updateAnimal,deleteAnimal };