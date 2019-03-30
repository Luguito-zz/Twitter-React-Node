const Twitter = require('twitter-node-client').Twitter;
const config = require('../config');

var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

let twitter = new Twitter({
    consumerKey: config.consumerKey,
    consumerSecret: config.consumerSecret,
    accessToken: config.accessToken,
    accessTokenSecret: config.accessTokenSecret,
});

let parameters = {
    screen_name:'Francis05395989',
}

twitter.getUser(parameters, error, success);