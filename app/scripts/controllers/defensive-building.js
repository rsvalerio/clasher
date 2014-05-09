'use strict';

angular.module('clasherApp')
  .controller('DefensiveBuildingCtrl', function ($route, $scope, syncData, unitTypeTargeted) {
    
    $scope.unitTypeTargeted = unitTypeTargeted;

    $scope.sync = function () {

      syncData('DefensiveBuilding/'+$scope.id).$bind($scope, 'dBuilding').then(function (unbind) {
        $scope.unbind = unbind;
      });

    };

    $scope.clear = function () {
      $scope.unbind();
      $scope.dBuilding = null;
      $scope.id = null;
      $scope.ref = null;
      $scope.unbind = null;
      $route.reload();
    };
 

  });
