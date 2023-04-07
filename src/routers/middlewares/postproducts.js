const postquery = require('../../dataBase/query/postQuery');

const products = (req, res) => {
  postquery(req.body)
    .then((data) => res.json(data.rows))
    .catch(console.error);
};
module.exports = products;
