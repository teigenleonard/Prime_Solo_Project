myApp.controller('TripController', [ 'PackingService','$location', function(PackingService, $location) {
  var trip = this;
    console.log('TripController');
    //Print trips to the DOM
    PackingService.getTrips();
    //@TODO put $location here
    trip.tripsObject = PackingService.tripsObject;
    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;

    trip.printClickedTrip = function(id){
      PackingService.tripObject = trip.tripObject.id;
      $location.path('/packingList');
    };

}]);
