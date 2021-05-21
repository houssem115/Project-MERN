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
const  DecoJardin=require('../controller/decojardinControler')
module.exports=(app)=>{
    app.post('/create',upload.single('ImageDecojardin'),DecoJardin.create)
    app.get('/findDecojar',DecoJardin.findDecoJardin)
    app.delete('/DeletDecojar/:id',DecoJardin.DeleteJardin)
    app.get('/findArId/:id',DecoJardin.findJardinId)
    app.put('/Editjardin/:id',DecoJardin.EditJardin)
    
   // app.get('/sortDeco', DecoJardin.SortDecoJardinnam)
    //app.get('/sortDecoPrix', DecoJardin.SortDecoJardinprix)
}