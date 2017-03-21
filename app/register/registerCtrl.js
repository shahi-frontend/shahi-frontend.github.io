(function(){
    
    function registerCtrl(lookupSvc){
        var vm = this;
        vm.user = {};
//        vm.countries = lookupSvc.getCountries();
//        vm.countries = [{code: "IN", name: "India"},
//                        {code: "USA", name: "United States of America"},
//                        {code: "UK", name: "United Kingdom"}
//                       ];
        
        //asynchronous data (Promise is returning then and catch)
        lookupSvc.getCountriesJson()
        .then(function(res){
            console.log(res);
            vm.countries = res;
        })
        .catch(function(err){
            console.log(err);
        });
        
        vm.register = function(){
            
        }
    }
    
    angular.module("register")
    .controller("registerCtrl", ["lookupService", registerCtrl]);
})();