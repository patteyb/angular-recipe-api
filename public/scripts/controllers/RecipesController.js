
(function() {
    'use strict';

    angular.module('app')
    .controller('RecipesController', function($scope, dataService, $location) {

        $scope.categories = null;
        
        dataService.getRecipes(function(response) {
            $scope.recipes = response.data;            
        });

        dataService.getCategories(function(response) {
            $scope.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            $scope.foodItems = response.data;            
        });

        $scope.getRecipesByCategory = function() {
            if ($scope.category) {
                dataService.getRecipesByCategory($scope.category, function(response) {
                    $scope.recipes = response.data;            
                });
            } else {
                dataService.getRecipes(function(response) {
                    $scope.recipes = response.data;            
                });
            }
        };

        $scope.getRecipe = function() {
            dataService.getRecipe($scope.myRecipe, function(response) {
                console.log('In getRecipe(), ', myRecipe);
                $scope.recipe = response.data;            
            });
        };

        $scope.editRecipe = function(id) {
            $location.path('/edit/' + id);
        };

        $scope.addRecipe = function() {
            $location.path('/add');
        };

        $scope.deleteRecipe = function(recipe, index) {
                dataService.deleteRecipe(recipe);
                $scope.recipes.splice(index, 1);
            };

            $scope.deleteIngredient = function(index) {
                //dataService.deleteRecipe(recipe);
                //$scope.recipes.splice(index, 1);
                console.log('Hi, There')
            };

        /*
            $scope.addRecipe = function() {
                var todo = {name: "This is a new todo."};
                $scope.todos.unshift(todo); // adds todo to beginning of list
            };

            $scope.helloWorld = dataService(helloWorld);

            dataService.getTodos(function(response) {
                console.log(response.data);
                $scope.todos = response.data;
            });


            $scope.saveTodos = function() {
                var filteredTodos = $scope.todos.filter(function(todo) {
                    if(todo.edited) {
                        return todo;
                    }
                });
                dataService.saveTodo(filteredTodos);
            }; */
        });
})();