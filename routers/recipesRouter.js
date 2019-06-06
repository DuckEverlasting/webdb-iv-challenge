const express = require('express');
const router = express.Router();

const recipes = require('./recipesModel.js');

router.post('/', (req, res) => {
  const recipe = req.body
  recipes.addRecipe(recipe)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

router.get('/', (req, res) => {
  recipes.getRecipes()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  recipes.getRecipe(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  recipes.updateRecipe(id, changes)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  recipes.removeRecipe(id)
    .then(data => {
      data ? res.status(200).json(data) : res.status(404).json({ message: "no such item." })
    })
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

module.exports = router;