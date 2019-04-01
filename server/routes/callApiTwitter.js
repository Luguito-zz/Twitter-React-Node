const Twitter = require('twitter');
const config = require('../../config');
const express = require('express');
const app = express();
//Credenciales 
var client = new Twitter({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    access_token_key: config.accessToken,
    access_token_secret: config.accessTokenSecret
});

//Funciones con peticiones http con la libreria Twitter a la api de twitter, valga la redundancia. Para luego ejecutar
//esas funciones dentro de mis endpoints.

//Para buscar los tweets segun fijamos en los parametros
const getTweets = async (res,params) => {
        await client.get('search/tweets',{ q:`${params.q}`, count:`${params.count}`}, function (error, tweets, response) {
            res.json(tweets)
    })
}
//Ejecucion
app.post('/get_tweets',function(req,res){
    let q = req.body;
    getTweets(res, q)
})

//Para publicar un tweet
const postTweet = async (res,params) => {
    await client.post('statuses/update',{status:`${params.tweet}`}, function (error, tweets, response) {
        res.json(tweets)
    })
}
//Ejecucion
app.post('/create-tweet', function(req,res){
    let status = req.body
    postTweet(res, status)
})

//Para obtener los tweets del usuario logeado
const getMyOwnTweets = async (res,params) => {
    await client.get('statuses/home_timeline',{ count:`${params.count}`}, function (error, tweets, response) {
        res.json(tweets)
    })
}
//Ejecucion
app.post('/tweets', function(req,res){
    let count = req.body
    getMyOwnTweets(res, count)
})


//Para obtener sugerencias de usuarios. Sin uso, su limite de request es muy bajo
const getSuggestions = (res, params) => {
    client.get('users/suggestions',{lang:'es'} ,function (error, suggestions, response) {
        res.json(suggestions)
    })
}
//Ejecucion
app.get('/suggestions', function(req,res){
    getSuggestions(res)
})

module.exports = app;