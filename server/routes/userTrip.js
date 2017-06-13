//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connection = require('../modules/connection');

// GET all trips that user is INVITED
router.get('/', function(req, res, next) {
  console.log(req.user);
  pg.connect(connection, function(err, db, done) {
    if (err) {
      console.log('**Error Connecting to userTrip Table**');
      res.send(500);
    } else {
      db.query('SELECT * FROM trips JOIN user_trip ON trips.id = user_trip.trip_id WHERE user_trip.user_id = $1 AND user_trip.status = \'invited\';', [req.user.id],
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
}); //END GET

// GET all trips that user has JOINED
router.get('/joined', function(req, res, next) {
  console.log(req.user);
  pg.connect(connection, function(err, db, done) {
    if (err) {
      console.log('**Error Connecting to userTrip Table**');
      res.send(500);
    } else {
      db.query('SELECT * FROM trips JOIN user_trip ON trips.id = user_trip.trip_id WHERE user_trip.user_id = $1 AND user_trip.status = \'joined\';', [req.user.id],
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
}); //END JOINED GET

// JOIN TRIP POST request with joinTrip data
router.put('/', function(req, res, next) {
  console.log('hit join put!', req.body);
  var join = {
    tripId: req.body.tripId,
    userId: req.body.userId
  };
  pg.connect(connection, function(err, db, done) {
    if (err) {
      console.log('Error Connecting: ', err);
      next(err);
    }
    db.query('UPDATE "user_trip" SET "status" = \'joined\' WHERE "user_id" = ($1) AND "trip_id" = ($2);', [join.userId, join.tripId],
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
}); // END JOIN TRIP POST



//EXPORT
module.exports = router;
