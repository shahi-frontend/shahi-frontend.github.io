(function(){
    
    function cmPost($compile){
        return{
            link: function(scope, element, attr){
                var snippet = "";
                if(scope.type[0] == "video"){
                    snippet = '<video width="500" height="350" controls><source src="{{url}}" type="video/mp4"></video>';
                }
                else if(scope.type[0] == "image"){
                    snippet = '<img ng-src="{{url}}" />';
                }
                var linkFn = $compile(snippet);
                var content = linkFn(scope);
                element.append(content);
            }
        }
    };
    
    angular.module("common")
    .directive("cmPost", ["$compile", cmPost]);
})();