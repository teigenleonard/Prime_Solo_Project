myApp.controller('PackingListController', ['PackingService', '$routeParams', function(PackingService, $routeParams) {
  var list = this;
  console.log('packingListController');
  PackingService.getItems();

  list.postItem = PackingService.postItem;
  list.itemsObject = PackingService.itemsObject;
  console.log(list.itemsObject);
}]);

// @TODO This is where I left off using $routeParams
