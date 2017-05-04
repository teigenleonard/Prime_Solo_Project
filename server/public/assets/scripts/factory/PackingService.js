myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
//  --------- VARIABLES -------------
var log = 'inside factory';

var itemsObject = {
  itemsArray : []
};
var invtedTripObject = {
  invitedTripArray : []
};
var joinedTripObject = {
  joinedTripArray : []
};
var createdTripObject = {
  createdTripArray : []
};

// -------------------- TRIPS -------------------
function getTrips(){
  console.log('hit getTrips');
  $http.get('/trips').then(function(response){
    createdTripObject.createdTripArray = response.data;
    console.log(createdTripObject.createdTripArray);
  });
  $http.get('/userTrip').then(function(response){
    invtedTripObject.invitedTripArray = response.data;
    console.log('getUserTrip: ', invtedTripObject.invitedTripArray);
  });
  $http.get('/userTrip/joined').then(function(response){
    joinedTripObject.joinedTripArray = response.data;
    console.log('getUserTrip: ', joinedTripObject.joinedTripArray);
  });
} // END getTrips

function postTrip(trip){
  console.log(trip);

  $http.post('/trips', trip).then(function(response){
    console.log('hit postTrip', trip );
    console.log('success: ', response );
    getTrips();
    $location.path( '/packingList');
  });
} // END postTrip

function deleteTrip( id ){
  console.log( 'hit deleteTrip for:', id );
  // $http.delete('/:id', id).then(function(response){
    getTrips();
  // });
}
//------------------- END TRIPS ------------------

// ---------------------ITEMS ----------------
//@TODO replace path to get to /:id in trips.js
function getItems(tripId){
  console.log('hit getItems');
  $http({
    method : 'GET',
    url : '/items',
    params : {
      tripId : tripId
    }
  }).then(function(response){
    itemsObject.itemsArray = response.data;
    console.log(itemsObject.itemsArray);
  });
} // END getItems

function postItem(item){
  console.log(item);

  $http.post('/items', item).then(function(response){
    console.log('hit postItem', item );
    console.log('success: ', response );
    getItems();
  });
} // END postItem
//------------------ END ITEMS ------------

  return {
    log : log,
    postTrip : postTrip,
    postItem : postItem,
    getTrips : getTrips,
    createdTripObject : createdTripObject,
    invtedTripObject : invtedTripObject,
    joinedTripObject : joinedTripObject,
    getItems : getItems,
    itemsObject : itemsObject,
    deleteTrip : deleteTrip
  };

}]);// ----------------  END SERVICE -----------
