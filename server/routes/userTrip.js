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
// JOIN TRIP POST request with joinTrip data
router.post('/', function(req, res, next) {
  if (req.isAuthenticated()) {
    var joinedTrip = {
        tripId: req.body.id,
        status: req.body.status,
    };
    console.log('newTrip', newTrip);

    pg.connect(connection, function(err, db, done) {
        if (err) {
            console.log('Error Connecting: ', err);
            next(err);
        }
        db.query( 'INSERT INTO "trips" ("user_id", "trip_id", "status" )' +
                  'VALUES ( $1, $2, $3 ); ',
                  [req.user.id, newTrip.location, newTrip.date, ],
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


//EXPORT
module.exports = router;
