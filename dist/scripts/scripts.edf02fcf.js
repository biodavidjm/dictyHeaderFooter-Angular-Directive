!function(){"use strict";angular.module("dictyHeaderFooterApp",[])}(),function(){"use strict";function a(a,b,c,d){a.footer="Dynamic Footer (this is dynamic itself)",a.header="directive of the Header",a.sections={},b.getJasonFile().success(function(b){a.sections.menus=b}).error(function(){d.error("EEERRRRROOOOORRRR!!")})}a.$inject=["$scope","dictyhfFactory","$http","$log"],angular.module("dictyHeaderFooterApp").controller("dictyHeaderFooterCtrl",a)}(),function(){"use strict";function a(){return{restrict:"E",templateUrl:"templates/dicty-footer.html"}}angular.module("dictyHeaderFooterApp").directive("dictyFooter",a)}(),function(){"use strict";function a(){return{restrict:"E",templateUrl:"templates/dicty-header.html"}}angular.module("dictyHeaderFooterApp").directive("dictyHeader",a)}(),function(){"use strict";angular.module("dictyHeaderFooterApp").directive("firstDirective",function(){return{restrict:"E",template:"<h3 class='theDirective'><strong>Yep: this is a directive as well</strong></h3>"}})}(),angular.module("dictyHeaderFooterApp").factory("dictyhfFactory",["$http",function(a){return{getJasonFile:function(){return a.get("templates/links.json")}}}]);