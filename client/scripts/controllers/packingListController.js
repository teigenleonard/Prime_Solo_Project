myApp.controller('PackingListController', ['PackingService', 'LoginService', function(PackingService, LoginService) {
    var list = this;
    // console.log('packingListController');
    console.log('here lies user id: ', LoginService.user.user_id);
    console.log('newItem when controller loads: ', list.newItem);

    list.postItem = function(newItem) {
      PackingService.postItem(newItem);
      list.newItem.name = '';
      list.newItem.quantity = '';
    };
    list.itemsObject = PackingService.itemsObject;
    list.claimItem =  function(singleItem){
        var item = {
          name : singleItem.name,
          quantity : singleItem.quantity,
          user_id : LoginService.user.user_id
        };
        console.log("Boom, " , item);
        PackingService.getItems(PackingService.selectedTrip.id);
      };
    // console.log("Here you go: ", PackingService.selectedTrip);
    if(PackingService.selectedTrip.id !== 999){
    PackingService.getItems(PackingService.selectedTrip.id);
    }

}]);
