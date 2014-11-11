'use strict';

angular.module('myApp.header', [])
.controller('HeaderCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	$scope.showSearchPanel = false;
	xhrFactory.getList('nav-left.json').then(
		function(response) {
			$scope.navleft = response;
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
	$scope.search = function(val){
		
		if(val.length >= 2 && val === 'we'){
			$scope.showSearchPanel = true;
		}else {
			$scope.showSearchPanel = false;
		}
	};

	function closeSearch () {
		$('.searchbox').removeClass('searchbox-open');
		$('.searchbox-input').focusout();
	 	$('.sticky-nav').removeClass('fixed-header-search-expanded');
	   	$('.right-nav').show(25);
	   	$('.left-nav').show(25);
	   	$('.img-margin').show(25);
	   	$('.search-logo').hide();
	   	$('#close-search').hide();
	    $('.search').removeClass('search-expanded');
	    $('.img-margin').removeClass('img-expanded');
	 }

	$scope.hideSearch = function(val) {
		closeSearch();	
		val = "";
		$scope.showSearchPanel = false;
	};

}]);
