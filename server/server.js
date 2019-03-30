const express = require('express')
const session = require('express-session')
const cors = require('cors') 
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport')
const autorizationR = require('./routes/autorizationRoutes')
const tweets = require('./routes/callApiTwitter');



app.set('port', process.env.PORT || 8080)
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())
app.use(session({secret:'hola',resave:true,saveUninitialized:true}))

app.use(passport.initialize())
app.use(passport.session())

app.use(autorizationR);
app.use(tweets);

app.listen(app.get('port'), ()=>{
    console.log(`escuchando el puerto ${app.get('port')}`)
})

module.exports = app;