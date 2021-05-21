const mongoose =require('mongoose')
const panierSchema=new mongoose.Schema({
 
total:{type:Number}

})
module.exports=mongoose.model('panier',panierSchema)