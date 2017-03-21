(function(){
    
    function registerCtrl(lookupSvc){
        var vm = this;
        vm.user = {};
        vm.countries = lookupSvc.getCountries();
//        vm.countries = [{code: "IN", name: "India"},
//                        {code: "USA", name: "United States of America"},
//                        {code: "UK", name: "United Kingdom"}
//                       ];
        
        vm.register = function(){
            
        }
    }
    
    angular.module("register")
    .controller("registerCtrl", ["lookupService", registerCtrl]);
})();