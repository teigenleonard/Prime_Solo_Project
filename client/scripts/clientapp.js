var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl : '/views/templates/home.html',
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
      templateUrl: '/views/templates/trips.html',
      controller: "TripController",
      controllerAs : 'trip'
    })
    .when('/packingList', {
      templateUrl: '/views/templates/packingList.html',
      controller: "PackingListController",
      controllerAs : 'item'
    })
    .when('/invite', {
      templateUrl: '/views/templates/invite.html',
      controller: 'InviteController',
      controllerAs : 'invite'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
