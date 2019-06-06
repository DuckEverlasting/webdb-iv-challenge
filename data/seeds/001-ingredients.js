
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {ingredient_name: 'cup of flour'}, //1
        {ingredient_name: 'egg'}, //2
        {ingredient_name: 'jar of marinara'}, //3
        {ingredient_name: 'cup of mozzarella'}, //4
        {ingredient_name: 'fresh basil leaf'}, //5
        {ingredient_name: 'box of uncooked ravioli'}, //6
        {ingredient_name: 'box of uncooked lasagna'}, //7
        {ingredient_name: 'tb of butter'}, //8
        {ingredient_name: 'tsp of salt'}, //9
        {ingredient_name: 'lb of beef'}, //10
        {ingredient_name: 'lb of chicken'} //11
      ]);
    });
};
