var myApp = angular.module('myApp', ['ngRoute']);
/// Routes ///

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl : '/views/home.html',
      controller : "LoginController"
      // controllerAs :
    })
    .when('/register', {
      templateUrl: '/views/register.html',
      controller: "LoginController"
      // controllerAs :
    })
    .when('/user', {
      templateUrl: '/views/user.html',
      controller: "UserController"
      // controllerAs :
    })
    .when('/trips', {
      templateUrl: '/views/trips.html',
      controller: "TripController",
      controllerAs : 'trip'
    })
    .when('/packingList', {
      templateUrl: '/views/packingList.html',
      controller: "PackingListController",
      controllerAs : 'list'
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
