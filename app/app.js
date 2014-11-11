'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.header',
  'myApp.footer',
  'myApp.home',
  'myApp.product-listing',
  'myApp.product-detail',
  'myApp.outlet',
  'myApp.search',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]).
directive('changeOnHover', function() {
	return {
		restrict : 'A',
		scope : {
			changeOnHover: '='			
		},
		link : function(scope, ele, attrs) {
			setTimeout(function(){

				var imageLeft = ele.offset().left;
				var imageRight = imageLeft + ele.find("img.productImg").width();
				var width = imageRight-imageLeft;
				var oldX = 0;
				var mouseMoved;
				var i = 0;
				
				function getMousePosition(event){
					if(event.pageX - oldX > 30 || oldX - event.pageX > 30){	
						ele.find("img.productImg").attr('src', scope.changeOnHover.plpImgList[i].src);
						i++;
						if(i>2) i =0;	
						oldX = event.pageX;
					}
				}
        function setOriginalImage(event){
          ele.find("img.productImg").attr('src', scope.changeOnHover.image);
        }

				ele.mousemove(getMousePosition);	
        ele.mouseleave(setOriginalImage)
			}, 250);
		}
	}
}).
run(function($rootScope, $route, $http, $location, xhrFactory) {
  $rootScope.$on('$routeChangeSuccess', function() {
    $('html,body').animate({scrollTop: 0}, 100);
    if($location.path() == '/outlet'){
      $rootScope.isOutlet = true;
      $rootScope.breadCrumb = "";
      xhrFactory.getList('nav-right-outlet.json').then(
        function(response) {
          $rootScope.navRight = response;
        },
        function(error) {
          console.log(error);
        }
      )
    }else{
        if($location.path() == '/'){
          $rootScope.breadCrumb = "";
        }
        $rootScope.isOutlet = false;
        xhrFactory.getList('nav-right.json').then(
          function(response) {
            $rootScope.navRight = response;
          },
          function(error) {
            console.log(error);
          }
        )
    }
  });
}).filter('to_trusted', ['$sce', function($sce){
      return function(text) {
          return $sce.trustAsHtml(text);
      };
}]);
