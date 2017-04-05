(function(){
    
    function cmSilder(){
        return{
            restict: "A",
            link: function(scope, element, attrs){
                element.slider({
                  range: true,
                  min: 0,
                  max: 500,
                  values: [ 75, 300 ],
                  slide: function( event, ui ) {
                    var amountRange = "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ];
                    console.log(amountRange);
                  }
                });
            }
        }
    }
    
    angular.module("common")
    .directive("cmSilder", [cmSilder]);
})();