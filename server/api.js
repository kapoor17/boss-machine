const express = require('express');
const minionsRouter = require('./router/minions');
const apiRouter = express.Router();

apiRouter.use('/minions', minionsRouter);

apiRouter.get('/', (req, res, next) => {
    res.send('Hello World');
})

module.exports = apiRouter;
