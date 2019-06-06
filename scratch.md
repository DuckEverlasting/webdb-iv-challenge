DISH
-id (pk)
-name (varchar unique)

RECIPE
-id (pk)
-name (varchar unique)
-dish_id (int fk)

INGREDIENT
-id (pk)
-name (varchar unique)

RECIPE_INGREDIENTS
-recipe_id (pk)
-ingredient_id (pk)
-ingredient_amount (floating #)

///

save instructions for cooking a recipe

input DISH and RECIPE (or just RECIPE?) and get all INGREDIENTS needed

///

functions:

addDish(dish)
getDishes()
getDish(id)
getRecipes()
addRecipe(recipe)

