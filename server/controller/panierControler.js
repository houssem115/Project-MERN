
const Panier= require('../Modele/panierModel')
exports.create=(req,res)=>{
    const newPanier=new Panier({
       
        
        total:req.body.total
    })


    
newPanier.save() 
.then(result=>res.status(200).json({
            message:"Panier added" 
        }))
        .catch(er=>console.log(er))

        
 exports.DeletePanier=(req,res)=>{
            let id=req.params.userid
            User.findByIdAndDelete({_id:id})
            .then(result=>res.send(result))
            .catch(er=>console.log(er))

    }  
}
