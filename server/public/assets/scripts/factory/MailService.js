myApp.factory( 'MailService', [ '$http', function($http){
  var emailInvite = 'Inside MailService';

  return {
    emailInvite : emailInvite
  };
}]);
