'use strict';

angular.module('myApp.product-listing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product-listing', {
    templateUrl: 'product-listing/view.html',
    controller: 'ProductListingCtrl'
  });
}])

.controller('ProductListingCtrl', ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {

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

}]);