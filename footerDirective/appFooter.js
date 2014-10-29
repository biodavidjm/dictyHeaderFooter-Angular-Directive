'use strict';

/**
 * @ngdoc directive and factory
 * @name dictyFooterApp
 * @description
 * dictyFooterApp includes everything requires by the factury, directive and the controller within the directive.
 *
 * This is the main module of the application.
 */
angular
  .module('dictyFooterApp', [])
  .factory('dictyhfFactory', function ($http) {
    return {
      getJasonFile: function() {
        return $http.get('templates/links.json');
      }
    };
  })
  .directive('dictyFooter', function() {
    return{
      restrict:'E',
      templateUrl:'templates/dicty-footer.html',
      scope: true,
      controller: function(dictyhfFactory, $scope, $log) {

        $scope.title = 'Dynamic Footer (this is dynamic itself)';
        $scope.sections = {};

        dictyhfFactory.getJasonFile()
            .success(function(data){
                $scope.sections.menus = data;
            })
            .error(function() {
                $log.error('EEERRRRROOOOORRRR!!');
            });
      }
    };
  });

  