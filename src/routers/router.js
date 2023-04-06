const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    status: 200,
    massage: 'ok',
  });
});

module.exports = router;
