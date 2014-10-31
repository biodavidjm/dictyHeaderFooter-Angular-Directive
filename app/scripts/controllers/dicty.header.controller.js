/**
 * @ngdoc controller
 * @name dicty.header.controller.js
 * @description
 * # The controller of the header
 * Very similar to the footer
 */

(function () {
    'use strict';

    /**
     * The controller
     * @param  {[type]} $scope 
     * @param  {[type]} $http  The http service. 
     * It gets the data from the json file
     * to build the menus
     */
    function dictyHeaderController($scope, dictyhfFactory, $http, $log) {
        
        $scope.name = 'directive of the Header';
        $scope.sections = {};

        dictyhfFactory.getJasonFile()
            .success(function(data){
                $scope.sections.menus = data;
            })
            .error(function() {
                $log.error('EEERRRRROOOOORRRR!!');
            });
    }

    angular
        .module('dictyHeaderFooterApp')
        .controller('DictyHeaderControllerCtrl', dictyHeaderController);
})();