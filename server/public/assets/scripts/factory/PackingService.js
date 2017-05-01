myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
//  --------- VARIABLES -------------
var log = 'inside factory';
var tripsObject = {
  tripsArray : []
};
var itemsObject = {
  itemsArray : []
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
function getItems(){
  console.log('hit getItems');
  $http.get('/items').then(function(response){
    itemsObject.itemsArray = response.data;
    console.log(itemsObject.itemsArray);
  });
}

function postItem(item){
  console.log(item);

  $http.post('/items', item).then(function(response){
    console.log('hit postItem', item );
    console.log('success: ', response );
    getItems();
  });
} // END postItem
//-------- END ITEMS ------------

  return {
    log : log,
    postTrip : postTrip,
    postItem : postItem,
    getTrips : getTrips,
    tripsObject : tripsObject,
    getItems : getItems
  };

}]);// END SERVICE
