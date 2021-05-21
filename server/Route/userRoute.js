const User=require('../controller/userControler')
module.exports=(app)=>{
    
    app.post("/Signinn",User.Signinn)
    app.post("/Loginn",User.Loginn);
    app.post('/adduser', User.create)
    app.get('/findUsers',User.findUsers)
    app.put('/updateUser/:userid',User.UpdateUser)
    app.get('/findUserId/:userid',User.findUserById)
    app.delete('/deleteUser/:userid',User.DeleteUser)

}
