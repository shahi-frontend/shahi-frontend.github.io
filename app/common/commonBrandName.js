(function(){
    
    function cmBrandName(){
        return{
            template: '<a class="navbar-brand" href="#">{{hc.brandName}}</a>'
        }
    }
    
    angular.module("common")
    .directive("cmBrandName", [cmBrandName]);
})();