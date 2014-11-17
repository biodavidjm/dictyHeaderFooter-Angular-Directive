/**
 * @ngdoc service
 * @name dynamicFooterApp.dictyhf.factory
 * @description
 * # dictyhf.factory
 * This factory should provide a service that can be shared
 * for the header and footer.
 */

'use strict';

angular.module('dictyHeaderFooterApp')
	.factory('dictyhfFactory', function ($http) {
		return {
			getJasonFile: function() {
				return $http.get('templates/links.json');
			}
		};
  	});
