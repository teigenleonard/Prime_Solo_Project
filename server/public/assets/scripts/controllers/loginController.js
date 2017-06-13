myApp.controller('LoginController', ['LoginService', '$scope', '$http', '$location', function(LoginService, $scope, $http, $location) {
    console.log('loginservice here we are BEFORE: ', LoginService.user);

    $scope.log = LoginService.log;
    $scope.user = LoginService.user;
    $scope.message = LoginService.message;
    $scope.login = LoginService.login;
    $scope.registerUser = LoginService.registerUser;

    console.log('loginservice here we are AFTER: ', LoginService.user);
}]);
