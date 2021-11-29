const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const UserSchema= new Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        role:{type:String,default:"user"},
    },
    {timestamps:true}
)
UserSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
}) 
const user = mongoose.model("User",UserSchema)

module.exports = user;