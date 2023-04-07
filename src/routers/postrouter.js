const express = require('express');
const products = require('./middlewares/postproducts');

const postrouter = express.Router();

postrouter.post('/add', products);

module.exports = postrouter;
