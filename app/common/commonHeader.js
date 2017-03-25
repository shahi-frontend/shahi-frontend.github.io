(function(){
    
    function cmHeader(){
        return{
            templateUrl: "app/header/header.tpl.html",
            restrict: "C"
        }
    }
    
    angular.module("common")
    .directive("cmHeader", [cmHeader]);
})();