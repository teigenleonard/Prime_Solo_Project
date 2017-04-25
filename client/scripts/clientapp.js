var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "LoginController"
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController"
    })
    .when('/trips', {
      templateUrl: '/views/trips.html',
      controller: "TripController"
    })
    .when('/packingList', {
      templateUrl: '/views/packingList.html',
      controller: "PackingListController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
