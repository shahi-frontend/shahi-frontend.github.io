(function(){
    
    function cmSilderFn($compile){
        var snippet = "<h2>Range :{{amountRange}}</h2>";
        var amountRange = 0;
        return {
            restict: "A",
            link: function(scope, element, attrs){
                element.slider({
                  range: true,
                  min: 0,
                  max: 500,
                  values: [ 75, 300 ],
                  slide: function( event, ui ) {
                    scope.amountRange = "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ];
                    console.log(amountRange);
                    scope.$apply();
                  }
                
                });
                var content = $compile(snippet)(scope);
                element.append(content);
            }
        }
    }
    
    angular.module("common")
    .directive("cmSilder", ["$compile", cmSilderFn]);
})();