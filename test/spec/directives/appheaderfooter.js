'use strict';

describe('Directive: appHeaderFooter', function () {

  // load the directive's module
  beforeEach(module('dictyHeaderFooterDirectiveApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<app-header-footer></app-header-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the appHeaderFooter directive');
  }));
});
