const db = require('../data/dbConfig.js')

module.exports = {
  addRecipe,
  getRecipes,
  getRecipe,
  getList,
  updateRecipe,
  removeRecipe
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      [id] = ids;
      return getRecipeSimple(id);
    });
}

function getRecipes() {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select('recipes.id', 'dishes.dish_name', 'recipes.recipe_name')
}

async function getRecipe(id) {
  const recipe = await db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select('recipes.id', 'dishes.dish_name', 'recipes.recipe_name')
    .where('recipes.id', id);
  const ingredients = await getList(id)
  return { recipe, ingredients };
}

function getList(id) {
  return db('recipes')
    .join('recipe_ingredients as ri', 'recipes.id', 'ri.recipe_id')
    .join('ingredients', 'ri.ingredient_id', 'ingredients.id')
    .select('ingredients.ingredient_name', 'ri.amount')
    .where('recipes.id', id)
}

function updateRecipe(id, changes) {
  return db('recipes')
    .where('id', id)
    .update(changes)
    .then(recipe => {
      if(recipe > 0) {
        return getRecipeSimple(id);
      } else {
        return null;
      }
    })
}


function removeRecipe(id) {
  return getRecipeSimple(id)
    .then(recipe => {
      return db('recipes')
        .where('id', id)
        .del()
        .then(() => {
          return recipe
        });
    });
}