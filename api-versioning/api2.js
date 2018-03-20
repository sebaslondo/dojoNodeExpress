const express = require('express');

const api = express.Router();

api.get('/timezone', (req, res) => {
	res.send('API2: new respones for /timezone\n');
});

module.exports = api;
