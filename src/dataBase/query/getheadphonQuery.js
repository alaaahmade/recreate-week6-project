const connection = require('../connection/connection');

const getheadphoneQuery = () => connection.query('select * from products where id = 3');

module.exports = getheadphoneQuery;
