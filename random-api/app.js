const express = require('express');

const app = express();

app.get('/', (req, res) => {

	res.send(`<a href="/random/1/100">Random API</a>`)
});

app.get('/random/:min/:max', (req, res) => {
	
	var min = parseInt(req.params.min);
	var max = parseInt(req.params.max);

	if(isNaN(min) || isNaN(max)) {
		res.status(404);
		res.json({
			error: 'Bad Request'
		});
		return;
	}

	var result = Math.round(Math.random() * (max - min) + min);

	res.json({result});
});

app.listen(3000, () => {
	console.log('App started on port 3000');
});
