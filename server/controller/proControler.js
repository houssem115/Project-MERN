const Pro=require('../Modele/proModel')
exports.create=(req,res)=>{
    const newPro=new Pro({
        name:req.body.name,
        prod:req.body.prod,
        dateD:req.body.dateD,
        dateF:req.body.dateF
    })
    newPro.save()
    .then(result=>res.status(200).json({
        message:"promotion ajouter"
    }))
    .catch(er=>console.log(er))
}
exports.findPro=(req,res)=>{
    Pro.find().then(result=>res.send(result))
                .catch(er=>console.log(er))
}
exports.DeletPro=(req,res)=>{ 
    let name=req.params.Proname
    .findByNameAndDelete({name:name})
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}