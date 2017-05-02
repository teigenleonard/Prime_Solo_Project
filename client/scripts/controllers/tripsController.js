myApp.controller('TripController', [ 'PackingService', function(PackingService) {
  var trip = this;
    console.log('TripController');
    //Print trips to the DOM
    PackingService.getTrips();
    //@TODO put $location here
    trip.tripsObject = PackingService.tripsObject;
    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;


}]);
