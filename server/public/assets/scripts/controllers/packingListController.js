myApp.controller('PackingListController', ['PackingService', function(PackingService) {
  var list = this;
  console.log('packingListController');

  list.postItem = PackingService.postItem;
  list.itemsObject = PackingService.itemsObject;
  console.log(list.itemsObject);

  console.log("Here you go: ", PackingService.selectedTrip);

  if(PackingService.selectedTrip !== 999){
    PackingService.getItems(PackingService.selectedTrip);
  }
}]);
