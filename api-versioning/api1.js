const express = require('express');

const api = express.Router();

api.get('/timezone', (req, res) => {
	res.send('Sample response for /timezone\n');
});

api.get('/all_timezones', (req, res) => {
	res.send('/sample response for /all_timezones\n');
});

module.exports = api;
