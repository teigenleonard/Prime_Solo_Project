myApp.factory( 'PackingService', [function() {
  var log = 'inside factory';
    console.log(log);
  return {
    log : log
  };
}]);
