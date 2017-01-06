(function() {
    'use strict';

    angular.module('app')
    .controller('RecipeDetailController', function($location, $routeParams, dataService) {
        var vm = this;
        vm.categories = null;

        vm.$back = function() {
            window.history.back();
        };

        dataService.getCategories(function(response) {
            vm.categories = response.data;            
        });

        dataService.getFoodItems(function(response) {
            vm.foodItems = response.data;
        })
/*
        dataService.getRecipe(function(response) {
            vm.recipe = response.data;            
        });
*/
        if($location.$$path === '/edit/' + $routeParams.id) {
            console.log("row clicked");
            vm.edit = true;
            vm.validationErrors = false;
            dataService.getRecipeById($routeParams.id, function(recipe) {
                vm.recipe = recipe.data;
            });
        }  else {
            vm.recipe = {
                name: "",
                description: "",
                category: "",
                prepTime: 0,
                cookTime: 0,
                ingredients: [{}],
                steps: [{}],
                _id: ""
            };
        }

        vm.saveRecipe = function(recipe) {
            // Are we saving an editted recipe or a new recipe?
            if($location.$$path === '/add') {
                // save a new recipe
                console.log("Saving new recipe");
                console.log(recipe);
                dataService.saveNewRecipe(recipe, function(response) {
                    console.log("saved new recipe");
                });
            } else {
                // save an edited recipe
                console.log("saving an edited recipe");
                dataService.saveRecipe(recipe, function(response) {
                    console.log("saved " + recipe.name);
                });
            }
        };

        vm.deleteIngredient = function(recipe, index) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            vm.recipe.ingredients.splice(index, 1);
        };

        vm.addIngredient = function(recipe) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            var newIngredient = { foodItem: "", condition:  "", amount: "" };
            vm.recipe.ingredients.push(newIngredient);
        };

        vm.deleteStep = function(recipe, index) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            vm.recipe.steps.splice(index, 1);
        };

        vm.addStep = function(recipe) {
            //dataService.deleteIngredient($index);
            //console.log("The " + recipe.ingredients[index].foodItem + " recipe has been deleted.");
            var newStep = { description: "" };
            if (vm.edit) {
                var index = prompt('Please enter step placement (1, 2, etc.)');
                vm.recipe.steps.splice(index-1, 0, newStep);
            } else {
                vm.recipe.steps.push(newStep);
            }
        };

        
/*
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


        vm.addRecipe = function() {
            $location.path('/add');
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

            vm.deleteTodos = function(todo, $index) {
                dataService.deleteTodo(todo);
                vm.todos.splice($index, 1);
            };

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