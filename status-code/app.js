const express = require('express');

const app = express();

// the default status code is 200
app.get('/', (req, res) => {
	res.send('Works!');	
});

app.use((req, res) => {
	res.status(404).json({error: 'Resource not found.'});
});



