'use strict';

describe('Directive: dictyHeaderFooterApp', function () {

  // load the directive's module
  beforeEach(module('dictyHeaderFooterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dicty-header></dicty-header>');
    element = $compile(element)(scope);
  }));
});
