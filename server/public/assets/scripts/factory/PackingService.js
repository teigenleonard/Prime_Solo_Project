myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
//  --------- VARIABLES -------------
var log = 'inside factory';
var tripsObject = {
  tripsArray : []
};

// --------- TRIPS -------------
function getTrips(){
  console.log('hit getTrips');
  $http.get('/trips').then(function(response){
    tripsObject.tripsArray = response.data;
    console.log(tripsObject.tripsArray);
  });
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
    getTrips : getTrips,
    tripsObject : tripsObject,
  };

}]);// END SERVICE
