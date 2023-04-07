const express = require('express');
const getPhone = require('./middlewares/getphone');

const phoneRouter = express.Router();

phoneRouter.get('/phones', getPhone);

module.exports = phoneRouter;
