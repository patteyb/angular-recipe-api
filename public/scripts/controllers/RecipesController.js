/** 
 * @file RecipesController.js
 * @fileOverview Controller for displaying list of recipes in database used in recipes.html
 * @author Pattey Bleecker
 * @version 1.0.0
 * 
 */
(function() {
    'use strict';

    angular.module('app')
    .controller('RecipesController', function(dataService, $location) {

        var vm = this;

        vm.addRecipe = addRecipe;
        vm.categories = null;
        vm.deleteRecipe = deleteRecipe;
        vm.editRecipe = editRecipe;
        vm.getRecipesByCategory = getRecipesByCategory;

        /** Direct calls to dataService to fill necessary data objects */
        dataService.getRecipes(function(response) {
            vm.recipes = response.data;            
        });

        dataService.getCategories(function(response) {
            vm.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            vm.foodItems = response.data;            
        });

        /**
         * @name     getRecipesByCategory
         * 
         * @function Retrieves recipes. If user selects category from 
         *           pull-down menu, it will retrieve only recipes that
         *           fall in that category. Otherwise, gets all recipes.
         */
        function getRecipesByCategory() {
            if (vm.category) {
                dataService.getRecipesByCategory(vm.category, function(response) {
                    vm.recipes = response.data;            
                });
            } else {
                dataService.getRecipes(function(response) {
                    vm.recipes = response.data;            
                });
            }
        };

        /**
         * @name     editRecipe
         * 
         * @function Appends '/edit/:id' to path that will
         *           invoke RecipeDetailController and recipe-detail.html
         * 
         * @param   {string} id Unique identified for a recipe
         * 
         */
        function editRecipe(id) {
            $location.path('/edit/' + id);
        };

        /**
         * @name     addRecipe
         * 
         * @function Appends '/add' to path that will
         *           invoke RecipeDetailController and recipe-detail.html
         * 
         */
        function addRecipe() {
            $location.path('/add');
        };

        /**
         * @name     deleteRecipe
         * 
         * @function Asks for confirmation to delete a recipe. If confirmed will
         *           call dataService to delete the recipe and remove it from recipes array
         * 
         * @param   {object} recipe Recipe to delete
         * @param   {integer} index Index of recipe in recipe array
         * 
         */
        function deleteRecipe(recipe, index) {
            var okToDelete = confirm('Are you sure you want to delete ' + recipe.name + '?');
            if (okToDelete) {
                dataService.deleteRecipe(recipe);
                vm.recipes.splice(index, 1);
            }
        };
    });
})();