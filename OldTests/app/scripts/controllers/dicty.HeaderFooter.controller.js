/**
 * @ngdoc controller
 * @name dicty.footer.controller.js
 * @description
 * # The controller of the footer
 */

(function () {
    'use strict';

    angular
        .module('dictyHeaderFooterApp')
        .controller('dictyHeaderFooterCtrl', function ($scope, dictyhfFactory, $http, $log) {
            $scope.footer = 'Angular Dynamic Footer';
            $scope.header = 'Angular Dynamic Header';
            $scope.sections = {};

            dictyhfFactory.getJasonFile()
                .success(function(data){
                    $scope.sections.menus = data;
                })
                .error(function() {
                    $log.error('EEERRRRROOOOORRRR!!');
                });
    });

})();