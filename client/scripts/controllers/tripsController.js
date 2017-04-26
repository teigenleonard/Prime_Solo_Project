myApp.controller('TripController', [ 'PackingService', function(PackingService) {
  var trip = this;
    console.log('TripController');

    trip.log = PackingService.log;
}]);
