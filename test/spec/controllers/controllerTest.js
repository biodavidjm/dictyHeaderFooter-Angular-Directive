'use strict';

describe('First clean test', function() {
  it('It contains spec with an expectation. This is a simple test to check that unit testing works', 
    function() {
      expect(true).toBe(true);
    });
});


describe('Testing the controller: dictyFooterCtrl', function() {
  
  beforeEach(module('dictyHeaderFooterApp'));

  var controllerService, scope, httpMock;
  
  beforeEach(inject(function($controller,$rootScope,$httpBackend) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();
    controllerService  = $controller('dictyFooterCtrl', {$scope: scope});
  }));

  it('should check that the dynamic sections are not null', function(){
    expect(scope.sections.menus).not.toBeNull();
  });

  it('should access and check the title', function () {
    expect(scope.title).toEqual('Dynamic Footer (this is dynamic itself)');
  });

  it('should mock the http service', function() {
    httpMock.expectGET('templates/links.json');
  });

});


describe ('Footer Controller, simple test', function() {

  beforeEach(module('dictyHeaderFooterApp'));
  
  var controller, scope;

  beforeEach(inject(function($controller, $rootScope) {
       scope = $rootScope.$new();
       controller = $controller('dictyFooterCtrl', { $scope: scope});
  }));
  
});
