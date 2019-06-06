
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {recipe_name: 'Mom\'s Ravioli', dish_id: 1}, //1
        {recipe_name: 'Bob\'s Ravioli', dish_id: 1}, //2
        {recipe_name: 'Really Good Lasagna', dish_id: 2}, //3
        {recipe_name: 'Just Okay Lasagna', dish_id: 2}, //4
      ]);
    });
};
