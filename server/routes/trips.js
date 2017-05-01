//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');

var connection = require('../modules/connection');

// CALLS
// Handles POST request with postTrip data
router.post('/', function(req, res, next) {
    var newTrip = {
        location : req.body.location,
        date : req.body.date,
    };
    console.log('newTrip', newTrip);

    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('Error Connecting: ', err);
            next(err);
        }
        db.query(' INSERT INTO "trips" ("location", "date", "user_id" )' + 'VALUES ( $1, $2, $3 ); ', [newTrip.location, newTrip.date, newTrip.user_id],
            function(queryError, result) {
                done();
                if (queryError) {
                    console.log('Error making query. : ', queryError);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
    });

});
//EXPORT
module.exports = router;
