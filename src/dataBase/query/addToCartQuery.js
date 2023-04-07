/* eslint-disable camelcase */

const connection = require('../connection/connection');

const cartquery = (opj) => {
  const {
    img, catogry_id, name, discreption, price,
  } = opj;
  const options = {
    text: 'insert into cart (img, catogry_id, name,discreption ,price) values ($1, $2, $3, $4, $5) returning *',
    values: [img, catogry_id, name, discreption, price],
  };
  return connection.query(options);
};
module.exports = cartquery;
