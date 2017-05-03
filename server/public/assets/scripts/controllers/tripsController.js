myApp.controller('TripController', [ 'PackingService','$location', function(PackingService, $location) {
  var trip = this;
    console.log('TripController');
    //Print trips to the DOM
    PackingService.getTrips();

    //@TODO put $location here
    trip.tripsObject = PackingService.tripsObject;
    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;
    trip.deleteTrip = PackingService.deleteTrip;

    trip.printClickedTrip = function(id){
      console.log(id);
      PackingService.tripsObject = trip.tripsObject.id;
      console.log(PackingService.tripsObject);
      $location.path('/packingList');
    };

}]);
