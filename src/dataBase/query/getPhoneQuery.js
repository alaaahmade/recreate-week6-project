const connection = require('../connection/connection');

const getPhoneQuery = () => connection.query('select * from products where id = 1');

module.exports = getPhoneQuery;
