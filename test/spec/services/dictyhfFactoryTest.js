'use strict';


//INCOMPLETE TESTS

describe('mocking service http call', function() {

  beforeEach(module('dictyHeaderFooterApp'));

  var dictyHeaderFooterCtrl, $scope;

  describe('first with spies', function() {
    beforeEach(inject(function($controller, $rootScope, dictyhfFactory) {
      $scope = $rootScope.$new();

      spyOn(dictyhfFactory,'getJasonFile').and.callFake(function() {
        return {
          success: function(callback) { 
            callback({things: 'and stuff'});
          }
        };  
      });

      dictyHeaderFooterCtrl = $controller ('dictyHeaderFooterCtrl', { 
        $scope: $scope, dictyhfFactory: dictyhfFactory 
      });
    }));
  });

  describe('with httpBackend', function() {
    beforeEach(inject(function($controller, $rootScope, $httpBackend) {
      $scope = $rootScope.$new();
      
      $httpBackend.when('GET','templates/links.json')
        .respond({things: 'and stuff'});

      dictyHeaderFooterCtrl = $controller('dictyHeaderFooterCtrl', { $scope: $scope });
      $httpBackend.flush();
    }));
  });
});
