'use strict';

angular.module('clasherApp')
  .controller('LoginCtrl', function($scope, $rootScope, simpleLogin, Member) {

    $scope.login = function(service) {


      function addMember (err, user) {
        if(err) {
          $scope.err = err;
        } else {

          $rootScope.profile = {
            user: user,
            userPhoto: 'http://graph.facebook.com/'+user.id+'/picture?height=60&type=normal&width=60&accessToken='+user.accessToken
          };
          var member = new Member(user);
          member.save();

        }

      }

      simpleLogin.login(service, addMember);

    };

    $scope.logout = function() {
      delete $rootScope.profile;
      simpleLogin.logout();
    };

  });
/*
function(err) {
        

        // console.log(user);
        // $rootScope.profile = {
        //   user: user
        // };
        // $http.get('https://graph.facebook.com/'+user.id+'/picture?height=200&type=normal&width=200&access_token='+user.accessToken).then(function (response) {
        //   console.log(response);
        // });
        //https://graph.facebook.com/me
      }
 */