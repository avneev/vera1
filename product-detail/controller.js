'use strict';

angular.module('myApp.product-detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product-detail', {
    templateUrl: 'product-detail/view.html',
    controller: 'ProductDetailCtrl'
  });
}])

.controller('ProductDetailCtrl', ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	$scope.selectedUrl = "images/pdp/big_bag.jpg";
	jQuery(document).foundation({
	  orbit: {
	   animation: 'slide',
     animation_speed: 500,
     navigation_arrows: false,
     bullets: true,
     timer: true,
     timer_speed: 800,
     pause_on_hover: true, 
    resume_on_mouseout: true,
     slide_number: false
	  }
	});
	$scope.changeImg = function(url){
		$scope.selectedUrl = url;
	}
  $rootScope.layoutClass="";
}]);