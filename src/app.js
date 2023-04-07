/* eslint-disable import/extensions */
const express = require('express');
const { join } = require('path');
// const router = require('./routers/router');
const phoneRouter = require('./routers/phonerouter');
const TVRouter = require('./routers/TVRouter');
const headphoneRouter = require('./routers/headphoneRouter');
const postrouter = require('./routers/postrouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('PORT', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
app.use('/products', phoneRouter);
app.use('/products', TVRouter);
app.use('/products', headphoneRouter);
app.use('/products', postrouter);
module.exports = app;
