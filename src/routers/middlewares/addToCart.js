const cartquery = require('../../dataBase/query/addToCartQuery');

const addToCart = (req, res) => {
  cartquery(req.body)
    .then((data) => res.json(data.rows))
    .catch(console.error);
};
module.exports = addToCart;
