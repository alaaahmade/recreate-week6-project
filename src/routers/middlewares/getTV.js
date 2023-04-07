const getTVQuery = require('../../dataBase/query/getTVQuery');

const getTV = (req, res) => {
  getTVQuery()
    .then((data) => res.json(data.rows))
    .catch(console.error);
};

module.exports = getTV;
