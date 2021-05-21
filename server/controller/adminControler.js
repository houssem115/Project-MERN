
const Admin=require('../Modele/adminModel')
const bcrypt =require('bcrypt');
const jwt =require ('jsonwebtoken')

exports.signin=async(req,res)=>{
    Admin.find({email:req.body.email}).then(admin=>{
        if(admin.length>=1){
            return res .status(404).json({message:`failed`})
        }else{
        bcrypt.hash(req.body.password,10,(er,hash)=>{
            if (er){
                return res.send(er)
            }
            else{
                const newadmin= new Admin({
                    lastname:req.body.lastname,
                    email:req.body.email,
                    password:hash
                })
            newadmin.save()
                .then(data=>
                    res.status(200).json({
                        message:'Admin added'
                    
                    }

                    ))
                .catch(er=>console.log(er))
            } 
        })
    }
}
    )
}

exports.login=(req,res)=>{
    Admin.find({email:req.body.email})
    .then(admin=>{
            if(admin.length<1){
                return res .status(404).json({message:`failed`})
            }else{
                bcrypt.compare(req.body.password,admin[0].password,(er,result)=>{
                    if(er){
                        return res.status(404).json({message:`failed`})
                    }else{
                        const token=jwt.sign({
                            email:admin[0].email,
                            adminId:admin[0]._id}
                            ,"secret");
                            return res.status(200).json({
                                message:'hello!!',
                                token:token
                                
                            })
                        }
                        })
                    }
                })
            }


exports.create=(req,res)=>{

    const newAdmin=new Admin({
       
        lastname:req.body.lastname,
        email:req.body.email,
        password:req.body.password
    })




    
    newAdmin.save()
    .then(result=>res.status(200).json({
        message:"administrateur added"
    }))
    .catch(er=>console.log(er))

}
exports.findAdmin=(req,res)=>{
    Admin.find()
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}
exports.DeletAdmin=(req,res)=>{
    let id=req.params.Adminid
    Admin.findByIdAndDelete({_id:id})
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}
