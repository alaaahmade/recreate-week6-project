const connection = require('../connection/connection');

const getAllQuery = () => connection.query('select * from products');

module.exports = getAllQuery;
