'use strict';

angular.module('clasherApp')
  .factory('FirebaseStrapSelect', function (syncData, $filter, $q) {

    return function (fireBasePath){

      var 
        defer = $q.defer(),
        buildingTypeSelectObject = [],
        buildingType = syncData(fireBasePath)
      ;

      buildingType.$on('loaded', function () {
        initializeBuildingType();
      });

      function initializeBuildingType () {
        var arr = $filter('orderByPriority')(buildingType);

        for (var bType in arr) {
          buildingTypeSelectObject.push({value: bType, label: arr[bType]});
        }

        defer.resolve(buildingTypeSelectObject);
      }

      return defer.promise;
    };

  });