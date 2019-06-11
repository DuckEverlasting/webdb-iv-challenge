exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .references("id")
        .inTable("recipes")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .references("id")
        .inTable("ingredients")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl.primary(["recipe_id", "ingredient_id"])
      tbl.float("amount");
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("recipe_ingredients");
};
