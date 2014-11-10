/**
 dictyFooter.directive.js
 ----------------

The directive of the footer

*/

angular
    .module('dictyFooterApp')
    .directive('dictyFooter', dictyFooter);

    function dictyFooter () {
            return{
                restrict:'E',
                templateUrl:"templates/dicty-footer.html"
            };
    }
