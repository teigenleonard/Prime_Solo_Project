myApp.controller('PackingListController', ['PackingService', function(PackingService) {
  var list = this;
  console.log('packingListController');
  PackingService.getItems();

  list.postItem = PackingService.postItem;
  list.itemsObject = PackingService.itemsObject;
  console.log(list.itemsObject);
}]);
