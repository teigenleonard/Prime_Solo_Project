myApp.factory( 'MailService', [ '$http', function($http){
  var hit = 'Inside MailService';



  var emailInvite = function(info) {
    console.log('line 7', info);
    $http.post( '/mail' , info ).then(function(response){
      console.log( 'Email sent: ', response.data );
    });
  };


  return {
    hit : hit,
    emailInvite : emailInvite
  };
}]);
