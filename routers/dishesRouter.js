const express = require('express');
const router = express.Router();

const dishes = require('./dishesModel.js');

router.post('/', (req, res) => {
  const dish = req.body
  dishes.addDish(dish)
    .then(data => res.status(201).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

router.get('/', (req, res) => {
  dishes.getDishes()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  dishes.getDish(id)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
})

router.put('/:id', (req, res) => {
  const id = req.params.id
  const changes = req.body
  dishes.updateDish(id, changes)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

router.delete('/:id', (req, res) => {
  const id = req.params.id
  dishes.removeDish(id)
    .then(data => {
      data ? res.status(200).json(data) : res.status(404).json({ message: "no such item." })
    })
    .catch(err => res.status(500).json({ message: "oh dear. something has gone wrong.", error: err }))
});

module.exports = router;