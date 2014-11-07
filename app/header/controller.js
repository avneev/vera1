'use strict';

angular.module('myApp.header', [])
.controller('HeaderCtrl',  ['$scope', '$rootScope', 'xhrFactory', function($scope, $rootScope, xhrFactory) {
	
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
		console.log("I am shown"+$scope.fixedSubmenu);
	};
	$scope.hideSubMenu = function (item){
		item.subMenuVisible = false;
		$scope.fixedSubmenu = false;
	}
	

}]).directive("sticky", function($window) {
	return {
		link: function(scope, element, attrs) {

			var $win = angular.element($window);

			if (scope._stickyElements === undefined) {
				scope._stickyElements = [];

				$win.bind("scroll.sticky", function(e) {
					var pos = $win.scrollTop();
					for (var i=0; i<scope._stickyElements.length; i++) {

						var item = scope._stickyElements[i];

						if (!item.isStuck && pos > item.start) {
							item.element.addClass("stuck");
							item.isStuck = true;

							if (item.placeholder) {
								item.placeholder = angular.element("<div></div>")
								.css({height: item.element.outerHeight() + "px"})
								.insertBefore(item.element);
							}
						}
						else if (item.isStuck && pos < item.start) {
							item.element.removeClass("stuck");
							item.isStuck = false;

							if (item.placeholder) {
								item.placeholder.remove();
								item.placeholder = true;
							}
						}
					}
				});

				var recheckPositions = function() {
					for (var i=0; i<scope._stickyElements.length; i++) {
						var item = scope._stickyElements[i];
						if (!item.isStuck) {
							item.start = item.element.offset().top;
						} else if (item.placeholder) {
							item.start = item.placeholder.offset().top;
						}
					}
				};
				$win.bind("load", recheckPositions);
				$win.bind("resize", recheckPositions);
			}

			var item = {
				element: element,
				isStuck: false,
				placeholder: attrs.usePlaceholder !== undefined,
				start: element.offset().top
			};

			scope._stickyElements.push(item);

		}
	};
});