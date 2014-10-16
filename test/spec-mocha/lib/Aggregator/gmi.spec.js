/**
 * Created by u0145690 on 10/16/2014.
 */
var    root      = '../../../../',
    expect      = require('chai').expect,
    config = require(root + 'config/config'),
    gmi  = require(root + 'lib/aggregator/gmi'),
    nock = require('nock'),
    request = require('request');

describe('gmi spect', function () {
    //var couchdb = nock(config.gmiUrl).get('/netcool/?Severity=1&per_page=2').reply(202, {id:10,nodename:'test'});


    it('Request event from GMI RESTFul', function() {
        //var reply =  {id:10 ,nodename:'test'};
        //var g = new gmi();

        request('http://www.google.com', function (error, response, body) {
            console.log("Test Mocha");
            if (!error && response.statusCode == 200) {

                console.log(body) // Print the google web page.
            }
        })
//        g.getEvents().on('error', function(error){
//                console.log(error);
//            })
//            .on('response', function(response){
//                console.log(response);
//                response.on('data', function(data){
//                    console.log(JSON.parse(data));
//                    var resdata = JSON.parse(data);
//                    expect(reply.id).to.equal(resdata.id);
//                });
//            });
    });
});