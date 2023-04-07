const getPhoneQuery = require('../../dataBase/query/getPhoneQuery');

const getPhone = (req, res) => {
  getPhoneQuery()
    .then((data) => res.json(data.rows))
    .catch(console.error);
};
module.exports = getPhone;
