const express =require("express");
const cors=require("cors");
const app=express();
const router=require("./router/auth-router");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const mySql=require("./config/db")
require('dotenv').config();

const path = require("path");

const bodyParser = require('body-parser')
app.set("view engine", "ejs");
require('dotenv').config();
const session = require("express-session");
// const passport = require("passport");
// cg...................
const passport=require("./config/passport");


app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));
// const jsonParser = bodyParser.json()
app.use(cors({
    origin: process.env.FRONT_END_URL, // Frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());

  
  
  

  

  
  



app.use(express.static(path.join(__dirname,"public")))




const PORT=4000;
app.use("/api",router);
// app.use("/api/auth",router);




app.listen(PORT,()=>{
    console.log(`server is runnig ..${PORT}`);
    
})