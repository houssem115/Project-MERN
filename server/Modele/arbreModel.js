const mongoose =require('mongoose')
const ArbreSchema=new mongoose.Schema({
    name:{type:String,required:true},
    ImageArbre:{type:String},
    categori:{type:String,required:true},
    prix:{type:Number,required:true},
    quantite:{type:Number,required:true}

})
module.exports=mongoose.model('Arbre',ArbreSchema)