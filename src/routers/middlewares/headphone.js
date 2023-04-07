const getheadphoneQuery = require('../../dataBase/query/getheadphonQuery');

const getheadPhone = (req, res) => {
  getheadphoneQuery()
    .then((data) => res.json(data.rows))
    .catch(console.error);
};
module.exports = getheadPhone;
