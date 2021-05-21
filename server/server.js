const express=require('express')
const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const cors=require('cors');
const app=express()
app.use(cors())
app.use(bodyparser.json())
require('dotenv').config()
mongoose.Promise=global.Promise;

//connexion avec la base de donnée (--local)
mongoose.connect('mongodb://localhost:27017/first-project' ,{ useUnifiedTopology: true , useNewUrlParser: true} ,
(er)=>{
    if(er){
        console.log(er)
    }else {
        console.log('db connected')
    }
})

const AdminRoute =require('./Route/adminRoute')
AdminRoute(app)

const arbreRoute=require('./Route/arbreRoute')
arbreRoute(app)
//app.admin('image',express.static('public'))

const UserRoute=require('./Route/userRoute')
UserRoute(app)


const PanierRoute=require('./Route/panierRoute')
PanierRoute(app)

const DecojardinRoute=require('./Route/decojardinRoute')
DecojardinRoute(app)

const DecomaiRoute=require('./Route/decomaiRoute')
DecomaiRoute(app)



//creation de serveur 
app.listen(4000,(er)=>{
    if(er){
        console.log(er)
    }else {
        console.log('server connected on port 4000')
    }
})