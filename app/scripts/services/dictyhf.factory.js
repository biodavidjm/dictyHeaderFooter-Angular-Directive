'use strict';

/**
 * @ngdoc service
 * @name dynamicFooterApp.dictyhf.factory
 * @description
 * # dictyhf.factory
 * This factory should provide a service that can be shared
 * for the header and footer.
 */

angular.module('dictyHeaderFooterApp')
	.factory('dictyhfFactory', function () {
		// return {
		// 	getJasonF8oe
		// }

  	//Testing the Factory
    var meaningOfLife = 42;
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
