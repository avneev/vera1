'use strict';

angular.module('myApp.auth', ['ngRoute', 'ngCookies'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'auth/view.html',
    controller: 'AuthCtrl'
  });
}])

.controller('AuthCtrl', ['$rootScope', '$scope', '$cookieStore', '$location' ,function($rootScope, $scope, $cookieStore, $location) {
	$rootScope.layoutClass="";
	$rootScope.auth = false;
	

	$scope.authenticateUser = function(user) {
		console.log($scope.user)
		if($scope.user.name === "admin" && $scope.user.password === "R@zorf1sh") {
			$cookieStore.put('auth', 1);
			$rootScope.auth = true;
			$location.path('/vera');
			$scope.user.$invalid = false;
			$scope.user.$error = "";
		} else {
			$scope.user.$error = "Invalid Credentials";
			$scope.user.$invalid = true;
		}
	};
}]);