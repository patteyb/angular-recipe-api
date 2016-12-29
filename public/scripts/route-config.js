
(function() {
  'use strict';

  // The Angular $routeProvider is used to configure routes for your application.
  
  // Three routes are configured below:
  // 1) The root of the application "/" which serves up the "Recipes" view.
  // 2) The recipe edit route "/edit/:id" which serves up the "Recipe Detail" view.
  // 3) The recipe add route "/add" which also serves up the "Recipe Detail" view.

  // TODO Uncomment this code after you've configured the `app` module.
  
   angular
     .module('app')
     .config(['$routeProvider', '$locationProvider', config]);

   function config($routeProvider, $locationProvider) {
     $routeProvider
       .when('/', {
         controller: 'RecipesController',
         controllerAs: 'vm',
         templateUrl: 'templates/recipes.html'
       })
       .when('/edit/:id', {
         controller: 'RecipeDetailController',
         controllerAs: 'vm',
         templateUrl: 'templates/recipe-detail.html'
       })
       .when('/add', {
         controller: 'RecipeDetailController',
         controllerAs: 'vm',
         templateUrl: 'templates/recipe-detail.html'
       })
       .when('/delete/:id', { // This was added by me
         controller: 'RecipesController',
         controllerAs: 'vm',
         templateUrl: 'templates/recipes.html'
       })
       .otherwise({
         redirectTo: '/'
       });
       if(window.history && window.history.pushState) {
          /** use the HTML 5 History API */
            $locationProvider.html5Mode({enabled: true, requireBase: false});
       }
   }
})();
