(function(){
    angular.module("login", []);
    
    angular.module("login")
    .config(function(){
        console.log("Login config function");
    })
    .run(function(){
        console.log("Login run function");
    })
})();