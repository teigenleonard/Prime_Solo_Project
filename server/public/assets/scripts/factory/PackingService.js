myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
//  --------- VARIABLES -------------
var log = 'inside factory';
var tripsObject = {
  tripsArray : []
};
var itemsObject = {
  itemsArray : []
};
// var userTripObject = {
//   userTripArray : []
// };
// --------- MISC --------------
// function getUserTrip(){
//   $http.get('/userTrip').then(function(response){
//     userTripObject.userTripArray = response.data;
//     console.log('getUserTrip: ', userTripObject.userTripArray);
//   });
// }
//-------- MIC END ------------

// --------- TRIPS -------------
function getTrips(){
  console.log('hit getTrips');
  $http.get('/trips').then(function(response){
    tripsObject.tripsArray = response.data;
    console.log(tripsObject.tripsArray);
    // getUserTrip();
    // for (var i = 0; i < tripsObject.tripsArray.length; i++) {
    //   var trip = tripsObject.tripsArray[i];
    //   console.log(trip);
    //   for (var j = 0; j < userTripObject.userTripArray.length; j++) {
    //     var userTrip = userTripObject.userTripArray[j];
    //     console.log(userTrip, user.user_id);
    //     if (userTrip.trip_id == trip.trip_id &&
    //         userTrip.user_id == user.user_id &&
    //         userTrip.status == 'invited') {
    //           trip.isInvited = true;
    //           break;
    //         }
    //   }
    // }
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

function deleteTrip( id){
  console.log( 'hit deleteTrip for:', id );
  // $http.delete('/:id', id).then(function(response){
    getTrips();
  // });
}
//-------- END TRIPS ------------

// --------- ITEMS -------------
//@TODO replace path to get to /:id in trips.js
function getItems(){
  console.log('hit getItems');
  $http.get('/items').then(function(response){
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
//-------- END ITEMS ------------

  return {
    log : log,
    postTrip : postTrip,
    postItem : postItem,
    getTrips : getTrips,
    tripsObject : tripsObject,
    getItems : getItems,
    itemsObject : itemsObject,
    deleteTrip : deleteTrip
  };

}]);// END SERVICE
