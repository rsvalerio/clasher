'use strict';

describe('Service: BuildingType', function () {

  // load the service's module
  beforeEach(module('clasherApp'));

  // instantiate service
  var BuildingType;
  beforeEach(inject(function (_BuildingType_) {
    BuildingType = _BuildingType_;
  }));

  it('should do something', function () {
    expect(!!BuildingType).toBe(true);
  });

});
