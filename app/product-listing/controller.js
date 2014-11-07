'use strict';

angular.module('myApp.product-listing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product-listing', {
    templateUrl: 'product-listing/view.html',
    controller: 'ProductListingCtrl'
  });
}])

.controller('ProductListingCtrl', ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {

	$scope.showQuickView = false;

	xhrFactory.getList('quick-view.json').then(
		function(response) {
			$scope.quickViewListing = response;		},
		function(error) {
			console.log(error);
		}
	)

	xhrFactory.getList('filter-categories.json').then(
		function(response) {
			$scope.categories = response;
			$scope.selectedCategory = $scope.categories[0].imgList;
			$scope.categories[0].active = true;
		},
		function(error) {
			console.log(error);
		}
	)

	$scope.changeCategory = function(item) {
		angular.forEach($scope.categories, function(value, key){
			value.active = false;
		});
		$scope.selectedCategory = item.imgList;
		item.active = true;
	};

	$scope.addFilter = function(item) {
		item.active = true;
	};

	$scope.removeFilter = function(item) {
		item.active = false;
	};

	$scope.quickView = function(product) {
		$scope.showQuickView = true;
		$scope.productView = product;
	};
	$scope.closeQuickView = function() {
		console.log('asda')
		$scope.showQuickView = false;
		$scope.productView = [];
	};

	xhrFactory.getList('product-listing.json').then(
		function(response) {
			$scope.productListing = response;
			console.log($scope.productListing)
		},
		function(error) {
			console.log(error);
		}
	)

	$(document).foundation({
	  orbit: {
	    animation: 'slide',
	    timer_speed: 5000,
	    pause_on_hover: true,
	    animation_speed: 1000,
	    navigation_arrows: false,
	    bullets: true
	  }
	});

}]);