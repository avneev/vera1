'use strict';

/* Services */

angular.module('myApp.services', [])
.value('version', '0.1')
.factory('xhrFactory', function($q, $timeout, $http) {
    var rtm = {
        getList: function(fileName) {
            var deferred = $q.defer();
            $timeout(function() {	
                $http.get('data/'+fileName).success(function(data) {
                    deferred.resolve(data);
                });
            }, 30);
            return deferred.promise;
        }
    };
    return rtm;
});