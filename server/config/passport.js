const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const db = require("./db");

require("dotenv").config();

// Configure the Google OAuth strategy for Passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.BACK_END_URL}/api/auth/google/callback`
}, function(accessToken, refreshToken, profile, cb) {
    // Callback function to handle the authenticated user profile
    cb(null, profile);
}));


  //data read and store in session

passport.serializeUser(function(user,cb){
    cb(null,user);
});

// Deserialize user information from the session
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;
