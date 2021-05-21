const multer=require('multer');

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

const Arbre=require('../controller/arbreControler')
module.exports=(app)=>{
    app.post('/createArbre',upload.single('ImageArbre'),Arbre.create);
    app.get('/findArbre',Arbre.findArbre)
    app.delete('/DeleteArbre/:id',Arbre.DeleteArbre)
    app.get('/SortedArbre',Arbre.SortArbre)
    app.get('/Sortprix',Arbre.SortArbrepri)
    app.put('/EditArbre/:id',Arbre.EditArbre)
    app.get('/findArId/:id',Arbre.findArbreId)
}