'use strict';

angular.module('clasherApp')
  .controller('BuildingCtrl', function ($scope, FirebaseStrapSelect) {

    $scope.building = {};

    new FirebaseStrapSelect('buildingType').then(function (data) {
      $scope.buildingTypeSelectObject = data;
    });

    
    

  });
