function dictyFooter(){return{restrict:"E",templateUrl:"templates/dicty-footer.html"}}!function(){"use strict";angular.module("dictyFooterApp",[])}(),function(){"use strict";function a(a,b){a.title="Dynamic Footer (this is dynamic itself)",a.sections={},b.get("templates/links.json").success(function(b){a.sections.menus=b})}angular.module("dictyFooterApp").controller("dictyFooterCtrl",a),a.$inject=["$scope","$http"]}(),angular.module("dictyFooterApp").directive("dictyFooter",dictyFooter),angular.module("dictyFooterApp").directive("firstDirective",function(){return{restrict:"E",template:"<h3 class='theDirective'><strong>Yep: this is a directive as well</strong></h3>"}});