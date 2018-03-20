const express = require('express');
const Router = express.Router();

router.get('/', (req, res) => {
  res.send('Please Go to <a href="api">/api</a>')
});

module.exports = router;
