const connection = require('../connection/connection');

const getTVQuery = () => connection.query('select * from products where id = 2');

module.exports = getTVQuery;
