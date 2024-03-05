const express = require('express');
const minionsRouter = require('./router/minions');
const ideasRouter = require('./router/ideas');
const meetingsRouter = require('./router/meetings');
const apiRouter = express.Router();

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
