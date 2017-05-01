//GLOBALS
var express = require('express');
var router = express.Router();
var path = require('path');
var pg = require('pg');
var connection = require('../modules/connection');

// GET items
router.get('/', function(req, res, next) {
  pg.connect(connection, function(err, db, done) {
      if (err) {
          console.log('**Error Connection to Items Table');
          res.send(500);
      } else {
          db.query('SELECT * FROM "items";',
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
        name: req.body.name,
        quantity: req.body.quantity
    };
    console.log('HERE: newItem: ', newItem);

    pg.connect(connection, function(err, db, done) {
        console.log(db);
        if (err) {
            console.log('Error Connecting: ', err);
            next(err);
        }
        db.query(' INSERT INTO "items" ("name", "quantity" ) ' +
            ' VALUES ( $1, $2 ); ', [newItem.name, newItem.quantity],
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
