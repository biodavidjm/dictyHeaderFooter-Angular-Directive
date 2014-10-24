'use strict';

describe('Service: dictyhf.factory', function () {

  // load the service's module
  beforeEach(module('dictyFooterApp'));

  // instantiate service
  var dictyhfFactory;
  beforeEach(inject(function (_dictyhfFactory_) {
    dictyhfFactory = _dictyhfFactory_;
  }));

  it('should do something', function () {
    expect(!!dictyhfFactory).toBe(true);
  });

});
