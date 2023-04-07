const express = require('express');
const getTV = require('./middlewares/getTV');

const TVRouter = express.Router();

TVRouter.get('/TVS', getTV);

module.exports = TVRouter;
