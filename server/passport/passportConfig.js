const passport = require('passport')
const Strategy = require('passport-twitter').Strategy;
const config = require('../../config');

passport.use(new Strategy({
    consumerKey: config.consumerKey,
    consumerSecret:config.consumerSecret,
    callbackURL: '/oauth/callback',
    userProfileURL: "https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true"
},function(token,tokenSecret,profile,callback){
    return callback(null, profile);
}))

passport.serializeUser(function(user,callback){
    callback(null,user)
})

passport.deserializeUser(function(obj,callback){
    callback(null,obj)
})

module.exports = passport;