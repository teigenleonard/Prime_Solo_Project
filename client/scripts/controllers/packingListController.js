myApp.controller('PackingListController', ['PackingService', function(PackingService) {
  var list = this;
  console.log('packingListController');
  
  list.postItem = PackingService.postItem;

}]);
