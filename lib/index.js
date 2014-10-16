/**
 * Created by u0145690 on 10/15/2014.
 */


var request = require('request');
var gmi = require('./aggregator/gmi');

//request('http://www.google.com',
//    {
//        proxy: 'http://10.23.31.130:8080'
//    }, function (error, response, body) {
//
//    if (!error && response.statusCode == 200) {
//        console.log(body) // Print the google web page.
//    }else{
//        console.log(error);
//    }
//})

//request.get('http://www.google.com',{
//        proxy: 'http://10.23.31.130:8080'
//    }, function (error, response, body) {
//
//    if (!error && response.statusCode == 200) {
//        console.log(body) // Print the google web page.
//    }else{
//        console.log(error);
//    }});

var callback = function(error, response, body){
    if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
    }else{
        console.log(error);
    }
};

var a = new gmi();
a.getEvents(callback);

//request.get('http://www.google.com',{proxy: 'http://10.23.31.130:8080'}, callback);