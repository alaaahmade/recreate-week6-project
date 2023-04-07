const express = require('express');
const { join } = require('path');
// const router = require('./routers/router');
const phoneRouter = require('./routers/phonerouter');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('PORT', PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));
//app.use(router);
app.use(phoneRouter);

module.exports = app;
