'use strict';

describe('First clean test', function() {
  it('It contains spec with an expectation. This is a simple test to check that unit testing works', 
    function() {
      expect(true).toBe(true);
    });
});


describe('Testing the controller: dictyHeaderFooterCtrl', function() {
  
  beforeEach(module('dictyHeaderFooterApp'));

  var controllerService, scope, httpMock;
  
  beforeEach(inject(function($controller,$rootScope,$httpBackend) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();
    controllerService  = $controller('dictyHeaderFooterCtrl', {$scope: scope});
  }));

  it('should check that the dynamic sections are not null', function(){
    expect(scope.sections.menus).not.toBeNull();
  });

  it('should access and check the title', function () {
    expect(scope.footer).toEqual('Dynamic Footer');
  });

  it('should mock the http service', function() {
    httpMock.expectGET('templates/linkjdjdjs.json');
  });

});


describe ('Footer Controller, simple test', function() {

  beforeEach(module('dictyHeaderFooterApp'));
  
  var controller, scope;

  beforeEach(inject(function($controller, $rootScope) {
       scope = $rootScope.$new();
       controller = $controller('dictyHeaderFooterCtrl', { $scope: scope});
  }));
  
});

describe('UnitTesting: main controller', function() {
  // Load the module with MainController
  beforeEach(module('dictyHeaderFooterApp'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('dictyHeaderFooterCtrl', {
      $scope: scope
    });
  }));

  it('should create $scope.footer when calling dictyHeaderFooterController', function() {
      expect(scope.footer).toBeUndefined();
      scope.dictyHeaderFooterController();
      // expect(scope.footer).toEqual('Dynamic Footer');
  });
});



