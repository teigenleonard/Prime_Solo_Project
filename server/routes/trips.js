//GLOBALS
var express = require( 'express' );
var router = express.Router();
var path = require( 'path' );

//do i need pg here?

//CALLS
router.post('/', function( req, res){
  var newTrip = {
    location : req.body.location,
    date : req.body.date
  };

  console.log('newTrip', newTrip);

});
//EXPORT
module.exports = router;
