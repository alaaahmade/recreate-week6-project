const connection = require('../connection/connection');

const getheadphoneQuery = () => connection.query('select * from products where catogry_id = 3');

module.exports = getheadphoneQuery;
