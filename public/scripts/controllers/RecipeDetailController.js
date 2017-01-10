(function() {
    'use strict';

    angular.module('app')
    .controller('RecipeDetailController', function($location, $routeParams, $log, dataService) {
        var vm = this;
        vm.categories = null;

        vm.$back = function() {
            window.history.back();
        };

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

        dataService.getCategories(function(response) {
            vm.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            vm.foodItems = response.data;
        });

        if($location.$$path === '/edit/' + $routeParams.id) {
            console.log("row clicked");
            vm.edit = true;
            vm.validationErrors = false;
            dataService.getRecipeById($routeParams.id, function(recipe) {
                vm.recipe = recipe.data;
            });
        }  else {
            vm.recipe = vm.getBlankRecipe();
        }

        vm.saveRecipe = function(recipe) {
            vm.validationErrors = false;
            // Are we saving an editted recipe or a new recipe?
            if($location.$$path === '/add') {
                // save a new recipe
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
                // save an edited recipe
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

        vm.deleteIngredient = function(recipe, index) {
            vm.recipe.ingredients.splice(index, 1);
        };

        vm.addIngredient = function(recipe) {
            var newIngredient = { foodItem: "", condition:  "", amount: "" };
            vm.recipe.ingredients.push(newIngredient);
        };

        vm.deleteStep = function(recipe, index) {
            vm.recipe.steps.splice(index, 1);
        };

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