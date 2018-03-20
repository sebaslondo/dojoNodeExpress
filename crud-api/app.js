const express = require('express');

const app = express();

// curl http://localhost:3000
app.get('/', (req, res) => {
	res.send('you just send a GET request.\n');
});

// curl -X POST http://localhost:3000
app.post('/', (req, res) => {
	res.send('a POST request? nice\n');
});

app.put('/', (req, res) => {
	res.send('you just send a PUT request.\n');
});

app.delete('/', (req, res) => {
	res.send("I don't see a lot of DELETE requests anymore\n");
});

app.delete('/', (req, res) => {
	res.send('oh my, a DELETE?')
});

app.listen(3000, () => {
	console.log('App is listening on port 3000');
});
