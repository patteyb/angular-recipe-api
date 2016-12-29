angular.module('app')
    .factory('dataFactory', ['$http', function($http) {
    
    var urlBase = '../../src/api/data';
    var dataFactory = {};

    dataFactory.getRecipes = function() {
        return $http.get(urlBase + '/recipes');
    };
}]);