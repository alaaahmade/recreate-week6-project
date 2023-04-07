/* eslint-disable camelcase */

const connection = require('../connection/connection');

const postquery = ({
  img, catogry_id, name, discreption, price,
}) => {
  const options = {
    text: 'insert into products (img, catogry_id, name,discreption ,price) values ($1, $2, $3, $4, $5) returning (img, catogry_id, name,discreption ,price)',
    values: [img, catogry_id, name, discreption, price],
  };
  return connection.query(options);
};
module.exports = postquery;
