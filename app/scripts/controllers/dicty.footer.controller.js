/**
 * @ngdoc controller
 * @name dicty.footer.controller.js
 * @description
 * # The controller of the footer
 */

(function () {
    'use strict';

    /**
     * The controller
     * @param  {[type]} $scope 
     * @param  {[type]} $http  The http service. 
     * It gets the data from the json file at the momment.
     */
    function dictyFooterController($scope, dictyhfFactory, $http, $log) {
        
        $scope.title = 'Dynamic Footer (this is dynamic itself)';
        $scope.sections = {};

        dictyhfFactory.getJasonFile()
            .success(function(data){
                $scope.sections.menus = data;
            })
            .error(function() {
                $log.error('EEERRRRROOOOORRRR!!');
            });

        // When the http service was here:        
        // $http.get('templates/links.json')
        //     .success(function(data) {
        //         $scope.sections.menus = data;
        //     })
        //     .error(function() {
        //         $log.error('ERROR!!');
        //     }); 
    }

    angular
        .module('dictyHeaderFooterApp')
        .controller('dictyFooterCtrl', dictyFooterController);
})();