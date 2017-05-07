myApp.controller('PackingListController', ['PackingService', 'LoginService', function(PackingService, LoginService) {
    var list = this;
    // console.log('packingListController');
    console.log('here lies user id: ', LoginService.user.user_id);
    console.log('newItem when controller loads: ', list.newItem);

    list.postItem = PackingService.postItem;
    list.itemsObject = PackingService.itemsObject;
    list.claimItem =  function(id){
        PackingService.selectedTrip.id = id;
        console.log("Boom, trip! " , PackingService.selectedTrip);
        $location.path('/packingList');
      };
  // console.log("Here you go: ", PackingService.selectedTrip);
    if(PackingService.selectedTrip.id !== 999){
    PackingService.getItems(PackingService.selectedTrip.id);
    }
    console.log('clearItem?');
    list.newItem = {
        name: '',
        quantity: '',
        trip_id: PackingService.selectedTrip.id,
    };
}]);
