var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
<<<<<<< HEAD
      templateUrl : '/views/templates/home.html',
=======
      templateUrl : '/views/home.html',
>>>>>>> master
      controller : "LoginController"
      // controllerAs :
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: "LoginController"
      // controllerAs :
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: "UserController"
      // controllerAs :
    })
    .when('/trips', {
<<<<<<< HEAD
      templateUrl: '/views/templates/trips.html',
=======
      templateUrl: '/views/trips.html',
>>>>>>> master
      controller: "TripController",
      controllerAs : 'trip'
    })
    .when('/packingList', {
<<<<<<< HEAD
      templateUrl: '/views/templates/packingList.html',
      controller: "PackingListController",
      controllerAs : 'list'
    })
    .when('/invite', {
      templateUrl: '/views/templates/invite.html',
      controller: 'InviteController',
      controllerAs : 'invite'
=======
      templateUrl: '/views/packingList.html',
      controller: "PackingListController",
      controllerAs : 'list'
>>>>>>> master
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
