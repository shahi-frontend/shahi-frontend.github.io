(function(){
    
    function cmLogin(){
        return{
            templateUrl: "app/login/login.tpl.html",
            controller: "loginCtrl"
        }
    };
    
    angular.module("common")
    .directive("cmLogin", [cmLogin]);
})();