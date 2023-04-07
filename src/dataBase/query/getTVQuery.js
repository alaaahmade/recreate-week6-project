const connection = require('../connection/connection');

const getTVQuery = () => connection.query('select * from products where catogry_id = 2');

module.exports = getTVQuery;
