(function() {
'use strict';

angular.module('app')
 .service('dataService', function($http) {

        var urlBase = '/api';

        this.getRecipes = function(callback) {
            $http.get(urlBase + '/recipes')
            .then(callback);
        };

        this.getRecipesByCategory = function(category, callback) {
            if (!category ) {
                http.get(urlBase + '/recipes')
                    .then(callback);
            } else {
                $http.get(urlBase + '/recipes?category=' + category.name)
                .then(callback);
            }
        };

        this.getCategories = function(callback) {
            $http.get(urlBase + '/categories')
            .then(callback);
        };

        this.getFoodItems = function(callback) {
            $http.get(urlBase + '/foodItems')
            .then(callback);
        };

        this.getRecipe = function(id, callback) {
            $http.get(urlBase + '/recipes/' + id)
            .then(callback);
        };

        this.getRecipeById = function(id, callback) {
            $http.get(urlBase + '/recipes/' + id)
            .then(callback);
        };

        this.saveRecipe = function(recipe, successCallback, errorCallback) {
            $http.put(urlBase + '/recipes/' + recipe._id, recipe).
            then(successCallback, errorCallback);
        };

        this.saveNewRecipe = function(recipe, successCallback, errorCallback) {
            $http.post(urlBase + '/recipes/', recipe)
                .then(successCallback, errorCallback);
        };
 
        this.deleteRecipe = function(recipe) {
            $http.delete(urlBase + '/recipes/' + recipe._id);
        };

        this.deleteIngredient = function(index) {
            $http.delete(urlBase + '/recipes/' + recipe.ingredient[index]);
        };
    });
})();