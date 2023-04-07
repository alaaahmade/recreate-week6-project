const getCartQuery = require('../../dataBase/query/getCartQuery');

const getCart = (req, res) => {
  getCartQuery()
    .then((data) => data.rows)
    .then((data) => res.json(data))
    .catch(console.error);
};

module.exports = getCart;
