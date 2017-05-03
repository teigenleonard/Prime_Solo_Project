//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connection = require('../modules/connection');

// GET all trips that user is INVITED
router.get('/', function(req, res, next) {
    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('**Error Connecting to userTrip Table**');
            res.send(500);
        } else {
            db.query('SELECT * FROM trips JOIN user_trip ' +
                      'ON trips.id = user_trip.trip ' +
                      'WHERE user_trip.user_id = $1' +
                      'AND user_trip.status = "invited";', [req.user.id],
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
  pg.connect(connection, function(err, db, done) {
      if (err) {
          console.log('**Error Connecting to userTrip Table**');
          res.send(500);
      } else {
          db.query('SELECT * FROM trips JOIN user_trip ' +
                    'ON trips.id = user_trip.trip ' +
                    'WHERE user_trip.user_id =' + user.id +
                    'AND user_trip.status = "joined";',
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

// GET all trips that user has CREATED
router.get('/created', function(req, res, next) {
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
}); //END CREATED GET

//EXPORT
module.exports = router;
