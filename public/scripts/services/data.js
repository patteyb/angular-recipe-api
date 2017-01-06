'use strict';

angular.module('app')
 .service('dataService', function($http) {

        var urlBase = '/api';

        this.helloWorld = function() {
            console.log("this is the data service's method");
        };

        this.getRecipes = function(callback) {
            $http.get(urlBase + '/recipes')
            .then(callback);
        };

        this.getRecipesByCategory = function(category, callback) {
            console.log('Category name: ', category.name);
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
            console.log("In data.js, ", id);
            $http.get(urlBase + '/recipes/' + id)
            .then(callback);
        };

        this.getRecipeById = function(id, callback) {
            console.log("In data.js, ", id);
            $http.get(urlBase + '/recipes/' + id)
            .then(callback);
        };

        this.saveRecipe = function(recipe) {
            $http.put(urlBase + '/recipes/' + recipe._id, recipe);
        };

        this.saveNewRecipe = function(recipe) {
            $http.post(urlBase + '/recipes/', recipe);
        };
 
        this.deleteRecipe = function(recipe) {
            console.log("The " + recipe + " recipe has been deleted.");
            $http.delete(urlBase + '/recipes/' + recipe._id);
            // other logic
        };

        this.deleteIngredient = function(index) {
            console.log("The " + recipe.ingredient[index] + " ingredient has been deleted.");
            $http.delete(urlBase + '/recipes/' + recipe.ingredient[index]);
            // other logic
        };
  /*      
        this.saveRecipes = function(recipes) {
            console.log(recipes.length + " recipes have been saved.");
        }; */
    });