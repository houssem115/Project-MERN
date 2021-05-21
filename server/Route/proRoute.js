const Pro=require('../controller/proControler')
module.exports=(app)=>{
    app.post('/createpro',Pro.create)
    app.get('/findPro',Pro.findPro)
    app.delete('/deletePro/:Proname',Pro.DeletPro)
}
