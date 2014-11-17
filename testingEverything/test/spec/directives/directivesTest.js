'use strict';

describe('Directive: dictyFooter', function () {

  beforeEach(module('dictyHeaderFooterApp'));

  var element,scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make the directive visible', inject(function ($compile) {
    element = angular.element('<dicty-footer></dicty-footer>');
    element = $compile(element)(scope);
  }));

});
