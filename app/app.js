'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.services',
  'myApp.header',
  'myApp.footer',
  'myApp.home',
  'myApp.product-listing',
  'myApp.product-detail',
  'myApp.outlet',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);


angular.module('myApp').run(function($rootScope, $route, $http, $location, xhrFactory) {
  $rootScope.$on('$routeChangeSuccess', function() {
    $('html,body').animate({scrollTop: 0}, 100);
    if($location.path() == '/outlet'){
      $rootScope.isOutlet = true;
      xhrFactory.getList('nav-right-outlet.json').then(
        function(response) {
          $rootScope.navRight = response;
        },
        function(error) {
          console.log(error);
        }
      )
    }else{
        $rootScope.isOutlet = false;
        xhrFactory.getList('nav-right.json').then(
          function(response) {
            $rootScope.navRight = response;
          },
          function(error) {
            console.log(error);
          }
        )
    }
  });
});