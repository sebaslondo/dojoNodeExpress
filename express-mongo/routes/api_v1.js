const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send({ response : 'GET Received!'});
});
router.post('/users', (req, res) => {
  res.send({ response : 'POST Received!'});
});
router.put('/users/:id', (req, res) => {
  res.send({ response : 'UPDATE' + req.params.id});
});
router.delete('/users/:id', (req, res) => {
  res.send({ response : 'DELETE' + req.params.id });
});

module.exports = router;
