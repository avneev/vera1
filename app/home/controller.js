'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'home/view.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$rootScope',function($rootScope) {
	  $rootScope.layoutClass="";
}]);