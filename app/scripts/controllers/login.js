'use strict';

angular.module('clasherApp')
  .controller('LoginController', function($scope, simpleLogin) {

    $scope.login = function(service) {
      simpleLogin.login(service, function(err) {
        $scope.err = err? err + '' : null;
      });
    };

  });
