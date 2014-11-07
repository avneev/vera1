'use strict';

angular.module('myApp.outlet', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/outlet', {
    templateUrl: 'outlet/view.html',
    controller: 'OutletCtrl'
  });
}])

.controller('OutletCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
$rootScope.layoutClass ="outlet";
}]);