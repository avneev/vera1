'use strict';

angular.module('myApp.product-listing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product-listing', {
    templateUrl: 'product-listing/view.html',
    controller: 'ProductListingCtrl'
  });
}])

.controller('ProductListingCtrl', ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	$rootScope.layoutClass="product-listing";
	$scope.showQuickView = false;
	$scope.filtersList = [];
	$rootScope.breadCrumb = "<a href='#'>HOME</a> / <a style='font-weight:bold;' href='#/product-listing'>BAGS</a>";
	xhrFactory.getList('quick-view.json').then(
		function(response) {
			$scope.quickViewListing = response;		},
		function(error) {
			console.log(error);
		}
	)

	xhrFactory.getList('product-listing1.json').then(
		function(response) {
			$scope.plpListing = response;		},
		function(error) {
			console.log(error);
		}
	)

	xhrFactory.getList('filter-listing.json').then(
		function(response) {
			$scope.filterListing = response;
		},
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
		$scope.filtersList.push(item)
	};

	$scope.removeFilter = function(item) {
		item.active = false;
		angular.forEach($scope.filtersList, function(value, key){
			if(value.name == item.name)
				$scope.filtersList.splice(key,1); 
		});
	};

	$scope.quickView = function(product) {
		$scope.showQuickView = true;
		$scope.productView = product;
		setTimeout(function(){
			jQuery('html, body').animate({
		        scrollTop: jQuery(".quick-view-container").offset().top-200
		    }, 1500);
		},100);
	};
	$scope.closeQuickView = function() {
		$scope.showQuickView = false;
		$scope.productView = [];
		setTimeout(function(){
			jQuery('html, body').animate({
		        scrollTop: jQuery(".quick-view-row").offset().top-200
		    }, 1500);
		},100);
	};

	xhrFactory.getList('product-listing.json').then(
		function(response) {
			$scope.productListing = response;
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
	    bullets: true,
	    timer:false
	  }
	});

}]);