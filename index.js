const express = require('express');

const server = express();

const dishesRouter = require('./routers/dishesRouter.js');

const recipesRouter = require('./routers/recipesRouter.js');

const port = process.env.PORT || 5000;

server.use(express.json());

server.use('/api/dishes', dishesRouter);

server.use('/api/recipes', recipesRouter);

server.listen(port, () => console.log(`\nHI I'M AT ${port}\n`));