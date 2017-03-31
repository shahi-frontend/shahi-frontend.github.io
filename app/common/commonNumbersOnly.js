(function(){
    
    function cmNumbersOnly(){
        return{
            restrict: "A",
            link: function(scope, element, attr){
                
                var lengthOfNumbers = attr["maxnumbers"]
                element.bind("keypress", function(e){
                    console.log(e);
                    if(e.keyCode>=48 && e.keyCode<=57 && this.value.length<=lengthOfNumbers){
                        
                    }
                    else{
                        e.preventDefault();
                    }
                })
            }
        }
    };
    
    angular.module("common")
    .directive("cmNumbersOnly", [cmNumbersOnly]);
})();