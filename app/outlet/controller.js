'use strict';

angular.module('myApp.outlet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/outlet', {
    templateUrl: 'outlet/view.html',
    controller: 'OutletCtrl'
  });
}])

.controller('OutletCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	//angular.element('body').addClass('outlet');
	// xhrFactory.getList('nav-right-outlet.json').then(
	// 	function(response) {
	// 		$rootScope.navRight = response;
	// 	},
	// 	function(error) {
	// 		console.log(error);
	// 	}
	// )
}]);