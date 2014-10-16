/**
 * Created by u0145690 on 10/16/2014.
 */
var config = require('../../config/config')
var request = require('request')

module.exports = function () {
    this.getEvents = function(callback) {
        request(config.gmiUrl,
            {
//                proxy: 'http://10.23.31.130:8080'
            }, callback);
    };
};