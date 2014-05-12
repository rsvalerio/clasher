'use strict';

angular.module('clasherApp')
  .controller('DefensiveBuildingCtrl', function ($route, $scope, syncData, unitTypeTargeted) {
    
    $scope.unitTypeTargeted = unitTypeTargeted;
    $scope.dBuilding = {};

    $scope.sync = function () {

      syncData('DefensiveBuilding/'+$scope.id).$bind($scope, 'dBuilding').then(function (unbind) {
        $scope.unbind = unbind;
      });

    };

    $scope.getLevelLabel = function (index) {
      return parseInt(index,10)+1;
    };

    $scope.addLevel = function () {
      var 
        id = null
      ;

      if(!$scope.dBuilding.hasOwnProperty('levels')){
        id = 0;
        $scope.dBuilding.levels = {};
      } else {
        id = Object.keys($scope.dBuilding.levels).length;
      }

      var lv = {
          damagePerSecond: null,
          damagePerShot: null,
          hitpoints: null,
          costToLoad: null,
          cost: null,
          buildTime: null,
          experienceGained: null,
          townHallLevelRequired: null,
          shotCollor: null
        };
      
      $scope.dBuilding.levels[id] = lv;
      
    };

    $scope.toggleLevel = function (lvId) {
      var lvVar = 'lv'+lvId;
      $scope[lvVar] = !$scope[lvVar];
    };

    $scope.whatToggleIcon = function (lvId) {
      var lvVar = 'lv'+lvId;
      $scope[lvVar] = !$scope[lvVar];
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
