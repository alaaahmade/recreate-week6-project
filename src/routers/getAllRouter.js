const express = require('express');
const getAllProducts = require('./middlewares/getAllData');

const GetAllRouter = express.Router();

GetAllRouter.get('/All', getAllProducts);

module.exports = GetAllRouter;
