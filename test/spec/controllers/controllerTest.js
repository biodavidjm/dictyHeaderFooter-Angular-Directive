'use strict';

describe('First clean test', function() {
  it('It contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});


describe('Testing the controller: dictyFooterCtrl', function() {
  // Load the main module
  beforeEach(module('dictyFooterApp'));

  var controllerService, scope, httpMock;
  // Let's inject the $controller and the $rootScope services
  beforeEach(inject(function($controller,$rootScope, $httpBackend) {
    httpMock = $httpBackend;
    scope = $rootScope.$new();
    // httpMock.when('GET','template/links.json').respond();
    controllerService  = $controller('dictyFooterCtrl', {$scope: scope});
  }));

  // it('should access the title',
  // function(){
  //   // var num = 6;
  //   expect(scope.title).toEqual('Dynamic Footer (this is dynamic itself)');
  //   // expect(scope.sections.menus).not.toBeNull();
  // });

// A different approach
  it('should get the title', function () {
    httpMock.expectGET('templates/links.json');
    expect(scope.title).toEqual('Dynamic Footer (this is dynamic itself)');
  });
});


// Writing it in a different way
describe ('Footer Controller, simple test', function() {

  //Define the items that will be exposed in beforeEach
  var controller, scope;

  // The setup that needs to be defined for each test
  beforeEach(module('dictyFooterApp'));

  beforeEach(inject(function($controller, $rootScope) {
       scope = $rootScope.$new();
       controller = $controller('dictyFooterCtrl', {
            $scope: scope
       });
  }));
});
