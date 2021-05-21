const Decomai=require('../Modele/decomaiModel')
exports.create=(req,res)=>{
    const newDecomai=new Decomai({
        
        name:req.body.name,
        ImageDecomaison:req.file.originalname,
        categori:req.body.categori,
        prix:req.body.prix,
        quantite:req.body.quantite
    })
    newDecomai.save()
    .then(result=>res.status(200).json({
        message:"Deco maison added"
    }))
    .catch(er=>console.log(er))
}

    exports.findDecomai=(req,res)=>{ Decomai.find().then(result=>res.send(result))
        .catch(er=>console.log(er))
    }
    exports.SortDecomai=(req,res)=>{
        Decomai.find() 
            .sort({name:1})
            .exec((err,data) => err ?console.log(err):res.send(data))
        }
    exports.SortDecomaipri=(req,res)=>{
        Decomai.find()
        .sort({prix:1})
        .exec((err,data) =>err ? console.log(err):res.send(data))
    }


    exports.DeletDecomai=(req,res)=>{
            let id=req.params.id
            Decomai.findByIdAndDelete({_id:id})
            .then(result=>res.send(result))
            .catch(er=>console.log(er))
    } 

    

    exports.findMaisonId=(req,res)=>{
        let id=req.params.id
        Decomai.findById({_id:id})
        .then(result=>res.send(result))
        .catch(er=>console.log(er))
    }    
    exports.EditMaison=(req,res)=>{
        let id=req.params.id
        Decomai.findByIdAndUpdate({_id:id},req.body)
        .then(result=>res.send(result))
        .catch(er=>console.log(er))
    }






