/**
 * @ngdoc directive
 * @name dictyHeader.directive.js
 * @description
 * # The directive of the footer
 */

(function () {
'use strict';

	/**
	 * [dictyHeader is the <dicty-footer> directive]
	 * @return {dicty-footer.html template}
	 */

    function dictyHeaderMatter () {
            return{
                restrict:'E',
                templateUrl:'templates/dicty-header.html'
            };
    }

	angular
	    .module('dictyHeaderFooterApp')
	    .directive('dictyHeader', dictyHeaderMatter);

})();