//SECURING SENSITIVE INFORMATION
require("dotenv").config()
const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")

const app=express()

app.set("view engine","ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))                          //PUT ALL CSS FILES IN THE PUBLIC CSS FOLDER PLZZ


//CONNECTING TO THE ONLINE HOSTED DB
mongoose.connect(process.env.MURL+"/muslimindsetDB")

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
})

//CREATING USERS COLLECTION
const User= mongoose.model("User", userSchema)

//ROOT ROUTE
app.route("/")
    .get((req,res)=>{
        res.render("home")
    })
    .post()

//QURAN ROUTE
app.route("/quran")
    .get((req,res)=>{
        res.render("quran")
    })
    .post()

//LOGIN ROUTE
app.route("/sign-up")
    .get((req,res)=>{
        res.render("sign-up")
    })
    .post((req,res)=>{
        //CREATE NEW USER
        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })

        newUser.save
    })

//LOGIN ROUTE
app.route("/login")
    .get()
    .post()



app.listen(3000,()=>{
    console.log("Server Started On Port 3000 😘")
})