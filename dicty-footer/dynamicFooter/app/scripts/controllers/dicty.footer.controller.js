/**
 dicty.footer.controller.js
 ----------------
  dictyFooterCtrl: the controller of the footer
  
 */

(function () {
    'use strict';

    function dictyFooterController($scope, $http) {
        $scope.title = 'Dynamic Footer (this is dynamic itself)';
        $scope.sections = {};
        $http.get('templates/links.json').success(function(data) {
            $scope.sections.menus = data;
        });
    }
    
    angular
        .module('dictyFooterApp')
        .controller('dictyFooterCtrl', dictyFooterController);

/**
 * The controller
 * @param  {[type]} $scope 
 * @param  {[type]} $http  The http service. It gets the data from the json file
 */




})();