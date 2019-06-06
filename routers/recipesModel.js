const db = require('../data/dbConfig.js')

module.exports = {
  addRecipe,
  getRecipes,
  getRecipe,
  updateRecipe,
  removeRecipe
}

function addRecipe(recipe) {
  return db('recipes')
    .insert(recipe)
    .then(ids => {
      [id] = ids;
      return getRecipe(id);
    });
}

function getRecipes() {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select('recipes.id', 'dishes.dish_name', 'recipes.recipe_name')
}

function getRecipe(id) {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dish_id')
    .select('recipes.id', 'dishes.dish_name', 'recipes.recipe_name')
    .where('recipes.id', id)
    .first();
}

function updateRecipe(id, changes) {
  return db('recipes')
    .where('id', id)
    .update(changes)
    .then(recipe => {
      if(recipe > 0) {
        return getRecipe(id);
      } else {
        return null;
      }
    })
}


function removeRecipe(id) {
  return getRecipe(id)
    .then(recipe => {
      return db('recipes')
        .where('id', id)
        .del()
        .then(() => {
          return recipe
        });
    });
}