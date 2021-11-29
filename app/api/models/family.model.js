const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const FamilySchema=new Schema(
    {
        id:{type:Number,trim:true,unique:true,required:true},
        name:{type:String,trim:true,required:true},
        livingInGroup:{type:Boolean,trim:true,required:true},
        habitat:{type:Schema.Types.ObjectId,ref:"Habitat",required:true}
    },{timestamps:true}
)
const Family= mongoose.model("Family",FamilySchema);
module.exports = Family;
