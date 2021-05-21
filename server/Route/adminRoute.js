const Admin=require('../controller/adminControler')
module.exports=(app)=>{
    app.post("/login",Admin.login);
    app.post("/signin",Admin.signin)
    app.post('/createAdmin',Admin.create)
    app.get('/findAdmin',Admin.findAdmin)
    app.delete('/DeleteAdmin/:Adminid',Admin.DeletAdmin)
}