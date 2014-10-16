/**
 * Created by u0145690 on 10/16/2014.
 */
var config = require('../../config/config')
var request = require('request')

module.exports = function () {
    this.getEvents = function() {
        request('http://www.google.com',
            {
                proxy: 'http://10.23.31.130:8080'
            }, function (error, response, body) {

                if (!error && response.statusCode == 200) {
                    console.log(body) // Print the google web page.
                }else{
                    console.log(error);
                }
            })
    };
};