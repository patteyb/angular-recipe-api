<h2>Project Instructions</h2>
            To complete this project, follow the instructions below.
  <a class="steps-trigger toggle-steps add-css-color " href="#">
    8
    steps
</a>  
<ul>
    <li>
          <h4>Set up your angular application:</h4>

        <ul>
            <li>Create an AngularJS module, save it into a variable called <code>app</code>, and add <code>ngRoute</code> as a dependency. * <u>Important Note: It's important to use <code>app</code> for the name of your app, otherwise the provided Angular routes won't function properly.</u>
            </li>
            <li>Update the <code>index.html</code> file with the ng-app directive.</li>
            <li>As you add JavaScript files to your project, remember to add the necessary script tags to the <code>index.html</code> page</li>
        </ul>
    </li>

    <li>
          <h4>Create a service called <code>dataService</code>. This service will make calls to the REST API we have provided for you. Remember that you’ll need to use the built-in <code>$http</code> service as a dependency for your dataService.</h4>

        <ul>
            <li>The base URL for the REST API is <code>http://localhost:5000/</code>.</li>
            <li>To your service, add methods to call the following API endpoints: 

                <ul>
                    <li>GET <code>/api/recipes</code> - Gets all of the recipes.</li>
                    <li>GET <code>/api/categories</code> - Gets all of the categories.</li>
                    <li>GET <code>/api/fooditems</code> - Gets all of the food items.</li>
                    <li>GET <code>/api/recipes?category={category}</code> - Gets all of the recipes for the specified category.</li>
                    <li>GET <code>/api/recipes/{id}</code> - Gets the recipe for the specified ID.</li>
                    <li>PUT <code>/api/recipes/{id}</code> - Updates the recipe for the specified ID.</li>
                    <li>POST <code>/api/recipes</code> - Adds a recipe.</li>
                    <li>DELETE <code>/api/recipes/{id}</code> - Deletes the recipe for the specified ID.</li>
                </ul>
            </li>
        </ul>
    </li>


      <li>
          <h4>Set up routes for the "Recipes" and "Recipe Detail" screens:</h4>

        <ul>
            <li>Uncomment the commented-out code in the <code>route-config.js</code> file in the <code>scripts</code> folder<br>
            </li>
            <li>The <code>/</code> route will display the "Recipes" screen.</li>
            <li>The <code>/edit/{id}</code> route will display the "Recipe Detail" screen for the specified recipe ID.</li>
            <li>The <code>/add</code> route will display the "Recipe Detail" screen (with no data).</li>
            <li>To create links to the "Recipes" and "Recipe Detail" screens, you can add HTML anchor elements with <code>href</code> attribute values of <code>/#/</code> and <code>/#/edit/{id}</code> (or <code>/#/add</code> if you want to add a recipe). Be sure to replace <code>{id}</code> with an actual recipe ID from your a record in your database.</li>
            <li>From your controllers, you can browse to the "Recipes" and "Recipe Detail" screens using the built-in AngularJS <code>$location</code> service's <code>path</code> method. For instance, after a user has saved a recipe using the “Recipe Detail” screen, you can send the user back to the “Recipes” screen with: <code>$location.path('/')</code>.</li>
        </ul>
    </li>

      <li>
          <h4>Create a <code>RecipesController</code> AngularJS Controller that provides the business logic for the <code>recipes.html</code> template. <u>Important Note: The name of the controller needs to match in order for the provided Angular routes to function properly</u>. Update the <code>RecipesController</code> controller to satisfy the following requirements:</h4>

            <ul>
                <li>The list of recipes can be filtered by the selected category<br>
                </li>
                <li>When a recipe “Edit” button is clicked, the user is taken to the “Recipe Detail” screen, where they can view and edit the details of the recipe. </li>
                <li>Clicking the recipe “Delete” button deleted that recipes. </li>
                <li>Clicking the recipe “Add” button adds a new recipe </li>
            </ul>
        </li>


      <li>
          <h4>Add built-in ng directives to <code>recipes.html</code>.</h4>

            <ul>
                <li>Add directives to the "Categories" select list element to:

                    <ul>
                        <li>Populate the list with the categories from the database.</li>
                        <li>Refresh the recipe list when the user has selected a new category </li>
                    </ul>
                </li>
                <li>Add a directive to the "Add Recipe" button to handle user clicks.</li>
                <li>Add a directive to the "No recipes found!" outermost <code>&lt;div&gt;</code> element so that the message only displays when there are no recipes to display.</li>
                <li>Add directives to the <code>&lt;div&gt;</code> element that represents each recipe row to:

                    <ul>
                        <li>Repeat the <code>&lt;div&gt;</code> element (and it's content) for each recipe to display.</li>
                        <li>Hide the <code>&lt;div&gt;</code> element when there are no recipes to display.</li>
                    </ul>
                </li>
                <li>Within the recipe row <code>&lt;div&gt;</code> element, make the following updates:

                    <ul>
                        <li>Add a directive to the first <code>&lt;a&gt;</code> element in order to allow users to click on a recipe row in order to display the details for that recipe using the "Recipe Detail" screen.</li>
                        <li>Add binding expressions to display the recipe information.</li>
                        <li>Add directives to the "Edit" and "Delete" links to handle user clicks.</li>
                    </ul>
                </li>
            </ul>
      </li>

      <li>
          <h4>Create a <code>RecipeDetailController</code> AngularJS Controller that provides the business logic for the <code>recipe-detail.html</code> template. <u>Important Note: The name of the controller needs to match in order for the provided Angular routes to function properly</u>. Update the <code>RecipeDetailController</code> controller to add the following features:</h4>

            <ul>
                <li>Add or update a recipe. Allow the user to provide the following values::

                    <ul>
                        <li>Name (text box)</li>
                        <li>Description (multi-line text box)</li>
                        <li>Category (select list)</li>
                        <li>Prep Time (text box)</li>
                        <li>Cook Time (text box)</li>
                    </ul>
                </li>
                <li>Add one or more ingredients and steps to a recipe. The user should be able to provide the following values:<br>

                    <ul>
                        <li>Item (select list)</li>
                        <li>Condition (text box)</li>
                        <li>Quantity (text box)</li>
                    </ul>
                </li>
                <li>Add a step to a recipe. The user should be able to provide the following values:

                    <ul>
                        <li>Description (text box)</li>
                    </ul>
                </li>
            </ul>
      </li>

      <li>
          <h4>Add built-in Angular ng directives to <code>recipe-detail.html</code>:</h4>

            <ul>
                <li>Replace the static text "Add/Edit Recipe" with a binding expression that displays the recipe name when editing a recipe.</li>
                <li>When adding a recipe, display the static text 'Add New Recipe'.</li>
                <li>Add directives to both the "Save Recipe" and "Cancel" buttons in order to handle user clicks.</li>
                <li>Add a directive to the validation messages <code>&lt;div&gt;</code> element so that it only displays when there are validation messages to display.</li>
                <li>Within the validation messages <code>&lt;div&gt;</code> element, make the following updates:

                    <ul>
                        <li>Add a directive to <code>&lt;li&gt;</code> element so that it repeats for each validation message that there is to display.</li>
                        <li>Add a binding expression to display the validation user message.</li>
                    </ul>
                </li>
                <li>Add a directive to the following properties to bind their value or contents to the corresponding properties on the recipe model: 

                    <ul>
                        <li>Name, Prep Time and Cook Time <code>&lt;input&gt;</code> elements</li>
                        <li>Description (textarea) </li>
                        <li>Category (select element)</li>
                        <li>Prep Time (input)</li>
                        <li>Cook Time (input)</li>
                    </ul>
                </li>
                <li>Add a directive to the "Ingredient" <code>&lt;div&gt;</code> element so that it repeats for each recipe ingredient to display.</li>
                <li>Add directives to the "Item" <code>&lt;select&gt;</code> element to bind its value to the recipe ingredient model's <code>foodItem</code> property and to populate the list with the food items from the database.</li>
                <li>Add a directive to the "Condition" <code>&lt;input&gt;</code> element to bind its value to the recipe ingredient model's <code>condition</code> property.</li>
                <li>Add a directive to the "Amount" <code>&lt;input&gt;</code> element to bind its value to the recipe ingredient model's <code>amount</code> property.</li>
                <li>Add a directive to the "Delete" <code>&lt;a&gt;</code> element so that you can delete the recipe ingredient when the user clicks on the link.</li>
                <li>Add a directive to the "Add Another Ingredient" <code>&lt;button&gt;</code> element in order to handle when the user clicks to add a new recipe ingredient.</li>
                <li>Add a directive to the "Step" <code>&lt;div&gt;</code> element so that it repeats for each recipe step to display.</li>
                <li>Add a directive to the "Description" <code>&lt;input&gt;</code> element to bind its value to the recipe step model's <code>description</code> property.</li>
                <li>Add a directive to the "Delete" <code>&lt;a&gt;</code> element so that you can delete the recipe step when the user clicks on the link.</li>
                <li>Add a directive to the "Add Another Step" <code>&lt;button&gt;</code> element in order to handle when the user clicks to add a new recipe step.</li>
            </ul>
      </li>

      <li>
          <h4>Wrap all of your JavaScript application, controller, and services code in immediately invoked functions in order to prevent from polluting the global namespace.</h4>