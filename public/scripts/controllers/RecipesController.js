(function() {
    'use strict';

    angular.module('app')
    .controller('RecipesController', function(dataService, $location) {

        var vm = this;

        vm.categories = null;

        dataService.getRecipes(function(response) {
            vm.recipes = response.data;            
        });

        dataService.getCategories(function(response) {
            vm.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            vm.foodItems = response.data;            
        });

        vm.getRecipesByCategory = function() {
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

        vm.getRecipe = function() {
            dataService.getRecipe(vm.myRecipe, function(response) {
                console.log('In getRecipe(), ', myRecipe);
                vm.recipe = response.data;            
            });
        };

        vm.editRecipe = function(id) {
            $location.path('/edit/' + id);
        };

        vm.addRecipe = function() {
            $location.path('/add');
        };

        vm.deleteRecipe = function(recipe, index) {
                dataService.deleteRecipe(recipe);
                vm.recipes.splice(index, 1);
            };

            vm.deleteIngredient = function(index) {
                //dataService.deleteRecipe(recipe);
                //vm.recipes.splice(index, 1);
                console.log('Hi, There')
            };

        /*
            vm.addRecipe = function() {
                var todo = {name: "This is a new todo."};
                vm.todos.unshift(todo); // adds todo to beginning of list
            };

            vm.helloWorld = dataService(helloWorld);

            dataService.getTodos(function(response) {
                console.log(response.data);
                vm.todos = response.data;
            });


            vm.saveTodos = function() {
                var filteredTodos = vm.todos.filter(function(todo) {
                    if(todo.edited) {
                        return todo;
                    }
                });
                dataService.saveTodo(filteredTodos);
            }; */
        });
})();