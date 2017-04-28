myApp.controller('InviteController', [ 'MailService', function(MailService) {
  var invite = this;
  console.log('InviteController');

  invite.submitForm = MailService.emailInvite;


}]);
