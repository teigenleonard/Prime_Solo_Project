myApp.factory( 'MailService', [ '$http', function($http){
  var hit = 'Inside MailService';

  var emailInvite = function(info) {
    console.log('line 7', info);
    $http.post( '/mail' , info ).then(function(response){
      console.log( 'Email sent: ', response.data );
    });
  };

  function assignTripId(userTrip){
    console.log(userTrip);

    $http.post('/userTrip', userTrip).then(function(response){
      console.log('hit postUserTrip', userTrip );
      console.log('userTrip success: ', response );
    });
  } // END postUserTrip


  return {
    hit : hit,
    emailInvite : emailInvite,
    assignTripId : assignTripId
  };
}]);
