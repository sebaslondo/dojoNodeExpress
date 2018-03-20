const express = require('express');

const apiVersion1 = require('./api1.js');
const apiVersion2 = require('./api2.js');

const app = express();

app.use('/v1', apiVersion1);
app.use('/v2', apiVersion2);

app.listen(3000, () => {
	console.log('App Started on port 3000');
});
