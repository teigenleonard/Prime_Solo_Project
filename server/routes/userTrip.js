//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connection = require('../modules/connection');

// GET from trips database
router.get('/', function(req, res, next) {
    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('**Error Connecting to userTrip Table**');
            res.send(500);
        } else {
            db.query('SELECT * FROM "user_trip";',
                function(queryError, result) {
                    console.log('**Hit userTrip Query**');
                    done();
                    if (queryError) {
                        console.log('**Error with userTrip Query**', queryError);
                        res.sendStatus(500);
                    } else {
                        res.send(result.rows);
                        console.log(result.rows);
                    }
                });
        }
    });
}); //END GET trips


// POST request with postTrip data
router.post('/', function(req, res, next) {
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
        db.query(' INSERT INTO "trips" ("location", "date" )' + 'VALUES ( $1, $2 ); ', [newTrip.location, newTrip.date ],
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
}); // END POST trip

// DELETE
router.delete('/:id', function( req, res ){
  pg.connect(connection, function(err, db, done) {
      if (err) {
          console.log('**Error Connecting to Database to Delete**');
          res.send(500);
      } else {
          db.query('DELETE FROM "items" WHERE "id" =' + req.params.id + ';',
          function(queryError, result) {
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
});// END DELETE

//EXPORT
module.exports = router;
