(function(){
    
    function productsCtrl(productsSvc){
        var vm = this;
        productsSvc.getProducts()
        .then(function(res){
            console.log(res);
            vm.products = res.data.products;
        })
        .catch(function(err){
            console.log("Error Occured");
        })
        
    };
    
    angular.module("products")
    .controller("productsCtrl", ["productsSvc", productsCtrl]);
    
})();