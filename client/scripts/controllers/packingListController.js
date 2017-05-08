myApp.controller('PackingListController', ['PackingService', 'LoginService', function(PackingService, LoginService) {
    var list = this;
    // console.log('packingListController');
    console.log('here lies user id: ', LoginService.user.user_id);
    // console.log('newItem when controller loads: ', list.newItem);

    list.itemsObject = PackingService.itemsObject;
    list.deleteItem = PackingService.deleteItem;

    list.postItem = function(newItem) {
      PackingService.postItem(newItem);
      list.newItem.name = '';
      list.newItem.quantity = '';
    };

    // list.claimItem =  function(singleItem){
    //   console.log('&&&& singleItem BEFORE: ', singleItem);
    //     var item = {
    //       name : singleItem.name,
    //       quantity : singleItem.quantity,
    //       trip_id : PackingService.selectedTrip.id,
    //       user_id : LoginService.user.user_id
    //     };
    //     console.log('&&&& singleItem BEFORE: ', item);
    //   PackingService.claimItem(item);
    //   };

    // console.log("Here you go: ", PackingService.selectedTrip);
    if(PackingService.selectedTrip.id !== 999){
    PackingService.getItems(PackingService.selectedTrip.id);
    }

}]);
