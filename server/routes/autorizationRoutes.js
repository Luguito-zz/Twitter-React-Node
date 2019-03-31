const express = require('express')
const app = express();
const passport = require('../passport/passportConfig');

app.get('/twitter/login', passport.authenticate('twitter'));

app.get('/twitter/return', passport.authenticate('twitter', {
  failureRedirect: '/login'
}))

app.get('/oauth/callback',
  passport.authenticate('twitter', { failureRedirect: '/login' }),
  function (req, res) {
    res.send('<script>window.location.href="http://localhost:8081/home";</script>');
  });

app.get('/profile',
  function (req, res) {
    console.log(req.user);
    res.json(req.user);
  });

app.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/login');
});

module.exports = app;