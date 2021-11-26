const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const AnimalSchema= new Schema(
    {
        id:{type:Number,trim:true,unique:true,required:true},
        name:{type:String,required:true,trim:true},
        isCarnivore:{type:Boolean,required:true,trim:true},
        family:[{type: Schema.Types.ObjectId, ref: "Family",required:true}]
    },
    {timestamps:true}
)
const Animal=mongoose.model("Animal",AnimalSchema);
module.exports = Animal;