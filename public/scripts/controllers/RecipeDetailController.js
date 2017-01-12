/** 
 * @file RecipeDetailController.js
 * @fileOverview Controller for displaying recipe detail, used in editting and adding recipes
 * @author Pattey Bleecker
 * @version 1.0.0
 * 
 */
(function() {
    'use strict';

    angular.module('app')
    .controller('RecipeDetailController', function($location, $routeParams, $log, dataService) {

        var vm = this;
        vm.categories = null;

        /** DataService calls to fill necessary data objects */
        dataService.getCategories(function(response) {
            vm.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            vm.foodItems = response.data;
        });

        /**
         * @name     vm.$back
         * 
         * @function Moves backward in browser history. Called by cancel button
         * 
         */
        vm.$back = function() {
            window.history.back();
        };

        /**
         * @name     vm.getBlankRecipe
         * 
         * @function Creates a new instance of recipe object
         * @returns {object} recipe 
         * 
         */
        vm.getBlankRecipe = function() {
            var recipe = {
                name: "",
                description: "",
                category: "",
                prepTime: 0,
                cookTime: 0,
                ingredients: [{}],
                steps: [{}],
                _id: ""
            };
            return recipe;
        };

        /** Figure out if user wants to edit or add a recipe
         *  If editing, get the recipe requested, else get new instance of recipe
         */
        if($location.$$path === '/edit/' + $routeParams.id) {
            vm.edit = true;
            vm.validationErrors = false;
            dataService.getRecipeById($routeParams.id, function(recipe) {
                vm.recipe = recipe.data;
            });
        }  else {
            vm.recipe = vm.getBlankRecipe();
        }

         /**
         * @name     vm.saveRecipe
         * 
         * @function Invoked when user clicks on Save button
         * 
         */
        vm.saveRecipe = function(recipe) {
            vm.validationErrors = false;
            // If adding a new recipe
            // Acknowledge successful save and ask if user wants to add another
            // On error, show validation errors
            if($location.$$path === '/add') {
                dataService.saveNewRecipe(recipe, function(response) {
                    vm.recipe = response.data;
                    var another = confirm(recipe.name + " saved. Do you want to add another?");
                    if (!another) {
                        vm.$back();
                    } else {
                         vm.recipe = vm.getBlankRecipe();
                    }
                }, function(error) {
                    vm.validationErrors = true;
                    vm.errors = error.data.errors;
                });
            } else {
                // else save an edited recipe
                // Alert user re: successful save 
                // On error, show validation errors
                dataService.saveRecipe(recipe, function(response) {
                    vm.recipe = response.data;
                    var another = alert(recipe.name + " has been updated.");
                    vm.$back();
                }, function(error) {
                    //console.log(error);
                    vm.validationErrors = true;
                    vm.errors = error.data.errors;
                });
            }
        };

        /**
         * @name     vm.deleteIngredient
         * 
         * @function Invoked when user clicks on garbage can icon in foodItems list
         * 
         * @param   {object} recipe The recipe with the desired foodItem
         * @param   {integer} index The index of the foodItem to be deleted
         * 
         */
        vm.deleteIngredient = function(recipe, index) {
            vm.recipe.ingredients.splice(index, 1);
        };

        /**
         * @name     vm.addIngredient
         * 
         * @function Invoked when user clicks on Add Ingredient button
         * 
         * @param   {object} recipe The recipe of the added foodItem
         * 
         */
        vm.addIngredient = function(recipe) {
            var newIngredient = { foodItem: "", condition:  "", amount: "" };
            vm.recipe.ingredients.push(newIngredient);
        };

        /**
         * @name     vm.deleteStep
         * 
         * @function Invoked when user clicks on garbage can icon of step list
         * 
         * @param   {object} recipe The recipe with the desired step
         * @param   {integer} index The index of the step to be deleted
         * 
         */
        vm.deleteStep = function(recipe, index) {
            vm.recipe.steps.splice(index, 1);
        };


        /**
         * @name     vm.addStep
         * 
         * @function Invoked when user clicks on Add Step button
         * 
         * @param   {object} recipe The recipe with the desired foodItem
         * 
         */
        vm.addStep = function(recipe) {
            var newStep = { description: "" };
            if (vm.edit) {
                var index = prompt('Please enter step placement (1, 2, etc.)');
                vm.recipe.steps.splice(index-1, 0, newStep);
            } else {
                vm.recipe.steps.push(newStep);
            }
        };
     });
})();