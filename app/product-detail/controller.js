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
	$scope.toggleOpen = true;
	jQuery(document).foundation({
	  orbit: {
	   animation: 'slide',
     animation_speed: 500,
     navigation_arrows: false,
     bullets: true,
     timer: false,
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
  $scope.toggleCustom = function(){
  	if($scope.toggleOpen){
  	 jQuery(".heightAccordian").css("height", "0");
  	 jQuery(".heightAccordian").css("padding-top", "0");
  	}else{
  		jQuery(".heightAccordian").css("height", "7rem");
  	 	jQuery(".heightAccordian").css("padding-top", "1rem");
  	}
  	$scope.toggleOpen = $scope.toggleOpen === false ? true: false;
  }
}]);