myApp.controller('InviteController', [ 'MailService', function(MailService) {
  var invite = this;
  console.log('InviteController');

  invite.submitForm = MailService.emailInvite;

  // invite.submitForm = function(info) {
  //     MailService.emailInvite(info);
  //     console.log('Info@submitForm: ', info);
  //
  // };
}]);
