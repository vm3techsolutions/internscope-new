const express = require("express");
const session = require("express-session");
const passport = require("passport");
// passprot-ga20 sub class
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const ejs =require("ejs");
const path = require("path");
const mysql = require('../config/db');
require('dotenv').config();

const app=express();

// app.use(express.json())

app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,//------?
    saveUninitialized:true,//-----?
    cookie:{secure:false}, //http
}));


app.use(passport.initialize());
app.use(passport.session()); // first need to crete session or import

// app connect with google oauth

passport.use(new GoogleStrategy({
    clientID:process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL:CALL_BACK_URL
},function(accessToken, refreshToken, profile, cb){
    cb(null,profile)
}));


//data read and store in session

/**
 * Serializes user data into the session.
 * @param {Object} user - The user object.
 * @param {Function} cb - The callback function.
 */
passport.serializeUser(function(user,cb){
    cb(null,user);
});

/**
 * Deserializes user data from the session.
 * @param {Object} obj - The session object.
 * @param {Function} cb - The callback function.
 */
passport.deserializeUser(function(obj,cb){
    cb(null,obj);
});



//static file use
app.use(express.static(path.join(__dirname,"public")))

// apis

/**
 * Renders the login page.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/login",(req,res)=>{
    res.render(path.join(__dirname,"login.ejs"))
})

/**
 * Renders the dashboard page.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/dashboard",(req,res)=>{
    // const data="rutik"
    // console.log(req.user);
    
    // res.render(path.join(__dirname, "dashboard.ejs"),{
    //     user:req.user
    // })

    // console.log(req.user.photos[0].value);
    

      if(req.isAuthenticated()){
        res.render(path.join(__dirname, "dashboard.ejs"),{
            user:req.user,
            photos:req.user.photos[0].value
        })
      }
      else{
        res.redirect("/login")
      }
    
});



//passport is middle ware 

/**
 * Initiates Google OAuth authentication.
 */
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

// const data={
//     name:"",
//     family_name:"",
//     email:""
// }
// let{name,family_name,email}=data;
// console.log(name);

/**
 * Handles the Google OAuth callback.
 */
app.get("/auth/google/callback", passport.authenticate("google",{failureRedirect:"/login"}),

 function(req,res){
     const name1=req.user._json
    // console.log(req.user._json);
    const{sub,name,given_name,family_name,picture,email}=name1;
    // console.log(name);
     mySqlPool.query(`INSERT INTO logtable(sub,name,given_name,family_name,picture,email) VALUE(?,?,?,?,?,?)`,[sub,name,given_name,family_name,picture,email])
    res.redirect("/dashboard");
    
}


)

/**
 * Logs out the user.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
app.get("/logout",(req,res)=>{
    req.logout(function(err){
        // req.session.destroy()
        //     res.redirect("/login")  
        if (err) {
            console.log(err);
          } else {
            req.session.destroy()
            res.redirect("/login");
          }
            
    });

    // console.log(req.session);
    
  

});

// console.log(name1);
const port=3000;

app.listen(port,()=>{
    console.log(`server running....`);
    
})