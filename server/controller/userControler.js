const User=require('../Modele/userModel')
const bcrypt = require('bcrypt')
const jwt =require ('jsonwebtoken')

exports.Signinn=async(req,res)=>{
    User.find({email:req.body.email}).then(user=>{
            if(user.length>=1){
                return alert('existe!!')

    }else{
        bcrypt.hash(req.body.password,10,(er,hash)=>{
            if (er){
                return res.send(er)
            } else{
                const newuser= new User({
                    firstname:req.body.firstname,
                    lastname:req.body.lastname,
                    email:req.body.email,
                    password:hash

                })
            newuser.save()
                .then(data=>
                    res.status(200).json({
                        message:'Client added'
                        
                    
                    }
                    
                    ))
                .catch(er=>console.log(er))
            } 
        })
    }
}
    )
}

exports.Loginn=(req,res)=>{
    User.find({email:req.body.email})
    .then(User=>{
        if(User.length<1){
            return res .status(404).json({message:`failed`})
        }else{
            bcrypt.compare(req.body.password,User[0].password,(er,result)=>{
                if(er){
                    return alert('password!!')
                }else{
                    const token=jwt.sign({
                        email:User[0].email,
                        UserId:User[0]._id}
                        ,"secret");
                        return res.status(200).json({
                            message:'successful',
                            token:token
                            })
                        }
                        })
                    }
                })
            }
exports.create=(req,res)=>{

    const newUser=new User({
        firstname:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        numtel:req.body.numtel,
        adresse:req.body.adresse,
        password:req.body.password

    })
    newUser.save()
    .then(result=>res.status(200).json({
        message:"user added"
    }))
    .catch(er=>console.log(er))

}
exports.findUsers=(req,res)=>{
    User.find()
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}
exports.findUserById=(req,res)=>{
    let id=req.params.userid
    User.findById({_id:id})
    .then(result=>console.log(result))
    .catch(er=>console.log(er))
}
exports.UpdateUser=(req,res)=>{
    let id=req.params.userid
   
    User.findByIdAndUpdate({_id:id},req.body)
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}
exports.DeleteUser=(req,res)=>{
    let id=req.params.userid
    User.findByIdAndDelete({_id:id})
    .then(result=>res.send(result))
    .catch(er=>console.log(er))
}