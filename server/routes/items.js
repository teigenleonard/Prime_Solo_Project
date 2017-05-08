//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connection = require('../modules/connection');

// GET items
router.get('/', function(req, res, next) {
  console.log('items params', req.query);
  pg.connect(connection, function(err, db, done) {
    if (err) {
      console.log('**Error Connection to Items Table');
      res.send(500);
    } else {
      db.query('SELECT * FROM "items" LEFT JOIN "users" ON users.id = items.user_id WHERE items.trip_id =$1 ORDER BY username ;',
      [req.query.tripId],
      function(queryError, result) {
        console.log('*Hit Items Query');
        done();
        if (queryError) {
          console.log('**Error with Trips Query**', queryError);
          res.sendStatus(500);
        } else {
          res.send(result.rows);
        }
      });
    }
  });
}); // END GET items
//  POST request with postItem data
router.post('/', function(req, res, next) {
  var newItem = {
    name : req.body.name,
    quantity : req.body.quantity,
    trip_id : req.body.trip_id
  };
  console.log('HERE: newItem: ', newItem);

  pg.connect(connection, function(err, db, done) {
    console.log(db);
    if (err) {
      console.log('Error Connecting: ', err);
      next(err);
    }
    db.query(' INSERT INTO "items" ("name", "quantity", "trip_id" ) ' +
    ' VALUES ( $1, $2, $3 ); ', [newItem.name, newItem.quantity, newItem.trip_id],
    function(queryError, result) {
      done();
      if (queryError) {
        console.log('Error making query : ', queryError);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });
}); // END POST items
//  POST with claimItem data
router.post('/claim', function(req, res, next) {
  var claimItem = {
    name : req.body.name,
    quantity : req.body.quantity,
    trip_id : req.body.trip_id,
    user_id : req.body.user_id
  };
  console.log('HERE: newItem: ', newItem);

  pg.connect(connection, function(err, db, done) {
    console.log(db);
    if (err) {
      console.log('Error Connecting: ', err);
      next(err);
    }
    db.query(' INSERT INTO "items" ("name", "quantity", "trip_id" ) ' +
    ' VALUES ( $1, $2, $3 ); ', [newItem.name, newItem.quantity, newItem.trip_id],
    function(queryError, result) {
      done();
      if (queryError) {
        console.log('Error making query : ', queryError);
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  });
});
//EXPORT
module.exports = router;
