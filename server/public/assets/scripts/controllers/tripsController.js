myApp.controller('TripController', [ 'PackingService', function(PackingService) {
  var trip = this;
    console.log('TripController');

    trip.getTrips = PackingService.getTrips();
    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;

}]);
