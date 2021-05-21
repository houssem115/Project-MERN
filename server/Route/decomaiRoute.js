const multer=require('multer')
const storage=multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,'../public/image')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
})

const upload=multer({
    storage:storage,
})
const  Decomai=require('../controller/decomaiControler')
module.exports=(app)=>{
    app.post('/CreateDecMaison',upload.single('ImageDecomaison'),Decomai.create)
    app.get('/findDem',Decomai.findDecomai)
    //app.get('/findDemname',Decomai.SortDecomai)
    //app.get('/findDempri',Decomai.SortDecomaipri)
    app.delete('/DeletDem/:id',Decomai.DeletDecomai)
    app.put('/EditMaison/:id',Decomai.EditMaison)
    app.get('/findMaisonId/:id',Decomai.findMaisonId)
   

}