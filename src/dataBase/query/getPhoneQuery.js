const connection = require('../connection/connection');

const getPhoneQuery = () => connection.query('select * from products where catogry_id = 1');

module.exports = getPhoneQuery;
