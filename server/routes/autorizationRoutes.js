const express = require('express')
const app = express();
const passport = require('../passport/passportConfig');

app.get('/login', function(req,res){
    console.log('FUNCIONA CAREPERRO')
})

app.get('/twitter/login', passport.authenticate('twitter'),function(req, res) {
    res.redirect('/home')
})

app.get('/twitter/return', passport.authenticate('twitter', {
    failureRedirect: '/login'
}))

app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });

module.exports = app;