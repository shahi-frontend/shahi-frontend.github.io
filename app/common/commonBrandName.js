(function(){
    
    function cmBrandName(){
        return{
            template: '<a class="navbar-brand" href="#">{{hc.brandName}}</a>',
            link: function(scope, element, attr){
                
            }
            //DETAILS OF LINKING PHASE
            
//            compile(element, attr){
//                console.log(element);
//                console.log(attr);
//                return{
//                   pre : function(scope, element, attr){
//                       //Initialize any kind of data
//                       console.log(scope);
//                       console.log(element);
//                       console.log(attr);
//                   },
//                   post : function(scope, element, attr){
//                       //Adding an event
//                       console.log(scope);
//                       console.log(element);
//                       console.log(attr);
//                   }
//                }
//            }
            

        }
    }
    
    angular.module("common")
    .directive("cmBrandName", [cmBrandName]);
})();