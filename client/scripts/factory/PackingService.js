myApp.factory( 'PackingService', [ '$http', '$location', function($http, $location) {
  //  --------- VARIABLES -------------
  var log = 'inside factory';

  var itemsObject = {
    itemsArray : []
  };
  var invitedTripObject = {
    invitedTripArray : []
  };
  var joinedTripObject = {
    joinedTripArray : []
  };
  var createdTripObject = {
    createdTripArray : []
  };
  var selectedTrip = {
    id : ''
  };
  var selectedItem = {
    user_id : ''
  };
  // -------------------- TRIPS -------------------
  function getTrips(){
    // console.log('hit getTrips');
    $http.get('/trips').then(function(response){
      createdTripObject.createdTripArray = response.data;
      // console.log('Created Trips ',createdTripObject.createdTripArray);
    });
    $http.get('/userTrip').then(function(response){
      invitedTripObject.invitedTripArray = response.data;
      // console.log('Invited Trip: ', invitedTripObject.invitedTripArray);
    });
    $http.get('/userTrip/joined').then(function(response){
      joinedTripObject.joinedTripArray = response.data;
      // console.log('Joined Trip: ', joinedTripObject.joinedTripArray);
    });
  } // END getTrips

  function postTrip(trip){
    // console.log(trip);
    $http.post('/trips', trip).then(function(response){
      // console.log('hit postTrip', trip );
      console.log('success: ', response );
      getTrips();
      $location.path( '/packingList');
    });
  } // END postTrip


  function joinTrip(join){
    console.log( 'hit joinTrip for:', join );
    var ids = {
      tripId : join.trip_id,
      userId : join.user_id
    };
    $http.put('/userTrip', ids ).then(function(response){
      //   getTrips();
    });
  }

  function deleteTrip( id ){
    console.log( 'hit deleteTrip for:', id );
    //   $http({
    //       method: 'DELETE',
    //       url: '/trips/' + id,
    //       headers: {
    //           'Content-type': 'application/json;charset=utf-8'
    //       }
    //   })
    //   .then(function(response) {
    //       console.log(response.data);
    //   }, function(rejection) {
    //       console.log(rejection.data);
    //   });
    //   getTrips();
  }
  //------------------- END TRIPS ------------------

  // ---------------------ITEMS ----------------
  //@TODO replace path to get to /:id in trips.js
  function getItems(tripId){
    console.log('hit getItems', tripId);
    $http({
      method : 'GET',
      url : '/items',
      params : {
        tripId : tripId
      }
    }).then(function(response){
      itemsObject.itemsArray = response.data;
      console.log('items array: ', itemsObject.itemsArray);
    });
  } // END getItems

  function postItem(addItem){
    var item = {
      name : addItem.name,
      quantity : addItem.quantity,
      trip_id : selectedTrip.id
    };
    console.log('inside factory: ', item);
    $http.post('/items', item).then(function(response){
      // console.log('hit postItem', item );
      // console.log('success: ', response );
    });
    getItems(item.trip_id);
  } // END postItem

  function claimItem(claim){
    // console.log('inside factory: ', claim);
    var item = {
      name : claim.name,
      quantity : claim.quantity,
      trip_id : claim.trip_id,
      user_id : claim.user_id
    };
    console.log('inside factory: ', item);
    $http.post('/items/claim', item).then(function(response){
      console.log('hit postItem', item );
      console.log('success: ', response );
    });
    getItems(item.trip_id);
  } // END postItem
  //------------------ END ITEMS ------------

  return {
    log : log,
    // newItem : newItem,
    postTrip : postTrip,
    postItem : postItem,
    getTrips : getTrips,
    getItems : getItems,
    createdTripObject : createdTripObject,
    invitedTripObject : invitedTripObject,
    joinedTripObject : joinedTripObject,
    itemsObject : itemsObject,
    selectedTrip : selectedTrip,
    selectedItem : selectedItem,
    joinTrip : joinTrip,
    deleteTrip : deleteTrip,
    claimItem : claimItem
  };

}]);// ----------------  END SERVICE -----------
