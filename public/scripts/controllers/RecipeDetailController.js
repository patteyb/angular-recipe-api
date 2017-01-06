(function() {
    'use strict';

    angular.module('app')
    .controller('RecipeDetailController', function($scope, $location, $routeParams, dataService) {

        $scope.categories = null;

        $scope.$back = function() {
            window.history.back();
        };

        dataService.getCategories(function(response) {
            $scope.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            $scope.foodItems = response.data;
        })
/*
        dataService.getRecipe(function(response) {
            $scope.recipe = response.data;            
        });
*/
        if($location.$$path === '/edit/' + $routeParams.id) {
            //console.log("row clicked");
            $scope.edit = true;
            $scope.validationErrors = false;
            dataService.getRecipeById($routeParams.id, function(recipe) {
                $scope.recipe = recipe.data;
            });
        }  else {
            $scope.recipe = {
                name: "",
                description: "",
                category: "",
                prepTime: 0,
                cookTime: 0,
                ingredients: [{}],
                steps: [{}],
                _id: ""
            };

            $scope.category = {
                name: "",
                _id: ""
            };
        }

        $scope.saveRecipe = function(recipe) {
            // Are we saving an editted recipe or a new recipe?
            if($location.$$path === '/add') {
                // save a new recipe
                console.log("Saving new recipe");
                $scope.recipe.category = $scope.category.name;
                $scope.recipe._id = $scope.category._id;
                                console.log(recipe);
                dataService.saveNewRecipe(recipe, function(response) {
                    console.log("saved new recipe");
                });
            } else {
                // save an editted recipe
                console.log("saving an editted recipe");
                dataService.saveRecipe(recipe, function(response) {
                    console.log("saved " + recipe.name);
                });
            }
        };

        $scope.deleteIngredient = function(recipe, index) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            $scope.recipe.ingredients.splice(index, 1);
        };

        $scope.addIngredient = function(recipe) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            var newIngredient = { foodItem: "", condition:  "", amount: "" };
            $scope.recipe.ingredients.push(newIngredient);
        };

        $scope.deleteStep = function(recipe, index) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            $scope.recipe.steps.splice(index, 1);
        };

        $scope.addStep = function(recipe) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            var newStep = { description: "" };
            if ($scope.edit) {
                var index = prompt('Please enter step placement (1, 2, etc.)');
                $scope.recipe.steps.splice(index-1, 0, newStep);
            } else {
                $scope.recipe.steps.push(newStep);
            }
        };

        
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