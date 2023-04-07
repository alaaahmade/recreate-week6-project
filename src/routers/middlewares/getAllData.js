const getAllQuery = require('../../dataBase/query/getAllQuery');

const getAllProducts = (req, res) => {
  getAllQuery()
    .then((data) => data.rows)
    .then((data) => res.json(data))
    .catch(console.error);
};

module.exports = getAllProducts;
