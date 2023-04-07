const express = require('express');
const addToCart = require('./middlewares/addToCart');
const getCart = require('./middlewares/getCart');

const cartRouter = express.Router();
cartRouter.get('/getFromCart', getCart);
cartRouter.post('/addToCart', addToCart);

module.exports = cartRouter;
