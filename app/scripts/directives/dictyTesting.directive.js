/**
 * dictyTesting.directive.js
 * ----------------
 * A testing angular directive. Just for pure testing purposes.
 */

(function(){

	'use strict';

	angular
	    .module('dictyHeaderFooterApp')
	    .directive('firstDirective', function(){
	        return{
	            restrict: 'E',
	            template: '<h3 class=\'theDirective\'><strong>Yep: this is a directive as well</strong></h3>'
	        };
	    });

})();


