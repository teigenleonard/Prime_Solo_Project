myApp.controller('InviteController', [ 'MailService', function(MailService) {
  var invite = this;
  console.log('InviteController');

  invite.emailInvite = MailService.emailInvite;

}]);
