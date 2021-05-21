const Panier=require('../controller/panierControler')
module.exports=(app)=>{
app.post('/createPanier',Panier.create)

}