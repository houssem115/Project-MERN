const mongoose =require('mongoose')
const userSchema=new mongoose.Schema({
    firstname:{type:String},
    lastname:{type:String},
    email:{type:String,required:true},
    numtel:{type:Number},
    adresse:{type:String},
    password:{type:String,required:true}
})
module.exports=mongoose.model('user',userSchema)