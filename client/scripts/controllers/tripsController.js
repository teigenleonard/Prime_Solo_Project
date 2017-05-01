myApp.controller('TripController', [ 'PackingService','$http', function(PackingService, $http) {
  var trip = this;
    console.log('TripController');

    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;
    console.log(PackingService.postTrip);
}]);
