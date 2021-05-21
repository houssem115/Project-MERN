const mongoose=require('mongoose')
const decomaiSchema=new mongoose.Schema({
    name:{type:String,required:true},
    ImageDecomaison:{type:String},
    categori:{type:String,required:true},
    prix:{type:Number,required:true},
    quantite:{type:Number,required:true}

})
module.exports=mongoose.model('decomai',decomaiSchema)