(function() {
    'use strict';

    angular.module('app')
    .controller('RecipeDetailController', function($scope, $location, $routeParams, dataService) {

        $scope.categories = null;
/*
        dataService.getRecipe(function(response) {
            $scope.recipe = response.data;            
        });
*/
        if($location.$$path === '/edit') {
            console.log("row clicked");
            dataService.getRecipeById($routeParams.id, function(recipe) {
                $scope.recipe = recipe.data;
            });
        } else {
            console.log("else clause");
        }
/*
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


        $scope.addRecipe = function() {
            $location.path('/add');
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

            $scope.deleteTodos = function(todo, $index) {
                dataService.deleteTodo(todo);
                $scope.todos.splice($index, 1);
            };

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