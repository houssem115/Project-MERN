const mongoose =require('mongoose')
const adminSchema=new mongoose.Schema({
    
    lastname:{type:String},
    email:{type:String},
    password:{type:String},
})

module.exports=mongoose.model('admin',adminSchema)