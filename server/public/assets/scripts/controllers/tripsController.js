myApp.controller('TripController', [ 'LoginService', 'MailService','PackingService','$location', function(LoginService, MailService, PackingService, $location) {
  var trip = this;
    console.log('TripController', LoginService.user);
    //Print trips to the DOM
    PackingService.getTrips();

    trip.createdTripObject = PackingService.createdTripObject;
    trip.invitedTripObject = PackingService.invitedTripObject;
    trip.joinedTripObject = PackingService.joinedTripObject;
    trip.log = PackingService.log;
    trip.postTrip = PackingService.postTrip;
    trip.deleteTrip = PackingService.deleteTrip;
    trip.joinTrip = PackingService.joinTrip;


    trip.inviteTrip = function(id){
      $location.path('/invite');
    };

    // trip.assignTripId = MailService.assignTripId;

    //TODO replace this with routerParams
    trip.printClickedTrip = function(id){
      PackingService.selectedTrip.id = id;
      console.log("Boom, trip! " , PackingService.selectedTrip);
      $location.path('/packingList');
    };


}]);
