'use strict';

angular.module('myApp.search', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/search', {
    templateUrl: 'search/view.html',
    controller: 'SearchCtrl'
  });
}])

.controller('SearchCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	
}]);
