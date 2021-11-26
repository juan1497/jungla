const mongoose=require('mongoose')
const Schema=mongoose.Schema;


const HabitatSchema=new Schema(
    {
        id:{type:Number,trim:true,unique:true,required:true},
        name:{type:String,trim:true,required:true},
        location:{type:String,trim:true,required:true},
        mode:{type:String,enum:["Tierra","Aire","Mar"],required:true}
    },{timestamps:true}
)
const Habitat= mongoose.model("Habitat",HabitatSchema);
module.exports = Habitat;