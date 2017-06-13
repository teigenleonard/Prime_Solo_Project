myApp.factory( 'LoginService', [ '$http', '$location', function($http, $location) {
  //  ------------- -- VARIABLES -------------------
  var log = console.log('inside login factory');
  var user = {
    username: '',
    password: '',
    user_id : 1};
  var message = '';
  // -------------------- LOGIN --------------------
  function login() {
    if(user.username === '' || user.password === '') {
      message = "Enter your username and password";
    } else {
      console.log('sending to server...', user);
      $http.post('/', user).then(function(response) {
        if(response.data.username) {
          console.log('success: ', response.data);
            user.username = response.data.username;
            user.password = response.data.password;
            user.user_id = response.data.id;
            console.log(user.username);
            console.log(user.password);
            console.log(user.user_id);
          // location works with SPA (ng-route)
          console.log('redirecting to user page');
          $location.path('/trips');
        } else {
          console.log('failure: ', response);
          message = "Wrong!!";
        }
      });
    }
  }//------------------- END LOGIN ------------------
  // ---------------------registerUser --------------------
  function registerUser() {
    if(user.username === '' || user.password === '') {
      message = "Choose a username and password";
    } else {
      console.log('sending to server...', user);
      $http.post('/register', user).then(function(response) {
        console.log('success');
        $location.path('/home');
      },
      function(response) {
        console.log('error');
        message = "Please try again.";
      });
    }
  }//------------------ END registerUser -------------------

  return {
    login : login,
    registerUser : registerUser,
    log : log,
    user : user,
    message : message

  };

}]);// ----------------  END SERVICE ---------------
