const DecoJardin=require('../Modele/decojardinModel')

exports.create=(req,res)=>{
    const newDecoJardin=new  DecoJardin({
        name:req.body.name,
        ImageDecojardin:req.file.originalname,
        categori:req.body.categori,
        prix:req.body.prix,
        quantite:req.body.quantite
    })
    newDecoJardin.save()
    .then(result=>res.status(200).json({
        message:"Deco jardin added"
    }))
    .catch(er=>console.log(er))
}

exports.findDecoJardin=(req,res)=>{ DecoJardin.find()
        .then(result=>res.send(result))
        .catch(er=>console.log(er))
    };
   exports.SortDecoJardinname=(req,res)=>{
    DecoJardin.find()
       .sort({name:1})
       .exec((err,data) => err ?console.log(err) : res.send(dada))
   };
exports .SortDecoJardinprix=(req,res)=>{
    DecoJardin.find()
        .sort({prix:1})
        .exec((err,data) =>err ? console.log(err):res.send(data));
};

exports.DeleteJardin=(req,res)=>{
let id=req.params.id
DecoJardin.findByIdAndDelete({_id:id})
.then(result=>res.send(result))
.catch(er=>console.log(er))
};
   

exports.findJardinId=(req,res)=>{
    let id=req.params.id
    DecoJardin.findById({_id:id})
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
};

        
exports.EditJardin=(req,res)=>{
let id=req.params.id
DecoJardin.findByIdAndUpdate({_id:id},req.body)
.then(result=>res.send(result))
.catch(er=>console.log(er))
}