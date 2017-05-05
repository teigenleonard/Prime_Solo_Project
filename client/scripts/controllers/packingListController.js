myApp.controller('PackingListController', ['PackingService', '$routeParams', function(PackingService, $routeParams) {
  var list = this;
  console.log('packingListController');
  console.log('$routeParams: ', $routeParams);
  PackingService.getItems($routeParams.packingListId);

  list.postItem = PackingService.postItem;
  list.itemsObject = PackingService.itemsObject;
  console.log(list.itemsObject);

  console.log("Here you go you Teigen: ", PackingService.selectedTrip);

  if(PackingService.selectedTrip !== 999){
    PackingService.getItems(PackingService.selectedTrip);
  }
}]);

// @TODO This is where I left off using $routeParams
