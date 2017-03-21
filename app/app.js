(function(){
    
    // module creation
    angular.module("goodServices", ["login", "register", "header", "common"]);
    
    //consuming module
    angular.module("goodServices")
    .config(function(initProvider){
        console.log("Goodservices config function");
    })
    .run(function(){
        console.log("Goodservices run function");
    })
    .provider("init", function(){
        console.log("Goodservices provider function");
        this.$get = function(){
            
        }
    })
})();