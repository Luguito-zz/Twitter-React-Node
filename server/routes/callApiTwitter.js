const Twitter = require('twitter');
const config = require('../../config');
const express = require('express');
const app = express();

var client = new Twitter({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    access_token_key: config.accessToken,
    access_token_secret: config.accessTokenSecret
    //here?
});



const getTweets = (res,params) => {
        client.get('search/tweets', { q:`${params.q}`, count:`${params.count}`}, function (error, tweets, response) {
            res.json(tweets)
    })
}

app.post('/get_tweets',function(req,res){
    let q = req.body;
    getTweets(res, q)
})
module.exports = app;