'use strict';

describe('Service: unitTypeTargeted', function () {

  // load the service's module
  beforeEach(module('clasherApp'));

  // instantiate service
  var unitTypeTargeted;
  beforeEach(inject(function (_unitTypeTargeted_) {
    unitTypeTargeted = _unitTypeTargeted_;
  }));

  it('should do something', function () {
    expect(!!unitTypeTargeted).toBe(true);
  });

});
