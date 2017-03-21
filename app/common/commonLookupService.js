(function(){
    
    function lookupService($q, $http){
        
        var countries = [
                            {code: "IN", name: "India"},
                            {code: "USA", name: "United States of America"},
                            {code: "UK", name: "United Kingdom"}
                        ];
        
//        this.getCountries = function(){
////            return countries;
//            //Promise is the pattern dt will make call asynchronous by default
//            
//            //step2- Create defer object
//            var dfd = $q.defer();
//            
//            if(countries.length > 0){
//                dfd.resolve(countries);
//            }else{
//                dfd.reject("There is some error");
//            }
//            
//            //step3- return promise
//            return dfd.promise;
//        };
        
        this.getCountriesJson = function(){
            var dfd = $q.defer();
            
            $http.get("api/countries.json")
            .then(function(response){
                console.log(response);
                dfd.resolve(response.data.countries);
            })
            .catch(function(errorResponse){
                console.log(errorResponse);
                dfd.reject("Error Occured");
            });
            return dfd.promise;
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
    .service("lookupService", ["$q", "$http", lookupService]);
})();