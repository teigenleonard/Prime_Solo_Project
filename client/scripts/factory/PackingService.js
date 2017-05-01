myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
  var log = 'inside factory';

function postTrip(trip){
  console.log(trip.location);
  console.log(trip.date);
  $http.post('/trips', trip).then(function(response){
    console.log('hit postTrip', trip );
    console.log('success: ', response );
    // add getTrips();
    $location.path( '/packingList')
  });
}

function postItem(item)

  return {
    log : log,
    postTrip : postTrip,
    postItem : postItem
  };
}]);
