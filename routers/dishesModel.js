const db = require('../data/dbConfig.js')

module.exports = {
  addDish,
  getDishes,
  getDish,
  updateDish,
  removeDish
}

function addDish(dish) {
  return db('dishes')
    .insert(dish)
    .then(ids => {
      [id] = ids;
      return getDish(id);
    });
}

function getDishes() {
  return db('dishes');
}

function getDish(id) {
  return db('dishes')
    .where('id', id)
    .first();
}

function updateDish(id, changes) {
  return db('dishes')
    .where('id', id)
    .update(changes)
    .then(dish => {
      if(dish > 0) {
        return getDish(id);
      } else {
        return null;
      }
    })
}

function removeDish(id) {
  return getDish(id)
    .then(dish => {
      return db('dishes')
        .where('id', id)
        .del()
        .then(() => {
          return dish
        });
    });
}