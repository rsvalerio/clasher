'use strict';

describe('Controller: DefensiveBuildingCtrl', function () {

  // load the controller's module
  beforeEach(module('clasherApp'));

  var DefensiveBuildingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DefensiveBuildingCtrl = $controller('DefensiveBuildingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
