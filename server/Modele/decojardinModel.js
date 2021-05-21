const mongoose=require('mongoose')
const DecoJardinSchema=new mongoose.Schema({
    name:{type:String,required:true},
    ImageDecojardin:{type:String},
    categori:{type:String,required:true},
    prix:{type:Number,required:true},
    quantite:{type:Number,required:true}

})
module.exports=mongoose.model('DecoJardin',DecoJardinSchema)