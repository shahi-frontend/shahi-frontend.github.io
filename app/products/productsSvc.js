(function(){
    
    function productsSvc($q, $http){
        this.getProducts = function(){
            var dfd = $q.defer();
            
            //making http call
            $http.get("api/products.json")
            .then(function(response){
                dfd.resolve(response);
            })
            .catch(function(errResponse){
                dfd.reject("Error Occured");
            });
            return dfd.promise;
        }
    
    }
    
    angular.module("products")
    .service("productsSvc", ["$q", "$http", productsSvc]);
})();