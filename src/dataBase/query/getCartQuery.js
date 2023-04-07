const connection = require('../connection/connection');

const getCartQuery = () => connection.query('select * from cart');

module.exports = getCartQuery;
