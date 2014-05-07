var app = angular.module('app', []).
config( function( $httpProvider){
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

app.controller('MomentageCtrl', function($scope,$http){
	$("#loadingContainer").fadeIn();
    var url = "http://momentage-api-staging.herokuapp.com/v1/moments/featured?callback=JSON_CALLBACK";
    $scope.data = "apple";
    $http.get(url)
        .success( function(data){
            $scope.data = data;

            
        	$("#loadingContainer").fadeOut();
        	$("#imageList").show();
        	$("#profileInfo").show();
        	$("#imgTopArea").fadeIn();
        	$(".fancybox").fancybox({
        		openEffect	: 'none',
        		closeEffect	: 'none'
        	});
        });
        
});