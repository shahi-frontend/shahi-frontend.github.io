(function(){
    
    function lookupService(){
        
        var countries = [
                            {code: "IN", name: "India"},
                            {code: "USA", name: "United States of America"},
                            {code: "UK", name: "United Kingdom"}
                        ];
        
        this.getCountries = function(){
            return countries;
        };
        
        //For default Country Selection
        this.defaultCountry = function(){
            var country = "";
            angular.forEach(countries, function(item){
                if(item.code == "IN"){
                    country = item;
                }
            });
        }
          
    };
    
    angular.module("common")
    .service("lookupService", [lookupService]);
})();