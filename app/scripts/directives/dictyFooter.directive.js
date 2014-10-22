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

    function dictyFooterMatter () {
            return{
                restrict:'E',
                templateUrl:'templates/dicty-footer.html'
            };
    }

	angular
	    .module('dictyFooterApp')
	    .directive('dictyFooter', dictyFooterMatter);

})();