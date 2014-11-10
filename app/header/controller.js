'use strict';

angular.module('myApp.header', [])
.controller('HeaderCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	
	xhrFactory.getList('nav-left.json').then(
		function(response) {
			$scope.navleft = response;
			console.log($scope.navleft)
		},
		function(error) {
			console.log(error);
		}
	)
	$scope.fixedSubmenu = false;
	$scope.showSubMenu = function (item){
		item.subMenuVisible = true;
		$scope.fixedSubmenu = true;
	};
	$scope.hideSubMenu = function (item){
		item.subMenuVisible = false;
		$scope.fixedSubmenu = false;
	}

}]);
