const jwt=require('jsonwebtoken')
module.exports=(req,res,next)=>{
    try{
        const token=req.headers.authorization;
        const decoded=jwt.verify(token,'secret');
        req.userdata=decoded
        next()

    }
    catch{res.status(401).json({
      message:'interdi'
    })
}
}