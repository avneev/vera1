'use strict';

angular.module('myApp.product-listing', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product-listing', {
    templateUrl: 'product-listing/view.html',
    controller: 'ProductListingCtrl'
  });
}])

.controller('ProductListingCtrl', [function() {
	console.log('product-listing')
}]);