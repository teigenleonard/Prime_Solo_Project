//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connection = require('../modules/connection');

// GET from trips database
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        pg.connect(connection, function(err, db, done) {
            if (err) {
                console.log('**Error Connecting to Trips Table**');
                res.send(500);
            } else {
                // Trips I created
                db.query('SELECT * FROM "trips" WHERE "admin_id" = $1 ORDER BY "date";', [req.user.id],
                    function(queryError, result) {
                        console.log('**Hit Trips Query**');
                        done();
                        if (queryError) {
                            console.log('**Error with Trips Query**', queryError);
                            res.sendStatus(500);
                        } else {
                            res.send(result.rows);
                            console.log(result.rows);
                        }
                    });
            }
        });
    } else {
        res.sendStatus(401);
    }
}); //END GET trips

// NEWTRIP POST request with postTrip data
router.post('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    var newTrip = {
        location: req.body.location,
        date: req.body.date,
    };
    console.log('newTrip', newTrip);

    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('Error Connecting: ', err);
            next(err);
        }
        db.query(' INSERT INTO "trips" ("location", "date", "admin_id" )' + 'VALUES ( $1, $2, $3 ); ', [newTrip.location, newTrip.date, req.user.id],
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
  } else {
      res.sendStatus(401);
  }
}); // END NEWTRIP POST

// DELETE
router.delete('/:id', function(req, res) {
    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('**Error Connecting to Database to Delete**');
            res.send(500);
        } else {
            db.query('DELETE FROM "trips" WHERE "id" =' + req.params.id + ';', function(queryError, result) {
                console.log('**Hit Delete Query**');
                done();
                if (queryError) {
                    console.log('**Error with Item List Delete**', queryError);
                    res.sendStatus(500);
                } else {
                    res.sendStatus(201);
                }
            });
        }
    });
}); // END DELETE

//EXPORT
module.exports = router;
