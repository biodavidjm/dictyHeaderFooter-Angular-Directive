!function(){"use strict";angular.module("dictyFooterApp",[])}(),function(){"use strict";function a(a,b,c){a.title="Dynamic Footer (this is dynamic itself)",a.sections={},b.get("templates/links.json").success(function(b){a.sections.menus=b}).error(function(){c.error("ERROR!!")})}a.$inject=["$scope","$http","$log"],angular.module("dictyFooterApp").controller("dictyFooterCtrl",a)}(),function(){"use strict";function a(){return{restrict:"E",templateUrl:"templates/dicty-footer.html"}}angular.module("dictyFooterApp").directive("dictyFooter",a)}(),function(){"use strict";angular.module("dictyFooterApp").directive("firstDirective",function(){return{restrict:"E",template:"<h3 class='theDirective'><strong>Yep: this is a directive as well</strong></h3>"}})}();