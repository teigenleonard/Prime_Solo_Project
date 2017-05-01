myApp.factory( 'PackingService', [ '$http', function($http) {
  var log = 'inside factory';

function postTrip(trip){
  $http.post( '/trips', trip).then(function(response){
    console.log('hit postTrip', trip );
    console.log( response );
    // getTrips();
  });
}
  return {
    log : log,
    postTrip : postTrip
  };
}]);
