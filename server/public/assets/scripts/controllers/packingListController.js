myApp.controller('PackingListController', ['PackingService','LoginService', function(PackingService, LoginService) {
  var list = this;
  console.log('packingListController');

  list.postItem = PackingService.postItem;
  console.log('newItem when controller loads: ', list.newItem);

  list.itemsObject = PackingService.itemsObject;
  console.log(list.itemsObject);
  console.log('here lies user id: ', LoginService.user.user_id);

  console.log("Here you go: ", PackingService.selectedTrip);

  // if(PackingService.selectedTrip.id !== 999){
    PackingService.getItems(PackingService.selectedTrip.id);
  // }
  console.log('clearItem?');
  list.newItem = {
      name : '',
      quantity : '',
      trip_id : PackingService.selectedTrip.id,
    };
}]);
