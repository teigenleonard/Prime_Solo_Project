myApp.controller('TripController', [ 'PackingService','$location', function(PackingService, $location) {
  var trip = this;
    console.log('TripController');
    //Print trips to the DOM
    PackingService.getTrips();

    trip.createdTripObject = PackingService.createdTripObject;
    trip.invtedTripObject = PackingService.invtedTripObject;
    trip.joinedTripObject = PackingService.joinedTripObject;
    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;
    trip.deleteTrip = PackingService.deleteTrip;

    //TODO replace this with routerParams

    trip.printClickedTrip = function(id){
      console.log(id);
      console.log(trip.createdTripObject);
      PackingService.createdTripObject = trip.createdTripObject.id;
      console.log(PackingService.createdTripsObject);
      $location.path('/packingList');
    };


}]);
