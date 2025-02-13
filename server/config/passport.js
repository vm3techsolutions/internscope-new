const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("./db");

require("dotenv").config();

  passport.use(new GoogleStrategy({
      clientID: "85068025550-k5oseje6s5g6o3ns3bq4kii8qmpl2hji.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL:"http://localhost:4000/api/auth/google/callback"
  },function(accessToken, refreshToken, profile, cb){
      cb(null,profile)
  }));
  
  
  //data read and store in session
  
  passport.serializeUser(function(user,cb){
      cb(null,user);
  });
  
  
  
  
  passport.deserializeUser(function(obj,cb){
      cb(null,obj);
  });

module.exports = passport;
