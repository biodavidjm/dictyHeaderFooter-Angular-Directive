/**
 * @ngdoc directive
 * @name dictyFooter.directive.js
 * @description
 * # The directive of the footer
 */

(function () {
'use strict';

	/**
	 * [dictyFooter is the <dicty-footer> directive]
	 * @return {dicty-footer.html template}
	 */

	angular
	    .module('dictyHeaderFooterApp')
	    .directive('dictyFooter', function() {
            return {
                restrict:'E',
                templateUrl:'templates/dicty-footer.html'
            };	    	
	    });

})();