myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
  var log = 'inside factory';
// --------- TRIPS -------------
function getTrips(){
  console.log('hit getTrips');
}

function postTrip(trip){
  console.log(trip);

  $http.post('/trips', trip).then(function(response){
    console.log('hit postTrip', trip );
    console.log('success: ', response );
    getTrips();
    $location.path( '/packingList');
  });
} // END postTrip
//-------- END TRIPS ------------

// --------- ITEMS -------------
function postItem(item){
  console.log(item);

  $http.post('/items', item).then(function(response){
    console.log('hit postItem', item );
    console.log('success: ', response );
    // @TODO add getItems();
  });
} // END postItem
//-------- END ITEMS ------------
  return {
    log : log,
    postTrip : postTrip,
    postItem : postItem,
    getTrips : getTrips
  };

}]);
