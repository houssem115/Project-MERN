const mongoose =require('mongoose')
const proSchema=new mongoose.Schema({
    name:{type:String,required:true},
    prod:{type:String,required:true},
    dateD:{type:String,required:true},
    dateF:{type:String,required:true}

})
module.exports=mongoose.model('pro',proSchema)