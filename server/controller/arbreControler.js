
const Arbre=require('../Modele/arbreModel')
exports.create=(req,res)=>{
    const newArbre=new Arbre({
        name:req.body.name,
        ImageArbre:req.file.originalname,
        categori:req.body.categori,
        prix:req.body.prix,
        quantite:req.body.quantite
    })
    
    newArbre.save()
    .then(result=>res.status(200).json({
        message:"Arbre added"
    }))
    .catch(er=>console.log(er))
}
exports.findArbre=(req,res)=>{
        Arbre.find()
        .then(result=>res.send(result))
        .catch(er=>console.log(er))
    }
   


exports.SortArbre=(req,res)=>{
        Arbre.find()
        .sort({name:1})
        .exec((err, data) => err ? console.log(err) : res.send(data));
        };
    
exports.SortArbrepri=(req,res)=>{
    Arbre.find()
    .sort({prix:1})
    .exec((err,data) =>err ? console.log(err):res.send(data));
};

exports.DeleteArbre=(req,res)=>{
        let id=req.params.id
        Arbre.findByIdAndDelete({_id:id})
        .then(result=>res.send(result))
        .catch(er=>console.log(er))
        } ;
        

        exports.findArbreId=(req,res)=>{
            let id=req.params.id
            Arbre.findById({_id:id})
            .then(result=>res.send(result))
            .catch(er=>console.log(er))
        };

                
exports.EditArbre=(req,res)=>{
    let id=req.params.id
    Arbre.findByIdAndUpdate({_id:id},req.body)
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}