'use strict';

angular.module('clasherApp')
  .service('buildingType', function BuildingType(syncData, $filter, $q) {

    var 
      defer = $q.defer(),
      buildingTypeSelectObject = [],
      buildingType = syncData('buildingType')
    ;

    buildingType.$on('loaded', function () {
      initializeBuildingType();
    });

    function initializeBuildingType () {
      //filtering firebase ref into array (filter defined by firebase)
      var arr = $filter('orderByPriority')(buildingType);

      for (var bType in arr) {
        buildingTypeSelectObject.push({value: bType, label: bType[buildingType]});
      }

      defer.resolve(buildingTypeSelectObject);
    }

    return defer.promise;

  });
