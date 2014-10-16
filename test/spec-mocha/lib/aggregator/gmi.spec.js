/**
 * Created by u0145690 on 10/16/2014.
 */
var    root      = '../../../../',
    expect      = require('chai').expect,
    nock = require('nock'),
    config = require(root + 'config/config'),
    aggregator  = require(root + 'lib/aggregator/gmi');


describe('Aggregator', function () {
    describe('gmi', function () {
        var couchdb = nock(config.gmiUrl).get('/netcool/?Severity=1&per_page=2')
            .reply(202,
            {id: 10, nodename: 'test'});

        it('Return 202', function () {
            var reply = {id: 10, nodename: 'test'};
            var gmi = new aggregator();

            gmi.getEvents(function (error, response, body) {
                console.log(JSON.parse(body));
                var resdata = JSON.parse(body);
                expect(reply.id).to.equal(resdata.id);
            });
        });

        it('Return 404 not found', function () {

        });

        it('Return 404 not found', function () {

        });
    });
});