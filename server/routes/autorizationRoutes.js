const express = require('express')
const app = express();
const passport = require('../passport/passportConfig');
//Login
app.get('/oauth_request', passport.authenticate('twitter'));
//Callback
app.get('/oauth/callback',
  passport.authenticate('twitter', { failureRedirect: '/' }),
  function (req, res) {
    res.send('<script>window.location.href="http://localhost:8081/home";</script>');
  });
//EndPoint para obtener los datos del usuario
app.get('/profile',
  function (req, res) {
    console.log(req.user);
    res.json(req.user);
  });
//Cerrar Sesión
app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('http://localhost:8081/');
});

module.exports = app;